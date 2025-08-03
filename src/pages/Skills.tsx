import { SkillCategory } from "../components/SkillCategory"; // adjust path if needed

export const Skills = () => {
    return (
        <section id="skills" className="min-h-screen bg-white px-6 py-16 flex items-center justify-center">
            <div className="w-full max-w-3xl flex flex-col items-center space-y-6">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Skills</h2>
                <div className="w-full shrink-0">
                    <SkillCategory title="Languages" skills={["HTML", "CSS", "JavaScript"]} />
                </div>

                <div className="w-full shrink-0">
                    <SkillCategory title="Front-End" skills={["ReactJS", "Tailwind", "Styled Components", "Axios"]} />
                </div>

                <div className="w-full shrink-0">
                    <SkillCategory title="Back-End / Database" skills={["Node.js", "TypeScript", "Azure"]} />
                </div>

                <div className="w-full shrink-0">
                    <SkillCategory
                        title="Tools & Others"
                        skills={[
                            "REST APIs",
                            "VS Code",
                            "Postman",
                            "AI Prompting (ChatGPT, Github Copilot)",
                            "Azure Logic Apps",
                        ]}
                    />
                </div>

                <div className="w-full shrink-0">
                    <SkillCategory title="Version Control" skills={["Git", "GitHub"]} />
                </div>

                <div className="w-full shrink-0">
                    <SkillCategory
                        title="Familiar With"
                        skills={[
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
                        ]}
                    />
                </div>

                <div className="w-full shrink-0">
                    <SkillCategory
                        title="Soft Skills"
                        skills={[
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
                        ]}
                    />
                </div>
            </div>

        </section>
    );
};
