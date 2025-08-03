import { FaServer } from "react-icons/fa";

export const BackendCard = () => {
    return (
        <div className="bg-white shadow-md rounded-2xl p-6 flex items-center h-40">
            <div className="mx-auto">
                <div className="flex items-start gap-4">
                    <FaServer className="text-blue-500 text-5xl" /> {/* Large icon on the left */}

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">Back-End</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            7 Projects Made
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
