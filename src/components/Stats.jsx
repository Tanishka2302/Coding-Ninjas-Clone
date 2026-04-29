const Stats = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-black text-white">

      {/* 🔥 Vertical Glow Line */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-[2px] 
                      bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-60">
      </div>

      {/* Stat 1 */}
      <div className="h-screen flex items-center justify-center text-center relative">
        
        {/* Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-lg"></div>

        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight 
                       transition duration-300 hover:scale-105 hover:text-orange-400 cursor-pointer">
          10 years of <br />
          transforming <br/><span className="text-gray-500">tech careers</span>
        </h1>
      </div>

      {/* Stat 2 */}
      <div className="h-screen flex flex-col items-center justify-center text-center relative">
        
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-lg"></div>

        <h1 className="text-4xl md:text-6xl font-bold transition duration-300 hover:scale-105 hover:text-orange-400 cursor-pointer">
          1.5 Lac+ learners
        </h1>

        <p className="text-gray-400 mt-3">
          cracked dream roles at top tech companies
        </p>
      </div>

      {/* Stat 3 */}
      <div className="h-screen flex flex-col items-center justify-center text-center relative">
        
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-lg"></div>

        <h1 className="text-4xl md:text-6xl font-bold transition duration-300 hover:scale-105 hover:text-orange-400 cursor-pointer">
          1,400 Alumni in MAANG
        </h1>

        <p className="text-gray-400 mt-3">
          & more in unicorn startups
        </p>
      </div>

      {/* Stat 4 */}
      <div className="h-screen flex flex-col items-center justify-center text-center relative">
        
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-lg"></div>

        <h1 className="text-4xl md:text-6xl font-bold transition duration-300 hover:scale-105 hover:text-orange-400 cursor-pointer">
          1 Cr+ highest CTC
        </h1>

        <p className="text-gray-400 mt-3">
          after completing the course
        </p>
      </div>

    </div>
  );
};

export default Stats;