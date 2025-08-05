import { FolderGit2 } from "lucide-react";
import { useRef, useState } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  isLinked: boolean,
  link: string
}

const projects: Project[] = [
  {
    title: "Utility SDK",
    description: "A lightweight and developer-friendly utility SDK for React, Node.js and TypeScript projects",
    tech: ["Node.js", "TypeScript", "Axios"],
    isLinked: true,
    link: "https://www.npmjs.com/package/utility-sdk"
  },
  {
    title: "Tivoli Money Exchange",
    description: "A platform for currency exchange and transfers that includes an approval process for transactions, ensuring each request is reviewed and either approved or rejected.",
    tech: ["React", "Axios", "Material Tailwind", "Node.js"],
    isLinked: false,
    link: ""
  },
  {
    title: "Incub8r (by Hello Charlie)",
    description: "A Web3 social media platform where users earn NFT certificates upon completing courses and milestones.",
    tech: ["React", "Axios", "Tailwind"],
    isLinked: false,
    link: ""
  },
  {
    title: "GCash - GCrypto",
    description: "A superseded module within GCash for buying and managing NFT collections, offering a seamless experience for digital asset transactions.",
    tech: ["Node.js", "TypeScript", "Azure Cosmos DB"],
    isLinked: false,
    link: ""
  },
  {
    title: "Ipophil - Intellectual Property Office of the Philippines",
    description: "A platform for requesting copyright certificates, where admins can approve or reject NCORE applicant registrations. Users can view and update their information to ensure compliance with copyright requirements and obtain a certificate.",
    tech: ["Node.js", "TypeScript", "Azure Cosmos DB"],
    isLinked: false,
    link: ""
  },
  {
    title: "DBM HelpDesk",
    description: "A support ticketing system for generating and managing support requests efficiently.",
    tech: ["HTML", "CSS", "JavaScript", "JQuery", "Ajax"],
    isLinked: false,
    link: ""
  },
  {
    title: "Asseto",
    description: "Asseto is a real-world asset (RWA) tokenization launchpad designed to bridge traditional finance and Web3, enabling businesses to digitize, tokenize, and trade real-world assets like mining, real estate, and commodities on blockchain. ",
    tech: ["Node.js", "Typescript", "Azure Cosmos DB"],
    isLinked: true,
    link: "https://assetorwa.com/"
  },
  {
    title: "Blackfe",
    description: "A Web3 app where users can purchase Bronze, Silver, Gold, and Platinum NFTs linked to their wallet addresses. Built to support the mining and remittance industries, it leverages blockchain technology through a partnership with a $3.6B mining company, FORC.",
    tech: ["Node.js", "Typescript", "Azure Cosmos DB"],
    isLinked: false,
    link: ""
  },
  {
    title: "PalengGo",
    description: "An online ordering platform for web and mobile that streamlines the purchase of market food items, providing users with a fast and convenient shopping experience.",
    tech: ["Node.js", "TypeScript", "AWS Lambda"],
    isLinked: false,
    link: ""
  },
  {
    title: "DMS - Document Management System",
    description: "A web app used to upload and manage documents like leave form etc. Using AI to read text inside uploaded image/pdf files.",
    tech: ["Node.js", "TypeScript"],
    isLinked: false,
    link: ""
  },
  {
    title: "Casa Ciudad Inventory System",
    description: "A desktop application used to store and oraganize vehicle parts and prices for transaction purposes.",
    tech: ["SQLite", "C#"],
    isLinked: false,
    link: ""
  },
  // {
  //   title: "Dmitri's Breakthrough",
  //   description: "A front-end layout for a basic store.",
  //   tech: ["Unity", "C#"],
  //   isLinked: false,
  //   link: ""
  // },
];

const wordLimit = 35

export const Projects = () => {
  const [expandedCards, setExpandedCards] = useState<boolean[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)

  const projectsPerSlide = 2
  const totalSlides = Math.ceil(projects.length / projectsPerSlide)

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const toggleExpand = (idx: number) => {
    const newExpanded = [...expandedCards]
    newExpanded[idx] = !newExpanded[idx]
    setExpandedCards(newExpanded)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const deltaX = touchEndX.current - touchStartX.current
    const threshold = 50 // minimum swipe distance

    if (deltaX > threshold) {
      prevSlide()
    } else if (deltaX < -threshold) {
      nextSlide()
    }
  }

  const getVisibleProjects = () => {
    const start = currentSlide * projectsPerSlide
    return projects.slice(start, start + projectsPerSlide)
  }

  return (
    <section id="projects" className="min-h-screen bg-[#F4F6F8] px-6 py-12 flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#1E1E2F] mb-4">
          My Projects
        </h2>
        <p className="text-[#6C7A89] text-center mb-12 max-w-xl mx-auto">
          A collection of projects I’ve built and actively contributed to, covering real use cases and solving practical challenges.
        </p>

        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid gap-8 sm:grid-cols-2 items-start transition-all duration-300">
            {getVisibleProjects().map((proj, idx) => {
              const realIndex = currentSlide * projectsPerSlide + idx
              return (
                <div
                  key={realIndex}
                  className="bg-white rounded-xl shadow-md p-6 border border-[#e0e6eb] flex flex-col justify-between min-h-[300px]"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <FolderGit2 className="w-6 h-6 text-[#1E1E2F] shrink-0" />
                        <h3 className="text-xl font-semibold text-[#1E1E2F]">
                          {proj.title}
                        </h3>
                      </div>
                      {proj.isLinked && (
                        <button
                          className="text-sm text-sky-600 hover:underline ml-4"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(
                              `${proj.link}`,
                              "_blank"
                            )
                          }}
                        >
                          View
                        </button>
                      )}
                    </div>

                    <p className="text-[#6C7A89] mb-3">
                      {expandedCards[realIndex] ||
                        proj.description.split(" ").length <= wordLimit
                        ? proj.description
                        : proj.description
                          .split(" ")
                          .slice(0, wordLimit)
                          .join(" ") + "..."}
                      {proj.description.split(" ").length > wordLimit && (
                        <button
                          onClick={() => toggleExpand(realIndex)}
                          className="ml-2 text-sm text-sky-600 hover:underline focus:outline-none"
                        >
                          {expandedCards[realIndex] ? "See less" : "See more"}
                        </button>
                      )}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    {proj.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#F4F6F8] text-[#1E1E2F] px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Dot Indicators */}
          <div className="mt-6 flex justify-center items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === i
                  ? "bg-[#1E1E2F]"
                  : "bg-[#6C7A89] opacity-40 hover:opacity-70"
                  }`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevSlide}
              className="text-[#1E1E2F] bg-[#B2F7EF] hover:bg-[#A2D2FF] px-4 py-2 rounded-md font-medium"
            >
              Prev
            </button>
            <button
              onClick={nextSlide}
              className="text-[#1E1E2F] bg-[#B2F7EF] hover:bg-[#A2D2FF] px-4 py-2 rounded-md font-medium"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

