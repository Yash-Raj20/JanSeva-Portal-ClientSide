import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fcfb] to-[#edf4f3] text-[#1a362f] font-poppins pt-24 sm:pt-28 md:pt-32 lg:pt-36 py-16 px-4 sm:px-8 lg:px-16 overflow-hidden relative">
      {/* Abstract background shapes for visual interest */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#FFE26A] rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob-slow"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#A8E6CF] rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob-reverse-slow"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section: The Grand Introduction */}
        <section className="text-center mb-20 py-12 px-6 bg-white rounded-3xl shadow-3xl animate-fade-in border border-gray-100 transform -rotate-1 skew-x-1 scale-95 transition-all duration-700 hover:rotate-0 hover:skew-x-0 hover:scale-100">
          <span className="text-[#1A5319] text-xl font-semibold mb-3 block">Welcome to JanSeva Portal</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-[#0c2218] leading-tight">
            Bridging Dreams. Building Futures.
          </h1>
          <p className="text-gray-700 text-xl sm:text-2xl max-w-5xl mx-auto leading-relaxed italic">
            "Your voice, our commitment – shaping Viksit Bharat 2047, one community at a time."
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-[#1A5319] text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-[#154214] transform hover:scale-105 transition duration-300 shadow-md">
              Discover Our Impact
            </button>
            <button className="border border-[#1A5319] text-[#1A5319] bg-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-[#E0F2F1] transform hover:scale-105 transition duration-300 shadow-md">
              Get Started Now
            </button>
          </div>
        </section>

        {/* Section 1: Our Core Identity - Visual and Text */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 animate-slide-in-left animation-delay-200">
            <h2 className="text-4xl font-bold mb-6 text-[#1A5319]">
              The Heart of Citizen Empowerment
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              JanSeva Portal is not just a digital platform; it's a living embodiment of the **Viksit Bharat 2047** vision. We are architecting a future where seamless interaction between citizens and government is the norm, fostering an environment of **transparency, accountability, and collective progress.**
            </p>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-center text-lg">
                <svg className="w-7 h-7 text-[#FFE26A] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                **Empowering Voices:** Making it effortless to report issues and provide feedback.
              </li>
              <li className="flex items-center text-lg">
                <svg className="w-7 h-7 text-[#A8E6CF] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a2 2 0 012 2v8a2 2 0 01-2 2H6a3 3 0 01-3-3V6zm4 0a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h.01a1 1 0 100-2H10zm3 0a1 1 0 100 2h.01a1 1 0 100-2H13zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H10zm3 0a1 1 0 100 2h.01a1 1 0 100-2H13zm3 0a1 1 0 100 2h.01a1 1 0 100-2H16zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H13zm-3 0a1 1 0 100 2h.01a1 1 0 100-2H10zm-3 0a1 1 0 100 2h.01a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
                **Driving Accountability:** Ensuring swift and visible action on reported concerns.
              </li>
              <li className="flex items-center text-lg">
                <svg className="w-7 h-7 text-[#3D8C84] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v.217l5.922 2.961A1 1 0 0118 7v4a1 1 0 01-1 1h-.217l-2.961 5.922A1 1 0 0113 18v-.217l-5.922-2.961A1 1 0 014 13V9a1 1 0 011-1h.217l2.961-5.922A1 1 0 0111 2v.217l2.961-5.922z" clipRule="evenodd"></path></svg>
                **Fostering Collaboration:** Building bridges between citizens, local bodies, and initiatives.
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 animate-zoom-in animation-delay-400">
            <img
              src="/assets/city-connection.svg" // Illustrative SVG
              alt="Connected City Illustration"
              className="w-full h-auto max-h-96 object-contain rounded-xl shadow-2xl transform hover:scale-102 transition duration-500"
            />
          </div>
        </section>

        {/* Section 2: Our Unique Pillars (Features) */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1A5319]">
            The Pillars of Our Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Pillar 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition duration-300 hover:scale-102 hover:shadow-xl group animate-fade-in animation-delay-600 flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-[#FFE26A] group-hover:bg-[#FFD700] transition-colors duration-300 mb-6">
                <svg className="w-10 h-10 text-[#1A5319]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 7V3.5L18.5 9H14V5.5M6 2C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2H6Z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#1A5319]">Intuitive Grievance Redressal</h3>
              <p className="text-gray-700 leading-relaxed">
                A streamlined process to report local issues, from civic amenities to infrastructure, ensuring your concerns are heard and acted upon.
              </p>
            </div>
            {/* Pillar 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition duration-300 hover:scale-102 hover:shadow-xl group animate-fade-in animation-delay-800 flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-[#A8E6CF] group-hover:bg-[#8CD8B7] transition-colors duration-300 mb-6">
                <svg className="w-10 h-10 text-[#1A5319]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15L6 12l1.41-1.41L11 14.17l4.59-4.59L17 10l-6 6z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#1A5319]">Transparent Progress Tracking</h3>
              <p className="text-gray-700 leading-relaxed">
                Follow your reported issues with real-time updates, status changes, and a clear resolution timeline, all on an interactive map.
              </p>
            </div>
            {/* Pillar 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition duration-300 hover:scale-102 hover:shadow-xl group animate-fade-in animation-delay-1000 flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-[#3D8C84] group-hover:bg-[#30706B] transition-colors duration-300 mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-1.33 0-4-.67-4-2v-1h8v1c0 1.33-2.67 2-4 2zm-4-5.5c-.83 0-1.5-.67-1.5-1.5S7.17 9 8 9s1.5.67 1.5 1.5S8.83 11.5 8 11.5zm8 0c-.83 0-1.5-.67-1.5-1.5S15.17 9 16 9s1.5.67 1.5 1.5S16.83 11.5 16 11.5z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#1A5319]">Vibrant Community Engagement</h3>
              <p className="text-gray-700 leading-relaxed">
                Connect with fellow citizens, share insights, discuss local policies, and collectively drive positive change in your neighborhood.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Our Journey - A Visual Timeline */}
        <section className="mb-24 bg-white rounded-3xl shadow-3xl p-10 border border-gray-100 animate-fade-in animation-delay-1200">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1A5319]">
            The Road We've Travelled
          </h2>
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="hidden md:block border-2-2 absolute border-opacity-20 border-gray-300 h-full border" style={{ left: '50%' }}></div>
            {/* Timeline Item 1 */}
            <div className="mb-8 flex justify-between items-center w-full right-timeline animate-slide-in-left animation-delay-1400">
              <div className="order-1 w-full md:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-[#1A5319] shadow-xl w-10 h-10 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">2023</h1>
              </div>
              <div className="order-1 bg-[#eef5f4] rounded-lg shadow-md w-full md:w-5/12 px-6 py-4">
                <h3 className="mb-2 font-bold text-[#1A5319] text-xl">Inception & Vision Casting</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-700">
                  Inspired by Viksit Bharat 2047, the foundational blueprints for JanSeva Portal were laid, focusing on citizen-government synergy.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline animate-slide-in-right animation-delay-1600">
              <div className="order-1 w-full md:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-[#FFE26A] shadow-xl w-10 h-10 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">2024</h1>
              </div>
              <div className="order-1 bg-[#eef5f4] rounded-lg shadow-md w-full md:w-5/12 px-6 py-4">
                <h3 className="mb-2 font-bold text-[#1A5319] text-xl">Beta Launch & Early Adopters</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-700">
                  The portal saw its first light in a select pilot program, gathering invaluable feedback from pioneering communities.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="mb-8 flex justify-between items-center w-full right-timeline animate-slide-in-left animation-delay-1800">
              <div className="order-1 w-full md:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-[#A8E6CF] shadow-xl w-10 h-10 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">2025</h1>
              </div>
              <div className="order-1 bg-[#eef5f4] rounded-lg shadow-md w-full md:w-5/12 px-6 py-4">
                <h3 className="mb-2 font-bold text-[#1A5319] text-xl">National Expansion & Feature Rollout</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-700">
                  JanSeva Portal scaled nationwide, introducing enhanced features and integrations, marking a significant milestone.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline animate-slide-in-right animation-delay-2000">
              <div className="order-1 w-full md:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-[#3D8C84] shadow-xl w-10 h-10 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">Future</h1>
              </div>
              <div className="order-1 bg-[#eef5f4] rounded-lg shadow-md w-full md:w-5/12 px-6 py-4">
                <h3 className="mb-2 font-bold text-[#1A5319] text-xl">AI Integration & Global Partnerships</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-700">
                  Future plans include AI-driven insights, predictive analytics for urban issues, and collaboration with international smart city initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Our Diverse Team - Humanizing the Portal */}
        <section className="text-center mb-24 bg-white rounded-3xl shadow-3xl p-10 border border-gray-100 animate-fade-in animation-delay-2200">
          <h2 className="text-4xl font-bold mb-8 text-[#1A5319]">
            Meet the Minds Behind the Mission
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
            Our vibrant team comprises passionate innovators, seasoned urban planners, and dedicated public servants. We are united by a singular vision: a better, more connected India.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member Card 1 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 animate-pop-up animation-delay-2400">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg" // Random placeholder image
                alt="Priya Sharma"
                className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-4 border-[#FFE26A] shadow-inner"
              />
              <h4 className="font-bold text-xl text-[#1A5319]">Priya Sharma</h4>
              <p className="text-gray-600 text-sm mb-2">Lead Architect, Technology</p>
              <p className="text-gray-500 text-xs italic">"Innovating for impact."</p>
            </div>
            {/* Team Member Card 2 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 animate-pop-up animation-delay-2600">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg" // Random placeholder image
                alt="Rahul Desai"
                className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-4 border-[#A8E6CF] shadow-inner"
              />
              <h4 className="font-bold text-xl text-[#1A5319]">Rahul Desai</h4>
              <p className="text-gray-600 text-sm mb-2">Director, Community Outreach</p>
              <p className="text-gray-500 text-xs italic">"Connecting hearts and minds."</p>
            </div>
            {/* Team Member Card 3 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 animate-pop-up animation-delay-2800">
              <img
                src="https://randomuser.me/api/portraits/women/72.jpg" // Random placeholder image
                alt="Dr. Anand Gupta"
                className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-4 border-[#3D8C84] shadow-inner"
              />
              <h4 className="font-bold text-xl text-[#1A5319]">Dr. Anand Gupta</h4>
              <p className="text-gray-600 text-sm mb-2">Urban Development Strategist</p>
              <p className="text-gray-500 text-xs italic">"Building smart, sustainable cities."</p>
            </div>
            {/* Team Member Card 4 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 animate-pop-up animation-delay-3000">
              <img
                src="https://randomuser.me/api/portraits/men/29.jpg" // Random placeholder image
                alt="Sonia Kapoor"
                className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-4 border-[#7FCDA6] shadow-inner"
              />
              <h4 className="font-bold text-xl text-[#1A5319]">Sonia Kapoor</h4>
              <p className="text-gray-600 text-sm mb-2">Head, Data Insights</p>
              <p className="text-gray-500 text-xs italic">"Data-driven decisions for a better tomorrow."</p>
            </div>
          </div>
        </section>

        {/* Final Call to Action - Bold and Encouraging */}
        <section className="text-center bg-[#1A5319] text-white p-12 rounded-3xl shadow-3xl animate-fade-in animation-delay-3200 transform transition duration-500 hover:scale-[1.01]">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Ready to Be a Catalyst for Change?
          </h2>
          <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto">
            Your journey to contribute to a cleaner, smarter, and more vibrant India starts here. Join JanSeva Portal and empower your community!
          </p>
          <button className="bg-[#FFE26A] text-[#1A5319] font-bold py-4 px-10 rounded-full text-xl sm:text-2xl hover:bg-yellow-400 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg tracking-wide">
            Join the JanSeva Movement
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
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pop-up {
          from { opacity: 0; transform: translateY(20px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes blob-slow {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.05); }
          50% { transform: translate(-10px, 15px) scale(0.98); }
          75% { transform: translate(15px, 25px) scale(1.02); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes blob-reverse-slow {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-25px, 20px) scale(0.98); }
          50% { transform: translate(10px, -15px) scale(1.05); }
          75% { transform: translate(-10px, -20px) scale(1.02); }
          100% { transform: translate(0, 0) scale(1); }
        }

        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.9s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.9s ease-out forwards; }
        .animate-zoom-in { animation: zoom-in 1s ease-out forwards; }
        .animate-pop-up { animation: pop-up 0.7s ease-out forwards; }
        .animate-blob-slow { animation: blob-slow 15s infinite ease-in-out; }
        .animate-blob-reverse-slow { animation: blob-reverse-slow 17s infinite ease-in-out; }

        /* Staggered animation delays */
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        .animation-delay-1400 { animation-delay: 1.4s; }
        .animation-delay-1600 { animation-delay: 1.6s; }
        .animation-delay-1800 { animation-delay: 1.8s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-2200 { animation-delay: 2.2s; }
        .animation-delay-2400 { animation-delay: 2.4s; }
        .animation-delay-2600 { animation-delay: 2.6s; }
        .animation-delay-2800 { animation-delay: 2.8s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-3200 { animation-delay: 3.2s; }

        /* Responsive timeline line adjustment */
        @media (max-width: 767px) {
          .wrap .border-2-2 {
            left: 20px !important; /* Move vertical line to the left on small screens */
          }
          .right-timeline, .left-timeline {
            flex-direction: column; /* Stack items vertically */
            align-items: flex-start;
          }
          .right-timeline .order-1, .left-timeline .order-1 {
            width: 100% !important; /* Full width for content boxes */
            padding-left: 50px; /* Space for the circle */
          }
          .right-timeline .z-20, .left-timeline .z-20 {
            position: absolute;
            left: 0; /* Align circles to the left */
            margin-left: 0;
            top: 0;
            transform: translateX(-50%); /* Center circle on the line */
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;