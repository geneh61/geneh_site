"use client";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDownCircleIcon } from "lucide-react";
import SocialIcons from "../SocialIcons";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      
      
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y }}
        >
          <Image
            src="/images/boat.jpg"
            alt="Gene Han"
            width={150}
            height={150}
            quality={95}
            priority={true}
            className="mx-auto mb-6 rounded-full border-4 border-slate-700/50 object-cover shadow-lg"
          />

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Hey, I&apos;m <span className="text-accent-teal">Gene.</span>
          </h1>

          <TypeAnimation
            sequence={[
              "I build things for fun.", 2000,
              "I love working with new tech.", 2000,
              "I'm a full-stack developer.", 2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-lg text-gray-300 md:text-xl"
            repeat={Infinity}
          />
          <SocialIcons />
          <div className="mt-8 flex justify-center"></div>
          
          <div className="mt-8 flex justify-center">
            <a href="#projects" className="group flex items-center gap-2 rounded-full bg-accent-teal px-6 py-3 font-semibold text-white transition-transform hover:scale-105">
              View My Work
              <ArrowDownCircleIcon className="h-6 w-6 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;