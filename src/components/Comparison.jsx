const Comparison = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-8">

      <div className="max-w-5xl mx-auto border border-gray-700 rounded-xl overflow-hidden">

        {/* Header */}
        <div className="grid grid-cols-3 text-center py-4 bg-gray-800 font-semibold">
          <div>Coding Ninjas</div>
          <div>Free resources</div>
          <div>Other courses</div>
        </div>

        {/* Rows */}
        {[
          "Structured + problem solving based",
          "Fastest 1:1 doubt support",
          "Integrated prep platform",
          "Profiles highlighted on Naukri",
        ].map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 text-center py-4 border-t border-gray-700 hover:bg-gray-800 transition"
          >
            <div>{item}</div>
            <div className="text-green-400">✔</div>
            <div className="text-red-400">✖</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comparison;