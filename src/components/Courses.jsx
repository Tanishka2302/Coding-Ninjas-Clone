import Card from "./Card";

const Courses = () => {
  return (
    <div id="courses" className="px-8 py-16 bg-gray-100">
      
      <h1 className="text-3xl font-bold text-center mb-10">
        Our Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <Card 
          title="Full Stack Development" 
          desc="Learn MERN stack with real-world projects."
        />
        <Card 
          title="Data Structures & Algorithms" 
          desc="Master DSA for interviews and coding rounds."
        />
        <Card 
          title="Machine Learning" 
          desc="Build intelligent systems with ML concepts."
        />
      </div>

    </div>
  );
};

export default Courses;