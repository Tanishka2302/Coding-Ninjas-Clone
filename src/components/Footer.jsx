"use client";


import { motion } from "framer-motion";
import {
 Globe,
  Mail,
  Code2,
  ArrowRight,
  Sparkles
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white pt-28">

      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black"/>

      {/* glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 blur-[150px] rounded-full"/>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full"/>

      {/* top glowing border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"/>

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

        {/* CTA top */}
        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center pb-20 border-b border-white/10"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8">
            <Sparkles size={16}/>
            Start Your Journey
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Ready To Build Your
            <span className="block text-orange-400">
              Tech Career?
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Join thousands of learners preparing for top product companies.
          </p>

          <motion.button
            whileHover={{
              scale:1.05,
              boxShadow:"0 0 35px rgba(249,115,22,.4)"
            }}
            className="inline-flex items-center gap-3 bg-orange-500 px-8 py-4 rounded-2xl font-semibold"
          >
            Explore Courses
            <ArrowRight/>
          </motion.button>
        </motion.div>



        {/* main footer */}
        <div className="grid md:grid-cols-4 gap-14 py-20">

          {/* brand */}
          <div>
            <h3 className="text-3xl font-black mb-6">
              Code<span className="text-orange-400">Ninja</span>
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8">
              Learn, build and get hired with structured programs,
              mentorship and placement support.
            </p>

            <div className="flex gap-4">

              {[ Globe, Mail, Code2].map((Icon,i)=>(
                <motion.div
                  key={i}
                  whileHover={{
                    y:-6,
                    scale:1.1
                  }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer"
                >
                  <Icon size={20}/>
                </motion.div>
              ))}

            </div>
          </div>


          {/* links */}
          <div>
            <h4 className="font-bold text-xl mb-6">
              Programs
            </h4>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-orange-400 cursor-pointer">Full Stack</li>
              <li className="hover:text-orange-400 cursor-pointer">DSA</li>
              <li className="hover:text-orange-400 cursor-pointer">Machine Learning</li>
              <li className="hover:text-orange-400 cursor-pointer">Interview Prep</li>
            </ul>
          </div>


          <div>
            <h4 className="font-bold text-xl mb-6">
              Company
            </h4>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-orange-400 cursor-pointer">About</li>
              <li className="hover:text-orange-400 cursor-pointer">Placements</li>
              <li className="hover:text-orange-400 cursor-pointer">Success Stories</li>
              <li className="hover:text-orange-400 cursor-pointer">Contact</li>
            </ul>
          </div>


          {/* newsletter */}
          <div>
            <h4 className="font-bold text-xl mb-6">
              Stay Updated
            </h4>

            <p className="text-gray-400 mb-6">
              Get career tips and course updates.
            </p>

            <div className="flex bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <input
                placeholder="Email"
                className="bg-transparent p-4 flex-1 outline-none"
              />

              <button className="bg-orange-500 px-5">
                <ArrowRight/>
              </button>
            </div>

          </div>

        </div>


        {/* bottom bar */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">

          <p>
           © 2026 CodeNinja • Designed & Built by 
            <span className="text-orange-400 font-semibold">
              Tanishka Pandharpatte
            </span> 🚀
          </p>

          <div className="flex gap-8">
            <span className="hover:text-orange-400 cursor-pointer">
              Privacy
            </span>
            <span className="hover:text-orange-400 cursor-pointer">
              Terms
            </span>
            <span className="hover:text-orange-400 cursor-pointer">
              Support
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;