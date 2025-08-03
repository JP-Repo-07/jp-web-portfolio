import React, { useState } from "react";

type SkillCategoryProps = {
  title: string;
  skills: string[];
};

export const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border rounded-lg shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded-t-lg"
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 py-4 bg-white border-t">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-3 bg-blue-50 text-blue-700 rounded-lg text-center shadow-sm font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
