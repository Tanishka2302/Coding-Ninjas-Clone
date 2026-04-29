"use client";

import { motion } from "framer-motion";
import {
  Check,
  X,
  ShieldCheck,
  Sparkles
} from "lucide-react";

const features = [
  {
    title:"Structured + Problem Solving Based",
    ours:true,
    free:false,
    others:false,
    score:98
  },
  {
    title:"Fastest 1:1 Doubt Support",
    ours:true,
    free:false,
    others:false,
    score:95
  },
  {
    title:"Integrated Prep Platform",
    ours:true,
    free:false,
    others:true,
    score:90
  },
  {
    title:"Profiles Highlighted on Naukri",
    ours:true,
    free:false,
    others:false,
    score:96
  }
];

const Comparison = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white py-28 px-8">

      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"/>

      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-orange-500/20 blur-[130px]" />
      <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-blue-500/20 blur-[140px]" />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
          "linear-gradient(#ffffff15 1px,transparent 1px),linear-gradient(90deg,#ffffff15 1px,transparent 1px)",
          backgroundSize:"60px 60px"
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* heading */}
        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-6">
            <Sparkles size={16}/>
            Why Learners Choose Us
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Not Just Another
            <span className="block text-orange-400">
              Course Platform
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Compare what makes us different from scattered resources
            and traditional courses.
          </p>
        </motion.div>


        {/* glass comparison table */}
        <motion.div
          initial={{opacity:0,scale:.95}}
          whileInView={{opacity:1,scale:1}}
          viewport={{once:true}}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl"
        >

          {/* Header */}
          <div className="grid grid-cols-4 bg-white/5 border-b border-white/10">

            <div className="p-6"></div>

            <div className="p-6 text-center relative">
              <div className="inline-flex items-center gap-2 font-bold text-xl">
                <ShieldCheck className="text-orange-400"/>
                Coding Ninjas
              </div>

              <span className="mt-3 inline-block text-xs bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">
                BEST CHOICE
              </span>
            </div>

            <div className="p-6 text-center text-gray-400 font-semibold">
              Free Resources
            </div>

            <div className="p-6 text-center text-gray-400 font-semibold">
              Other Courses
            </div>

          </div>


          {/* rows */}
          {features.map((feature,index)=>(
            <motion.div
              key={index}
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:index*.15}}
              whileHover={{
                backgroundColor:"rgba(255,255,255,.03)"
              }}
              className="grid grid-cols-4 border-b border-white/10 group"
            >
              {/* feature */}
              <div className="p-6">
                <h3 className="font-semibold mb-4">
                  {feature.title}
                </h3>

                {/* superiority bar */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{width:0}}
                    whileInView={{
                      width:`${feature.score}%`
                    }}
                    transition={{
                      duration:1.2,
                      delay:index*.2
                    }}
                    className="h-full bg-gradient-to-r from-orange-500 to-pink-500"
                  />
                </div>
              </div>


              {/* ours */}
              <div className="flex items-center justify-center">
                <motion.div
                  animate={{
                    scale:[1,1.15,1]
                  }}
                  transition={{
                    duration:2,
                    repeat:Infinity
                  }}
                  className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center"
                >
                  <Check className="text-green-400"/>
                </motion.div>
              </div>


              {/* free */}
              <div className="flex items-center justify-center">
                {feature.free ? (
                  <Check className="text-green-400"/>
                ) : (
                  <X className="text-red-400"/>
                )}
              </div>


              {/* others */}
              <div className="flex items-center justify-center">
                {feature.others ? (
                  <Check className="text-yellow-400"/>
                ) : (
                  <X className="text-red-400"/>
                )}
              </div>

            </motion.div>
          ))}

        </motion.div>


        {/* bottom trust stats */}
        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          {[
            "4.9/5 Learner Rating",
            "95% Interview Success",
            "50K+ Placements"
          ].map((item,i)=>(
            <div
              key={i}
              className="p-8 rounded-3xl text-center bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold text-orange-400">
                {item}
              </h3>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Comparison;