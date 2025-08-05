import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xrblyzzy", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (json.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("error");
    }
  };


  useEffect(() => {
    if (status === "sent" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 10000); // 10 seconds
      return () => clearTimeout(timer); // cleanup
    }
  }, [status]);

  return (
    <section id="contact" className="min-h-screen bg-[#F4F6F8] px-6 py-22 flex items-center">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-4xl font-bold text-[#1E1E2F] mb-4">Let’s Connect</h2>
          <p className="text-[#6C7A89] mb-8">
            I’d love to hear from you. Whether you have a question or just want to say hi!
          </p>

          <div className="flex space-x-5 text-2xl text-[#1E1E2F]">
            <a href="https://github.com/JP-Repo-07" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-[#6C7A89]" />
            </a>
            <a href="https://linkedin.com/in/jp-rpy-6b3b0b254" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-[#6C7A89]" />
            </a>
          </div>
        </div>

        {/* Right Column - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-8 border border-[#e0e6eb] space-y-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 text-[#1E1E2F] placeholder-[#6C7A89] border border-[#e0e6eb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A2D2FF]"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 text-[#1E1E2F] placeholder-[#6C7A89] border border-[#e0e6eb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A2D2FF]"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Your Message"
            className="w-full px-4 py-2 text-[#1E1E2F] placeholder-[#6C7A89] border border-[#e0e6eb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A2D2FF]"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-[#B2F7EF] text-[#1E1E2F] font-medium py-2 rounded-md hover:bg-[#A2D2FF] transition"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "sent" && <p className="text-green-600">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-600">Something went wrong. Try again.</p>}
        </form>
      </div>
    </section>
  );
}
