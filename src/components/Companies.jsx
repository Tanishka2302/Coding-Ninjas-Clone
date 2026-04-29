"use client";

import { motion } from "framer-motion";
import { Sparkles, Building2, Briefcase } from "lucide-react";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "PayPal",
  "Adobe",
  "Uber",
  "Flipkart",
  "Atlassian"
];

const Companies = () => {
  return (
    <section className="relative overflow-hidden py-28 bg-black text-white">

      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"/>

      {/* glows */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-orange-500/20 blur-[140px] rounded-full"/>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full"/>

      {/* grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff15 1px,transparent 1px),linear-gradient(90deg,#ffffff15 1px,transparent 1px)",
          backgroundSize:"60px 60px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* heading */}
        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-6">
            <Sparkles size={16}/>
            Placement Network
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Our Ninjas Work At
            <span className="block text-orange-400">
              Top Tech Companies
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thousands of learners have landed dream roles across
            global product companies and unicorn startups.
          </p>
        </motion.div>


        {/* marquee row 1 */}
        <div className="overflow-hidden mb-10">
          <motion.div
            animate={{x:["0%","-50%"]}}
            transition={{
              duration:20,
              repeat:Infinity,
              ease:"linear"
            }}
            className="flex gap-8 w-max"
          >
            {[...companies,...companies].map((company,i)=>(
              <div
                key={i}
                className="min-w-[240px] p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition"
              >
                <div className="flex items-center justify-center gap-3 text-2xl font-bold">
                  <Building2 className="text-orange-400"/>
                  {company}
                </div>
              </div>
            ))}
          </motion.div>
        </div>


        {/* marquee row reverse */}
        <div className="overflow-hidden mb-20">
          <motion.div
            animate={{x:["-50%","0%"]}}
            transition={{
              duration:24,
              repeat:Infinity,
              ease:"linear"
            }}
            className="flex gap-8 w-max"
          >
            {[...companies,...companies].reverse().map((company,i)=>(
              <div
                key={i}
                className="min-w-[240px] p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
              >
                <div className="flex items-center justify-center gap-3 text-2xl font-bold">
                  <Briefcase className="text-cyan-400"/>
                  {company}
                </div>
              </div>
            ))}
          </motion.div>
        </div>


        {/* stats */}
        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              num:"1400+",
              label:"Placed in MAANG"
            },
            {
              num:"300+",
              label:"Hiring Partners"
            },
            {
              num:"1 Cr+",
              label:"Highest CTC"
            }
          ].map((item,i)=>(
            <motion.div
              key={i}
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:i*.2}}
              viewport={{once:true}}
              whileHover={{
                y:-10,
                scale:1.03
              }}
              className="p-10 rounded-3xl text-center bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <h3 className="text-5xl font-black text-orange-400 mb-4">
                {item.num}
              </h3>

              <p className="text-gray-300 text-lg">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>


        {/* glowing trust strip */}
        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{once:true}}
          className="mt-20 text-center p-10 rounded-[32px] bg-gradient-to-r from-orange-500/10 to-blue-500/10 border border-white/10"
        >
          <h3 className="text-3xl md:text-4xl font-bold">
            Join learners getting hired at elite product companies 🚀
          </h3>
        </motion.div>

      </div>
    </section>
  );
};

export default Companies;