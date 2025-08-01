import React from "react";
import {
  FaRegEdit,
  FaUsersCog,
  FaBroom,
  FaCheckCircle,
  FaCommentDots,
} from "react-icons/fa";

const steps = [
  {
    title: "Report Problem",
    description: "Citizens or officials report issues via our platform.",
    icon: <FaRegEdit className="text-4xl text-[#0C2218] mb-4" />,
  },
  {
    title: "Assign Team",
    description: "We allocate the right team based on the issue type.",
    icon: <FaUsersCog className="text-4xl text-[#0C2218] mb-4" />,
  },
  {
    title: "Clean or Fix",
    description: "Our team addresses the issue promptly and professionally.",
    icon: <FaBroom className="text-4xl text-[#0C2218] mb-4" />,
  },
  {
    title: "Confirm Completion",
    description: "We confirm the task is resolved and document it.",
    icon: <FaCheckCircle className="text-4xl text-[#0C2218] mb-4" />,
  },
  {
    title: "Feedback",
    description: "Users provide feedback to help us improve.",
    icon: <FaCommentDots className="text-4xl text-[#0C2218] mb-4" />,
  },
];

export default function WorkStep() {
  return (
    <section className="py-16 bg-[#f3f9f6] px-4 sm:px-6 lg:px-16 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2218]">
        How It Works
      </h2>
      <img
        src="./Logo/signature.svg"
        alt="Underline"
        className="mx-auto mb-14 h-6 w-32 object-contain"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            {step.icon}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-500 text-md max-w-md">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 md:mt-14 lg:mt-16">
        <div>
          <button className="uppercase border-2 border-[#FFE26A] px-6 py-3 text-[#0C2218] text-sm font-semibold bg-[#FFE26A] hover:bg-[#0C2218] hover:text-white transition-all">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
