"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const stats = [
  {
    number:"10 Years",
    title:"transforming tech careers",
    sub:"Building engineers since day one"
  },
  {
    number:"1.5 Lac+",
    title:"learners",
    sub:"cracked dream roles at top tech companies"
  },
  {
    number:"1400+",
    title:"Alumni in MAANG",
    sub:"and many more in unicorn startups"
  },
  {
    number:"1 Cr+",
    title:"highest CTC",
    sub:"achieved after completing the program"
  }
];

const Stats = () => {
  return (
    <section className="relative bg-gradient-to-b from-black via-slate-950 to-black text-white overflow-hidden">

      {/* ambient glow */}
      <div className="absolute top-40 left-10 w-80 h-80 bg-orange-500/20 blur-[140px] rounded-full"/>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full"/>

      {/* cyber grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
          "linear-gradient(#ffffff15 1px,transparent 1px),linear-gradient(90deg,#ffffff15 1px,transparent 1px)",
          backgroundSize:"60px 60px"
        }}
      />

      {/* center line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[3px] bg-white/10">

        {/* animated glow progress */}
        <motion.div
          animate={{
            opacity:[.4,1,.4]
          }}
          transition={{
            duration:3,
            repeat:Infinity
          }}
          className="w-full h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent"
        />

      </div>


      {stats.map((item,index)=>(
        <section
          key={index}
          className="relative h-screen flex items-center justify-center"
        >

          {/* timeline pulse node */}
          <motion.div
            animate={{
              scale:[1,1.4,1],
              boxShadow:[
                "0 0 10px #f97316",
                "0 0 35px #f97316",
                "0 0 10px #f97316"
              ]
            }}
            transition={{
              duration:2,
              repeat:Infinity
            }}
            className="absolute left-1/2 -translate-x-1/2 z-20 w-5 h-5 rounded-full bg-orange-500"
          />

          {/* ghost huge background number */}
          <motion.h1
            initial={{opacity:0,scale:0.8}}
            whileInView={{
              opacity:0.04,
              scale:1
            }}
            viewport={{once:true}}
            transition={{duration:1}}
            className="absolute text-[180px] md:text-[300px] font-black"
          >
            0{index+1}
          </motion.h1>

          {/* main content */}
          <motion.div
            initial={{
              opacity:0,
              y:100
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            viewport={{once:true, amount:.4}}
            transition={{
              duration:1
            }}
            whileHover={{
              scale:1.03
            }}
            className="relative z-10 text-center max-w-4xl px-6"
          >

            <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
              <Sparkles size={16}/>
              Milestone {index+1}
            </div>

            <motion.h2
              animate={{
                textShadow:[
                  "0 0 10px rgba(249,115,22,.1)",
                  "0 0 35px rgba(249,115,22,.45)",
                  "0 0 10px rgba(249,115,22,.1)"
                ]
              }}
              transition={{
                duration:4,
                repeat:Infinity
              }}
              className="text-6xl md:text-8xl font-black mb-6"
            >
              {item.number}
            </motion.h2>

            <h3 className="text-3xl md:text-5xl font-bold mb-5">
              {item.title}
            </h3>

            <p className="text-gray-400 text-xl">
              {item.sub}
            </p>

          </motion.div>

        </section>
      ))}

      {/* final closing section */}
      <section className="h-screen flex items-center justify-center text-center">
        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Your journey could be
            <span className="block text-orange-400">
              next.
            </span>
          </h2>

          <button className="mt-6 px-8 py-4 rounded-2xl bg-orange-500 hover:scale-105 transition">
            Start Learning 🚀
          </button>
        </motion.div>
      </section>

    </section>
  );
};

export default Stats;