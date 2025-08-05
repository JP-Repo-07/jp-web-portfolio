import { useState } from "react";
import { CircleDot, Code2, MonitorSmartphone } from "lucide-react";

interface SkillLevel {
  name: string;
  level: number;
}

const skillsData: Record<string, SkillLevel[] | string[]> = {
  Languages: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 70 },
  ],
  "Front-End": [
    { name: "ReactJS", level: 85 },
    { name: "Tailwind", level: 75 },
    { name: "Material Tailwind", level: 75 },
    { name: "Styled Components", level: 65 },
    { name: "Axios", level: 85 },
  ],
  "Back-End / Database": [
    { name: "Node.js", level: 85 },
    { name: "Typescript", level: 60 },
    { name: "Azure", level: 65 },
  ],
  "Tools & Others": [
    { name: "REST APIs", level: 75 },
    { name: "VS Code", level: 90 },
    { name: "Postman", level: 85 },
    { name: "AI Prompting (ChatGPT, Github Copilot)", level: 90 },
    { name: "Azure Logic Apps", level: 65 },
  ],
  "Version Control": [
    { name: "Git", level: 80 },
    { name: "GitHub", level: 80 },
  ],
  "Familiar With": [
    "NextJS",
    "VueJS",
    "Flutter",
    "Docker",
    "C#",
    "PHP",
    "Python",
    "Bootstrap",
    "SQL",
    "AWS Lambda",
  ],
  "Soft Skills": [
    "Accountability",
    "Problem-Solving",
    "Team Collaboration",
    "Adaptability",
    "Self-Motivated",
    "Strong Communication",
    "Initiative",
    "Continuous Learning",
    "Attention to Detail",
    "Critical Thinking",
  ],
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>("Languages");

  const tabTitles = Object.keys(skillsData);

  return (
    <section id="skills" className="min-h-screen bg-[#F4F6F8] px-6 py-20 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-4xl font-bold text-[#1E1E2F] text-center mb-8">
          My Skills
        </h2>

        <p className="text-center text-[#6C7A89] max-w-2xl mx-auto mb-12">
          A quick look at my technical and non-technical skills that support my work in building useful and optimized web applications.
        </p>

        <div className="text-center max-w-3xl mx-auto mb-12 space-y-6">
          <div className="flex items-start gap-4 text-left">
            <Code2 className="text-[#6C7A89] w-8 h-8 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#1E1E2F] mb-1">Development</h3>
              <p className="text-[#6C7A89]">
                writing clean, maintainable code with user-friendly design.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 text-left">
            <CircleDot className="text-[#6C7A89] w-8 h-8 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#1E1E2F] mb-1">Technology</h3>
              <p className="text-[#6C7A89]">
                Uses well-supported tools and frameworks for building stable and efficient web apps.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 text-left">
            <MonitorSmartphone className="text-[#6C7A89] w-8 h-8 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#1E1E2F] mb-1">Responsive</h3>
              <p className="text-[#6C7A89]">
                Interfaces that adjust well to different devices and screen sizes.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabTitles.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm md:text-base ${
                activeTab === tab ? "bg-[#6C7A89] text-white" : "bg-white text-[#6C7A89] hover:bg-[#e1e6eb]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          {typeof skillsData[activeTab][0] === "string" ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {(skillsData[activeTab] as string[]).map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-[#F4F6F8] rounded-lg p-4 text-center text-[#1E1E2F] shadow-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {(skillsData[activeTab] as SkillLevel[]).map(({ name, level }, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#1E1E2F] font-medium">{name}</span>
                    <span className="text-sm text-[#6C7A89]">{level}%</span>
                  </div>
                  <div className="w-full bg-[#F4F6F8] rounded-full h-3">
                    <div
                      className="bg-[#6C7A89] h-3 rounded-full"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
