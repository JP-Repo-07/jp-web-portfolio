// About.tsx
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserTie,
  FaGraduationCap,
  FaAward,
  FaMedal,
  FaRegCalendar,
  FaCode,
} from "react-icons/fa";
import { WhatCanIDo } from "../components/WhatCanIDo";

export const About = () => {

  return (
    <section
      id="about"
      className="min-h-screen bg-[#F4F6F8] px-6 py-16 flex items-center justify-center"
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1E1E2F] mb-10 text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Personal Info */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300 p-6">
            <h3 className="text-xl font-semibold text-[#6C7A89] mb-4">Personal Info</h3>
            <p className="flex items-center gap-2 mb-3 text-[#1E1E2F]"><FaEnvelope className="text-[#6C7A89]" /> jhonpaulriopay7@gmail.com</p>
            <p className="flex items-center gap-2 mb-3 text-[#1E1E2F]"><FaPhoneAlt className="text-[#6C7A89]" /> 0927-5516-598</p>
            <p className="flex items-center gap-2 text-[#1E1E2F]"><FaMapMarkerAlt className="text-[#6C7A89]" /> Metro Manila, Philippines</p>
          </div>

          {/* Card 2 - Experience */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300 p-6">
            <h3 className="text-xl font-semibold text-[#6C7A89] mb-4">Experience</h3>
            <p className="flex items-center gap-2 mb-3 text-[#1E1E2F]"><FaRegCalendar className="text-[#6C7A89]" /> 2 years and 9 months</p>
            <p className="flex items-center gap-2 mb-3 text-[#1E1E2F]"><FaCode className="text-[#6C7A89]" /> Full Stack</p>
            <p className="flex items-center gap-2 text-[#1E1E2F]"><FaUserTie className="text-[#6C7A89]" /> Web Developer</p>
          </div>

          {/* Card 3 - Education */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300 p-6">
            <h3 className="text-xl font-semibold text-[#6C7A89] mb-4">Education</h3>
            <p className="flex items-center gap-2 text-[#1E1E2F]"><FaGraduationCap className="text-[#6C7A89]" /> BS in Computer Science</p>
            <p className="flex items-center gap-2 text-[#1E1E2F]"><FaMedal className="text-[#6C7A89]" /> Cum Laude</p>
            <p className="flex items-center gap-2 text-[#1E1E2F]"><FaAward className="text-[#6C7A89]" /> 1st Place (CodeFest: Local Level)</p>
            <p className="flex items-center gap-2 text-[#1E1E2F]"><FaAward className="text-[#6C7A89]" /> 3rd Place (CodeFest: Cluster Level)</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-[#1E1E2F] mb-4">What can I do for you?</h2>
          <p className="text-lg text-[#1E1E2F] mb-8">
            I will contribute to your team, help solve real-world problems and turn ideas into reality
          </p>
          <WhatCanIDo />
        </div>
      </div>
    </section>


  );
};
