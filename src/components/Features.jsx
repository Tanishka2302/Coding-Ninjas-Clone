"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  TrendingUp,
  Flame,
  Sparkles
} from "lucide-react";

const stages = [
  {
    step:"01",
    title:"Learn",
    desc:"Master strong fundamentals with structured teaching, mentors and guided practice.",
    icon:<Rocket size={34}/>,
    color:"from-orange-500 to-pink-500"
  },
  {
    step:"02",
    title:"Excel",
    desc:"Track progress through projects, assessments and personalized feedback.",
    icon:<TrendingUp size={34}/>,
    color:"from-cyan-500 to-blue-500"
  },
  {
    step:"03",
    title:"Standout",
    desc:"Become interview ready with mock rounds, resume prep and placement support.",
    icon:<Flame size={34}/>,
    color:"from-violet-500 to-purple-500"
  }
];

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white py-28 px-8">

      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"/>

      {/* glow blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 blur-[130px] rounded-full"/>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full"/>

      {/* grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff15 1px,transparent 1px),linear-gradient(90deg,#ffffff15 1px,transparent 1px)",
          backgroundSize:"60px 60px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* heading */}
        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-6">
            <Sparkles size={16}/>
            Learning Framework
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Our 3-Stage
            <span className="block text-orange-400">
              Learning Model
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A proven roadmap designed to take you from beginner
            to industry-ready engineer.
          </p>
        </motion.div>


        {/* connector line desktop */}
        <div className="hidden md:block absolute top-[55%] left-0 right-0 h-1 bg-white/10">
          <div className="h-full w-full bg-gradient-to-r from-orange-500 via-cyan-500 to-violet-500 opacity-50"/>
        </div>


        {/* stages */}
        <div className="grid md:grid-cols-3 gap-12 relative">

          {stages.map((stage,i)=>(
            <motion.div
              key={i}
              initial={{opacity:0,y:70}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{
                duration:.8,
                delay:i*.2
              }}
              whileHover={{
                y:-15,
                scale:1.03
              }}
              className="relative group"
            >

              {/* glow border */}
              <div className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r ${stage.color} blur-sm opacity-50 group-hover:opacity-100`} />

              <div className="relative rounded-3xl p-10 bg-white/5 border border-white/10 backdrop-blur-xl h-full">

                {/* step */}
                <div className="text-8xl font-black opacity-10 absolute top-5 right-6">
                  {stage.step}
                </div>

                {/* icon */}
                <motion.div
                  animate={{
                    y:[0,-10,0]
                  }}
                  transition={{
                    duration:4,
                    repeat:Infinity
                  }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${stage.color} flex items-center justify-center mb-8 shadow-2xl`}
                >
                  {stage.icon}
                </motion.div>

                <h3 className="text-4xl font-bold mb-6">
                  {stage.title}
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {stage.desc}
                </p>

                <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  Step {stage.step}
                </div>

              </div>

            </motion.div>
          ))}

        </div>


        {/* bottom visual process strip */}
        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="mt-24 p-10 rounded-[32px] bg-gradient-to-r from-orange-500/10 to-blue-500/10 border border-white/10 text-center"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Learn → Excel → Standout
          </h3>

          <p className="text-gray-300 text-lg">
            One complete path. From fundamentals to dream offers.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;