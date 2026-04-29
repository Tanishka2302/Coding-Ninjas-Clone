const Companies = () => {
  return (
    <div className="py-20 text-center bg-white">

      <h1 className="text-2xl font-bold mb-10">
        Our Ninjas at top tech companies
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {["Google", "PayPal", "Microsoft", "Amazon"].map((company, i) => (
          <div
            key={i}
            className="bg-gray-100 px-6 py-4 rounded-lg shadow hover:shadow-lg transition"
          >
            {company}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Companies;