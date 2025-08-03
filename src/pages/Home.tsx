export const Home = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-white px-6">
    {/* <div className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12"> */}
    <div className="max-w-2xl">
      <h1 className="text-2xl md:text-4xl text-gray-800">Hi! I am</h1>
      <h1 className="mt-2 max-w-xl text-4xl font-bold md:text-6xl text-blue-600">Jhon Paul Riopay</h1>
      <p className="mt-4 text-base md:text-lg text-gray-500">I'm a <span className="mt-4 text-base md:text-lg font-bold text-blue-600">Web Developer</span> with almost 3 years of experience building
        clean and responsive websites using modern tools like React, TypeScript, and Node.js. 
        I'm looking to join a company where I can enhance my technical skills, take on real-world challenges, and contribute to building meaningful products.</p>
      <button className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
        <a
          href="https://drive.google.com/file/d/1idZxCT-6PsEPEVpZyNx6vu7lTX23RAiW/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >View Resume</a>
      </button>
    </div>
  </section>
)