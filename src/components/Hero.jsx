const Hero = () => {

  const scrollToCourses = () => {
    const section = document.getElementById("courses");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gradient-to-r from-gray-900 to-black text-white">
      
      {/* LEFT SIDE */}
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Get the tech career <br /> you deserve. Faster.
        </h1>

        <p className="mt-6 text-gray-300">
          Learn from experts and crack top tech companies.
        </p>

        <button
          onClick={scrollToCourses}
          className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 hover:scale-105 transition"
        >
          Explore Courses
        </button>
      </div>

      {/* RIGHT SIDE (Mock Card) */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="bg-white text-black p-6 rounded-xl shadow-xl w-80">
          <h2 className="text-lg font-bold mb-4">
            Find the right course
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            type="text"
            placeholder="Your Email"
            className="w-full border p-2 mb-3 rounded"
          />

          <button
            onClick={() => alert("We will contact you soon 🚀")}
            className="w-full bg-orange-500 text-white py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>

    </div>
  );
};

export default Hero;