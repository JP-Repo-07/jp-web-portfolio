export const Home = () => {

  return (
  <section
    id="home"
    className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#F4F6F8] px-6 pt-20 md:pt-20"
  >
    <div className="flex-1 max-w-xl md:pr-10 flex flex-col items-center justify-center text-center items-start text-left h-full">
      <h1 className="text-2xl md:text-4xl text-[#1E1E2F]">Hi! I am</h1>
      <h1
        className="mt-2 max-w-xl text-4xl font-bold md:text-6xl text-[#6C7A89] animate-slideFadeIn"
        style={{ animation: 'slideFadeIn 0.8s ease-out forwards' }}
      >
        Jhon Paul Riopay
      </h1>

      <p className="mt-4 text-base md:text-lg text-[#1E1E2F]">
        A <span className="font-bold text-[#6C7A89]">Web Developer</span> with almost 3 years of experience building
        clean and responsive websites using modern tools like React, TypeScript, and Node.js.
        I'm looking to join a company where I can enhance my technical skills, take on real-world challenges, and contribute to building meaningful products.
      </p>

      <a
        href="https://drive.google.com/file/d/1idZxCT-6PsEPEVpZyNx6vu7lTX23RAiW/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-6 animate-pulse bg-[#B2F7EF] hover:bg-[#A2D2FF] text-[#1E1E2F] font-semibold px-6 py-3 rounded-lg shadow-md transition-colors">
          View Resume
        </button>
      </a>
    </div>
  </section>
  );
};
