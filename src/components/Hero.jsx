"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollToCourses = () => {
    const section = document.getElementById("courses");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center px-10 md:px-20">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-indigo-950"/>

      {/* Glowing Orbs */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity
        }}
        className="absolute w-72 h-72 bg-orange-500/30 blur-[120px] rounded-full top-20 left-10"
      />

      <motion.div
        animate={{
          x: [0,-70,0],
          y:[0,70,0]
        }}
        transition={{
          duration:14,
          repeat:Infinity
        }}
        className="absolute w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full bottom-0 right-10"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff15 1px, transparent 1px), linear-gradient(90deg,#ffffff15 1px,transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity:0, y:50 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
          className="md:w-1/2"
        >

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:.4 }}
            className="mb-6 inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
          >
            🚀 Future of Tech Learning
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Get the tech career
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              you deserve. Faster.
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            Learn from experts, build projects, crack top companies
            and accelerate your developer journey.
          </p>

          <div className="mt-10 flex gap-6">

            <motion.button
              whileHover={{
                scale:1.08,
                boxShadow:"0 0 35px rgba(249,115,22,.5)"
              }}
              whileTap={{scale:.96}}
              onClick={scrollToCourses}
              className="px-8 py-4 rounded-xl bg-orange-500 font-semibold"
            >
              Explore Courses
            </motion.button>

            <motion.button
              whileHover={{scale:1.05}}
              className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md"
            >
              Watch Demo
            </motion.button>

          </div>

          {/* floating stat cards */}
          <div className="mt-14 flex gap-6 flex-wrap">

            {[
              "50K+ Students",
              "300+ Hiring Partners",
              "95% Success Rate"
            ].map((item,i)=>(
              <motion.div
                key={i}
                animate={{y:[0,-10,0]}}
                transition={{
                  duration:4+i,
                  repeat:Infinity
                }}
                className="px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10"
              >
                {item}
              </motion.div>
            ))}

          </div>

        </motion.div>


        {/* RIGHT 3D CARD */}
        <motion.div
          style={{
            transform: `rotateY(${mouse.x}deg) rotateX(${-mouse.y}deg)`
          }}
          className="md:w-1/2 mt-16 md:mt-0 flex justify-center"
        >
          <motion.div
            animate={{
              y:[0,-15,0]
            }}
            transition={{
              duration:6,
              repeat:Infinity
            }}
            className="relative"
          >

            {/* glow */}
            <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-20 rounded-3xl"/>

            <div className="relative w-[420px] p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

              <div className="flex justify-between mb-6">
                <span className="text-xl font-bold">
                  Find the right course
                </span>

                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"/>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"/>
                  <div className="w-3 h-3 rounded-full bg-green-400"/>
                </div>
              </div>

              <input
                placeholder="Your Name"
                className="w-full p-4 mb-4 rounded-xl bg-white/10 border border-white/20 text-white"
              />

              <input
                placeholder="Your Email"
                className="w-full p-4 mb-4 rounded-xl bg-white/10 border border-white/20 text-white"
              />

              <motion.button
                whileHover={{
                  scale:1.03,
                  boxShadow:"0 0 30px rgba(249,115,22,.5)"
                }}
                className="w-full py-4 rounded-xl bg-orange-500 font-semibold"
              >
                Submit
              </motion.button>

              {/* fake code snippets floating */}
              <motion.div
                animate={{y:[0,-12,0]}}
                transition={{duration:5, repeat:Infinity}}
                className="absolute -left-16 top-20 bg-slate-900 p-4 rounded-xl shadow-xl"
              >
                {"</> MERN"}
              </motion.div>

              <motion.div
                animate={{y:[0,10,0]}}
                transition={{duration:4, repeat:Infinity}}
                className="absolute -right-12 bottom-20 bg-indigo-900 p-4 rounded-xl shadow-xl"
              >
                AI + DSA
              </motion.div>

            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;