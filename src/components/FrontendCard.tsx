import { FaLaptopCode } from "react-icons/fa";

export const FrontendCard = () => {
    return (
        <div className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 flex items-center justify-center h-40 transition-transform transform hover:-translate-y-2 duration-300">
            <div className="flex gap-4">
                <FaLaptopCode className="text-[#6C7A89] text-5xl" />
                <div>
                    <h3 className="text-xl font-semibold text-[#1E1E2F] mb-1">Front-End</h3>
                    <p className="text-[#6C7A89] text-sm">4 Projects Made</p>
                </div>
            </div>
        </div>
    );
};
