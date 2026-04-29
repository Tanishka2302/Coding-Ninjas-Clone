const Card = ({ title, desc }) => {

  const handleClick = () => {
    alert(`You selected: ${title}`);
  };

  return (
    <div className="bg-white rounded-xl p-6 text-center border border-transparent 
                    shadow-md transition duration-300 
                    hover:shadow-xl hover:-translate-y-2 
                    hover:border-orange-500 
                    hover:shadow-[0_0_20px_rgba(255,115,0,0.5)] 
                    hover:scale-105">
      
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      <p className="text-gray-600">{desc}</p>

      <button
        onClick={handleClick}
        className="mt-4 text-orange-500 font-semibold hover:underline"
      >
        Learn More →
      </button>

    </div>
  );
};

export default Card;