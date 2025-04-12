import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import EnhancedAnyBackground from '../ui/EnhancedAnyBackground';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const PUBLIC_KEY = "2Ds98egQ73RPzekiV"
    const SERVICE_ID = "service_73o1vtn"
    const TEMPLATE_ID = "template_kzhf4y2"

    // Validate form data
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    // Send email using EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: "kagdiadnan123@gmail.com",
      to_name: "Adnan",
   }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-black">
      {/* <EnhancedAnyBackground/> */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-12 animate-on-scroll">
          <span className="inline-block mb-4 px-4 py-1 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white">LET'S CHAT</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">Get In Touch</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Contact card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm">
            {/* Left section - Contact info */}
            <div className="relative p-10 overflow-hidden bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-0"></div>

              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>

                <div className="space-y-10 animate-on-scroll-staggered">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-all">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-white/70">Email</h4>
                      <a
                        href="mailto:kagdiadnan123@example.com"
                        className="text-white hover:text-white group-hover:underline transition-all"
                      >
                        kagdiadnan123@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-all">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-white/70">Phone</h4>
                      <a
                        href="tel:+1234567890"
                        className="text-white hover:text-white"
                      >
                        +91 74879 33450
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-all">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-white/70">Location</h4>
                      <p className="text-white">
                        Vadodara, Gujarat, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-10">
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://github.com/Adnan-Kagdi"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all transform hover:translate-y-[-5px] hover:shadow-md"
                      aria-label="GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.824 1.102.824 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/adnan-kagdi-7011542a4/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all transform hover:translate-y-[-5px] hover:shadow-md"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right section - Form */}
            <div className="p-10 relative bg-black/50">
              <h3 className="text-2xl font-bold mb-8 text-white">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-white/70">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    // value={formData.name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all placeholder:text-white/30 text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white/70">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    // value={formData.email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all placeholder:text-white/30 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-white/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    // value={formData.message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all resize-none placeholder:text-white/30 text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <div>
                  {submitted ? (
                    <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-center">
                      <p className="font-medium text-white">
                        Thank you! Your message has been sent successfully.
                      </p>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      value="Send"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 rounded-lg bg-white text-black font-medium flex items-center justify-center gap-2 transition-all hover:bg-white/90 hover:translate-y-[-4px] hover:shadow-lg group"
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      {!isSubmitting && (
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
