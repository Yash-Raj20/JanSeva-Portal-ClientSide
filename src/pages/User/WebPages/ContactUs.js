/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from "../../../api/User/axios"; // Keep your existing axios import
import { toast } from "react-toastify"; // Keep your existing toast import
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

const ContactUs = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    try {
      const res = await axios.post(
        "/contact",
        { name, email, subject, message },
        { withCredentials: true }
      );

      if (res.data.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        e.target.reset();
      } else {
        toast.error(res.data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      toast.error("An error occurred while sending your message. Please check your connection.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-[#1a362f] font-sans pt-24 sm:pt-28 md:pt-32 lg:pt-36 py-16 px-4 sm:px-8 lg:px-16 overflow-hidden relative">
      {/* Subtle geometric pattern in background */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: "url('/assets/grid-pattern-light.svg')", // Create this SVG or use a texture
          backgroundSize: "30px 30px",
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <section className="text-center mb-16 py-10 px-6 bg-white rounded-xl shadow-lg border border-gray-100 transform skew-y-1 scale-y-95 transition-transform duration-500 hover:skew-y-0 hover:scale-y-100 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 text-[#1A5319] leading-tight">
            Connect With JanSeva
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed font-light">
            Your bridge to local governance. We're here to listen, assist, and collaborate.
          </p>
        </section>

        {/* Main Content: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information Section - Sleek Card */}
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-gray-100 animate-slide-in-left animation-delay-200 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#0c2218]">
                Our Details
              </h2>

              <div className="space-y-8 mb-10">
                {/* Address */}
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-[#1A5319] text-3xl sm:text-4xl mr-5 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-[#0c2218]">Head Office</h3>
                    <p className="text-gray-700 text-lg">
                      Smart City Department, Block C, Government Complex, <br />
                      New Delhi, India - 110001
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <FaEnvelope className="text-[#1A5319] text-3xl sm:text-4xl mr-5 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-[#0c2218]">Email Support</h3>
                    <p className="text-gray-700 text-lg">
                      <a href="mailto:support@jansevaportal.gov.in" className="text-[#1A5319] hover:underline">support@jansevaportal.gov.in</a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <FaPhoneAlt className="text-[#1A5319] text-3xl sm:text-4xl mr-5 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-[#0c2218]">Phone Assistance</h3>
                    <p className="text-gray-700 text-lg">
                      <a href="tel:+919999988888" className="text-[#1A5319] hover:underline">+91 99999 88888</a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start">
                  <FaClock className="text-[#1A5319] text-3xl sm:text-4xl mr-5 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-[#0c2218]">Business Hours</h3>
                    <p className="text-gray-700 text-lg">
                      Monday - Friday: 9:00 AM - 5:00 PM (IST)
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      (Excluding Public Holidays)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media - Minimalist Line Icons */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#0c2218]">Follow Our Journey</h3>
              <div className="flex gap-6 text-3xl flex-wrap justify-center lg:justify-start">
                <a href="#" className="text-gray-600 hover:text-[#1A5319] transform hover:scale-110 transition-all duration-300" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#1A5319] transform hover:scale-110 transition-all duration-300" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#1A5319] transform hover:scale-110 transition-all duration-300" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#1A5319] transform hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#1A5319] transform hover:scale-110 transition-all duration-300" aria-label="GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section - Clean Card */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-8 sm:p-10 shadow-lg border border-gray-100 text-[#1a362f] space-y-7 animate-slide-in-right animation-delay-400"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#1A5319] text-center">Send Us a Message</h2>
            <p className="text-gray-700 text-center mb-8 font-light">
              We aim to respond to all inquiries within 24-48 business hours.
            </p>

            <div>
              <label htmlFor="name" className="sr-only">Your Name</label> {/* Hidden label for accessibility */}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE26A] focus:border-transparent transition-all duration-200 text-lg placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE26A] focus:border-transparent transition-all duration-200 text-lg placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject of your inquiry"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE26A] focus:border-transparent transition-all duration-200 text-lg placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                rows="6"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE26A] focus:border-transparent transition-all duration-200 text-lg resize-y placeholder-gray-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1A5319] text-white font-bold py-4 rounded-md hover:bg-[#0c2218] transform hover:scale-[1.01] transition-all duration-300 shadow-md text-xl tracking-wide"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* FAQ Section - Clean & Minimal */}
        <section className="mb-20 bg-white rounded-xl shadow-lg p-8 sm:p-10 border border-gray-100 animate-fade-in animation-delay-600">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#1A5319]">
            Quick Answers
          </h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10 font-light">
            Browse our most frequently asked questions for immediate assistance.
          </p>
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-200 pb-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[#0c2218] hover:text-[#1A5319] transition-colors duration-200">
                  How do I report an issue on JanSeva Portal?
                  <span className="transform transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </summary>
                <p className="text-gray-700 mt-3 pl-4">
                  You can report an issue by navigating to the "Report Issue" section after logging in. Provide details, attach photos, and pinpoint the location on the map.
                </p>
              </details>
            </div>
            {/* FAQ Item 2 */}
            <div className="border-b border-gray-200 pb-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[#0c2218] hover:text-[#1A5319] transition-colors duration-200">
                  What is the typical response time for reported issues?
                  <span className="transform transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </summary>
                <p className="text-gray-700 mt-3 pl-4">
                  We strive for prompt responses. While resolution times vary based on the issue's complexity, you can track the real-time status of your report on the portal.
                </p>
              </details>
            </div>
            {/* FAQ Item 3 */}
            <div className="border-b border-gray-200 pb-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[#0c2218] hover:text-[#1A5319] transition-colors duration-200">
                  Can I suggest new features for the portal?
                  <span className="transform transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </summary>
                <p className="text-gray-700 mt-3 pl-4">
                  Absolutely! We welcome your suggestions. Please use the contact form above and select "Feature Suggestion" as your subject.
                </p>
              </details>
            </div>
            {/* FAQ Item 4 */}
            <div>
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[#0c2218] hover:text-[#1A5319] transition-colors duration-200">
                  Is JanSeva Portal available in multiple languages?
                  <span className="transform transition-transform duration-300 group-open:rotate-180">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </summary>
                <p className="text-gray-700 mt-3 pl-4">
                  Currently, the portal primarily supports English and Hindi. We are continuously working to expand language support to serve a wider audience.
                </p>
              </details>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="#" className="text-[#1A5319] font-semibold hover:underline text-lg">
              Visit our comprehensive FAQ section →
            </a>
          </div>
        </section>

        {/* Embedded Map Section */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 animate-fade-in animation-delay-800">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#1A5319]">
            Locate Our Office
          </h2>
          <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-md border border-gray-200">
            <iframe
              title="JanSeva Portal Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.261899173981!2d77.216667!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b0d0c0d0d%3A0x123456789abcdef0!2sGovernment%20Complex%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // Replace with actual Google Maps embed URL
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">
            Visit us during business hours, or use the form for inquiries.
          </p>
        </section>

        {/* Final CTA Section */}
        <section className="text-center bg-[#1A5319] text-white p-10 rounded-xl shadow-lg animate-fade-in animation-delay-1000 transform transition duration-500 hover:scale-[1.01]">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Can't Find What You Need?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto font-light">
            Our support team is ready to provide personalized assistance. Reach out to us directly.
          </p>
          <button className="bg-[#FFE26A] text-[#1A5319] font-bold py-3 px-8 rounded-md hover:bg-yellow-400 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg">
            Send a Direct Message
          </button>
        </section>
      </div>

      {/* Custom Styles and Keyframes for Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.9s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.9s ease-out forwards; }

        /* Staggered animation delays */
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
};

export default ContactUs;