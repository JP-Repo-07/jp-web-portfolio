import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserTie,
  FaLaptopCode,
  FaGraduationCap,
  FaAward,
  FaMedal,
  FaRegCalendar,
  FaCode,
} from "react-icons/fa";
import { WhatCanIDo } from "../components/WhatCanIDo";

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Card 1 */}
          <div className="flex flex-col bg-white rounded-xl shadow-md p-6 text-black">
            <h3 className="text-xl font-semibold text-blue-500 mb-4">Personal Info</h3>
            <p className="flex items-center gap-2 text-gray-600"><FaEnvelope className="text-blue-500 w-5 h-5" /> jhonpaulriopay7@gmail.com</p>
            <p className="flex items-center gap-2 text-gray-600"><FaPhoneAlt className="text-blue-500 w-5 h-5" /> 0927-5516598</p>
            <p className="flex items-center gap-2 text-gray-600"><FaMapMarkerAlt className="text-blue-500 w-5 h-5" /> Metro Manila, Philippines</p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col bg-white rounded-xl shadow-md p-6 text-black">
            <h3 className="text-xl font-semibold text-blue-500 mb-4">Experience</h3>
            <p className="flex items-center gap-2 text-gray-600"><FaRegCalendar className="text-blue-500 w-5 h-5" /> 2 year and 9 months of experience</p>
            <p className="flex items-center gap-2 text-gray-600"><FaCode className="text-blue-500 w-5 h-5" />Full Stack</p>
            <p className="flex items-center gap-2 text-gray-600"><FaUserTie className="text-blue-500 w-5 h-5" /> Web Developer</p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col bg-white rounded-xl shadow-md p-6 text-black">
            <h3 className="text-xl font-semibold text-blue-500 mb-4">Education</h3>
            <p className="flex items-center gap-2 text-gray-600"><FaGraduationCap className="text-blue-500 w-5 h-5" /> Bachelor's Degree in Computer Science</p>
            <p className="flex items-center gap-2 text-gray-600"><FaMedal className="text-blue-500 w-5 h-5" /> Cum Laude</p>
            <p className="flex items-center gap-2 text-gray-600"><FaAward className="text-blue-500 w-5 h-5" /> 1st Place (CodeFest: Local Level)</p>
            <p className="flex items-center gap-2 text-gray-600"><FaAward className="text-blue-500 w-5 h-5" /> 3rd Place (CodeFest: Cluster Level)</p>
          </div>
        </div>
        <div className="mt-10 mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 text-center">
            What can I do for you?
          </h2>
          <WhatCanIDo />
        </div>
      </div>
    </section>
  );
};
