"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Database,
  ArrowRight,
  Sparkles
} from "lucide-react";

const courses = [
  {
    title: "Full Stack Development",
    desc: "Build MERN applications with real-world projects.",
    icon: <Code2 size={42} />,
    tag: "Most Popular",
    color:"from-orange-500 to-pink-500"
  },
  {
    title: "Data Structures & Algorithms",
    desc: "Master coding interviews & problem solving.",
    icon: <Database size={42} />,
    tag:"Top Rated",
    color:"from-cyan-500 to-blue-500"
  },
  {
    title: "Machine Learning",
    desc: "Build intelligent systems using AI & ML.",
    icon: <Brain size={42} />,
    tag:"Trending",
    color:"from-violet-500 to-purple-500"
  }
];

const Courses = () => {
  return (
    <section
      id="courses"
      className="relative overflow-hidden py-28 px-8 bg-black text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-indigo-950"/>

      {/* Glow blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-orange-500/20 blur-[130px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-500/20 blur-[140px]" />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff15 1px,transparent 1px),linear-gradient(90deg,#ffffff15 1px,transparent 1px)",
          backgroundSize:"50px 50px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* heading */}
        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.8}}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6">
            <Sparkles size={18}/>
            Explore Programs
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-5">
            Future-Ready
            <span className="block bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Tech Courses
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn from industry experts with hands-on projects,
            interview prep and job-focused curriculum.
          </p>
        </motion.div>


        {/* cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {courses.map((course,i)=>(
            <motion.div
              key={i}
              initial={{opacity:0,y:60}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{
                duration:.8,
                delay:i*.2
              }}
              whileHover={{
                y:-18,
                rotateX:6,
                rotateY:-6,
                scale:1.03
              }}
              className="group relative"
            >
              {/* gradient border */}
              <div className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r ${course.color} opacity-60 blur-sm group-hover:opacity-100 transition`} />

              <div className="relative h-full rounded-3xl p-8 bg-white/10 border border-white/10 backdrop-blur-xl">

                {/* ribbon */}
                <span className="inline-block mb-6 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm">
                  {course.tag}
                </span>

                {/* icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${course.color} flex items-center justify-center mb-8 shadow-2xl`}>
                  {course.icon}
                </div>

                <h3 className="text-3xl font-bold mb-5">
                  {course.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {course.desc}
                </p>

                {/* fake metrics */}
                <div className="flex gap-4 mb-8 text-sm">
                  <div className="bg-white/5 px-4 py-2 rounded-xl">
                    12 Weeks
                  </div>

                  <div className="bg-white/5 px-4 py-2 rounded-xl">
                    Live Projects
                  </div>
                </div>

                <button className="group flex items-center gap-2 text-orange-400 font-semibold">
                  Learn More
                  <ArrowRight
                    className="group-hover:translate-x-2 transition"
                    size={18}
                  />
                </button>

              </div>
            </motion.div>
          ))}

        </div>


        {/* bottom stats */}
        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{delay:.3}}
          className="grid md:grid-cols-3 gap-8 mt-24"
        >
          {[
            "50K+ Learners",
            "300+ Hiring Partners",
            "95% Placement Success"
          ].map((item,i)=>(
            <div
              key={i}
              className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg"
            >
              <h4 className="text-3xl font-bold text-orange-400">
                {item}
              </h4>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Courses;