import { FaCodeBranch } from "react-icons/fa";

export const FullstackCard = () => {
    return (

        <div className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 flex items-center justify-center h-40 transition-transform transform hover:-translate-y-2 duration-300">
            <div className="flex gap-4">
                <FaCodeBranch className="text-[#6C7A89] text-5xl" />
                <div>
                    <h3 className="text-xl font-semibold text-[#1E1E2F] mb-1">Full Stack</h3>
                    <p className="text-[#6C7A89] text-sm">3 Projects Made</p>
                </div>
            </div>
        </div>
    );
};
