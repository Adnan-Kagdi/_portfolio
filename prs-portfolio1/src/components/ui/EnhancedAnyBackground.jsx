import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const EnhancedAnyBackground = () => {
    const { isDarkTheme } = useTheme();
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId;

        // Set canvas dimensions
        // canvas.width = width;
        // canvas.height = height;

        // Create particles
        const particlesArray = [];
        const particleCount = 0; // Increased particle count
        const maxDistance = 0; // Increased connection distance

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 3 + 1;
                this.baseSize = this.size;
                this.speedX = Math.random() * 1.5 - 0.75; // Increased speed
                this.speedY = Math.random() * 1.5 - 0.75; // Increased speed

                // More vibrant color variations
                this.color = isDarkTheme
                    ? `rgba(${100 + Math.random() * 155}, ${100 + Math.random() * 155}, ${180 + Math.random() * 75}, ${Math.random() * 0.3 + 0.2})`
                    : `rgba(${70 + Math.random() * 100}, ${70 + Math.random() * 100}, ${140 + Math.random() * 115}, ${Math.random() * 0.15 + 0.1})`;

                this.glowIntensity = Math.random() * 0.15 + 0.05;
                this.angle = Math.random() * 360;
                this.angleSpeed = Math.random() * 0.03 - 0.015;
                this.orbitRadius = Math.random() * 25 + 10;
                this.orbitX = this.x;
                this.orbitY = this.y;
                this.pulse = 0;
                this.pulseSpeed = Math.random() * 0.015 + 0.01;
                this.hue = Math.random() * 60; // For color cycling
                this.hueSpeed = Math.random() * 0.5 + 0.1;
            }

            update() {
                // Orbital movement
                this.angle += this.angleSpeed;
                this.x = this.orbitX + Math.cos(this.angle) * this.orbitRadius;
                this.y = this.orbitY + Math.sin(this.angle) * this.orbitRadius;

                // Move orbit center
                this.orbitX += this.speedX;
                this.orbitY += this.speedY;

                // Pulse size
                this.pulse += this.pulseSpeed;
                this.size = this.baseSize + Math.sin(this.pulse) * 1.5;

                // Color cycling
                this.hue += this.hueSpeed;
                if (this.hue > 360) this.hue = 0;

                // Boundary checking and bounce for orbit center
                if (this.orbitX + this.orbitRadius > width || this.orbitX - this.orbitRadius < 0) {
                    this.speedX = -this.speedX;
                }
                if (this.orbitY + this.orbitRadius > height || this.orbitY - this.orbitRadius < 0) {
                    this.speedY = -this.speedY;
                }
            }

            draw() {
                // Main glow
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size * 3
                );

                // Dynamic color based on theme
                let particleColor;
                if (isDarkTheme) {
                    // Vibrant colors for dark theme
                    particleColor = `hsla(${this.hue + 220}, 80%, 70%, ${this.glowIntensity})`;
                    gradient.addColorStop(0, particleColor);
                    gradient.addColorStop(1, 'rgba(0,0,0,0)');
                } else {
                    // Softer colors for light theme
                    particleColor = `hsla(${this.hue + 200}, 70%, 60%, ${this.glowIntensity * 0.7})`;
                    gradient.addColorStop(0, particleColor);
                    gradient.addColorStop(1, 'rgba(0, 100, 0)');
                }

                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
                ctx.fill();

                // Core
                ctx.beginPath();
                ctx.fillStyle = particleColor.replace(/[\d.]+\)$/g, '1)');
                ctx.arc(this.x, this.y, this.size / 1.5, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles
        const init = () => {
            for (let i = 0; i < particleCount; i++) {
                particlesArray.push(new Particle());
            }
        };

        // Connect particles with lines
        const connect = () => {
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (1 - (distance / maxDistance)) * 0.5;
                        const hue = (particlesArray[a].hue + particlesArray[b].hue) / 2;

                        // Use more vibrant connection lines
                        ctx.strokeStyle = isDarkTheme ?
                            `hsla(${hue + 220}, 80%, 70%, ${opacity})` :
                            `hsla(${hue + 200}, 70%, 60%, ${opacity * 0.6})`;

                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Create gradient background
            const gradient = ctx.createLinearGradient(0, 0, 0, height);

            if (isDarkTheme) {
                // Rich dark theme with more color depth
                gradient.addColorStop(0, '#000'); // Deep blue-black
                gradient.addColorStop(0.4, '#000'); // Midnight blue
                gradient.addColorStop(0.8, '#000'); // Dark indigo
                gradient.addColorStop(1, '#000'); // Almost black
            } else {
                // Light theme with subtle blue tints
                gradient.addColorStop(0, '#000'); // Slightly blue white
                gradient.addColorStop(0.4, '#000'); // Very light blue
                gradient.addColorStop(0.8, '#000'); // Soft sky blue hint
                gradient.addColorStop(1, '#000'); // Pale blue white
            }

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Update and draw particles
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }

            connect();

            // Mouse movement effect - creates ripple waves
            const time = Date.now() * 0.002;
            const centerX = width / 2;
            const centerY = height / 2;

            ctx.beginPath();
            ctx.arc(
                centerX + Math.sin(time * 0.7) * width * 0.1,
                centerY + Math.cos(time * 0.6) * height * 0.1,
                50 + Math.sin(time * 1.5) * 20,
                0,
                Math.PI * 2
            );

            const pulseGradient = ctx.createRadialGradient(
                centerX + Math.sin(time * 0.7) * width * 0.1,
                centerY + Math.cos(time * 0.6) * height * 0.1,
                0,
                centerX + Math.sin(time * 0.7) * width * 0.1,
                centerY + Math.cos(time * 0.6) * height * 0.1,
                100
            );

            if (isDarkTheme) {
                pulseGradient.addColorStop(0, 'rgba(0, 100, 0)');
                pulseGradient.addColorStop(1, 'rgba(0, 100, 0)');
            } else {
                pulseGradient.addColorStop(0, 'rgba(100, 130, 255, 0.05)');
                pulseGradient.addColorStop(1, 'rgba(100, 130, 255, 0)');
            }

            ctx.fillStyle = pulseGradient;
            ctx.fill();

            animationFrameId = requestAnimationFrame(animate);
        };

        // Handle window resize
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            // Reset particles
            particlesArray.length = 0;
            init();
        };

        window.addEventListener('resize', handleResize);

        init();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, [isDarkTheme]);

    return (
        <div className="absolute inset-0 z-0">
            <canvas ref={canvasRef} className="absolute inset-0" />

            {/* Enhanced grid overlay with depth effect */}
            <div
                className={`absolute inset-0 ${isDarkTheme
                        ? 'bg-[linear-gradient(rgba(0,20,20)_1px,transparent_1px),linear-gradient(to_top,rgba(0,20,20)_0.5px,transparent_1px)]'
                        : 'bg-[linear-gradient(rgba(0,20,20)_1px,transparent_1px),linear-gradient(to_top,rgba(0,20,20)_0.5px,transparent_1px)]'
                    } bg-[size:3px_3px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]`}
            ></div>

            {/* Dynamic glowing orbs with pulsating effect */}
            <div
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-glow-pulse"
                style={{
                    backgroundColor: isDarkTheme ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.15)',
                    animationDuration: '8s'
                }}
            ></div>

            <div
                className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl animate-glow-pulse"
                style={{
                    backgroundColor: isDarkTheme ? 'rgba(159, 122, 234, 0.2)' : 'rgba(159, 122, 234, 0.15)',
                    animationDuration: '12s',
                    animationDelay: '2s'
                }}
            ></div>

            <div
                className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full opacity-15 blur-3xl animate-glow-pulse"
                style={{
                    backgroundColor: isDarkTheme ? 'rgba(236, 72, 153, 0.15)' : 'rgba(236, 72, 153, 0.1)',
                    animationDuration: '15s',
                    animationDelay: '1s'
                }}
            ></div>

            {/* New accent color spots */}
            <div
                className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full opacity-20 blur-3xl animate-glow-pulse"
                style={{
                    backgroundColor: isDarkTheme ? 'rgba(80, 70, 229, 0.2)' : 'rgba(80, 70, 229, 0.15)',
                    animationDuration: '10s',
                    animationDelay: '3s'
                }}
            ></div>
        </div>
    );
};

export default EnhancedAnyBackground;
