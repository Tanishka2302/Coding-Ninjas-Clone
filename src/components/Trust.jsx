"use client";

import { motion } from "framer-motion";
import {
  Star,
  Sparkles,
  Quote
} from "lucide-react";

const ratings = [
  {
    platform:"Facebook",
    score:"4.9",
    reviews:"12k+ reviews"
  },
  {
    platform:"Google",
    score:"4.7",
    reviews:"18k+ reviews"
  },
  {
    platform:"Course Reviews",
    score:"4.8",
    reviews:"25k+ reviews"
  }
];

const Trust = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white py-28 px-8">

      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"/>

      {/* glows */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-orange-500/20 blur-[130px]"/>
      <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-blue-500/20 blur-[140px]"/>

      {/* subtle grid */}
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-6">
            <Sparkles size={16}/>
            Trusted Worldwide
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Loved By
            <span className="block text-orange-400">
              100,000+ Learners
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join an ecosystem trusted by developers, students
            and working professionals.
          </p>
        </motion.div>


        {/* ratings cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          {ratings.map((item,i)=>(
            <motion.div
              key={i}
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:i*.2}}
              viewport={{once:true}}
              whileHover={{
                y:-12,
                scale:1.03
              }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >

              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_,idx)=>(
                  <motion.div
                    key={idx}
                    animate={{
                      scale:[1,1.15,1]
                    }}
                    transition={{
                      duration:2,
                      repeat:Infinity,
                      delay:idx*.2
                    }}
                  >
                    <Star className="fill-orange-400 text-orange-400"/>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-6xl font-black text-orange-400 mb-4">
                {item.score}
              </h3>

              <h4 className="text-2xl font-bold mb-3">
                {item.platform}
              </h4>

              <p className="text-gray-400">
                {item.reviews}
              </p>

            </motion.div>
          ))}

        </div>


        {/* testimonials strip */}
        <div className="grid md:grid-cols-2 gap-8">

          {[
            "The best structured platform for cracking product companies.",
            "Mentorship + projects + placement support changed my career."
          ].map((review,i)=>(
            <motion.div
              key={i}
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:i*.2}}
              viewport={{once:true}}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <Quote className="mb-6 text-orange-400"/>

              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                {review}
              </p>

              <span className="text-orange-300 font-semibold">
                — Verified Learner
              </span>
            </motion.div>
          ))}

        </div>


        {/* bottom trust counters */}
        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          {[
            ["100K+","Alumni Network"],
            ["95%","Success Rate"],
            ["300+","Hiring Partners"]
          ].map(([num,label],i)=>(
            <div
              key={i}
              className="text-center p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 to-blue-500/10 border border-white/10"
            >
              <h3 className="text-5xl font-black text-orange-400 mb-4">
                {num}
              </h3>

              <p className="text-gray-300">
                {label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Trust;