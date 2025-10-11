"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  "C++", "Python", "Java", "Typescript", "HTML/CSS", "JavaScript", "SQL", 
  "AWS", "React", "Next.js", "TypeScript", "Node.js", "MongoDB",
  "Docker", "Git", "REST APIs", "Tetris"
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        <motion.div 
          className="md:col-span-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative p-1 rounded-lg bg-gradient-to-tr from-accent-purple to-accent-teal">
            <Image
              src="/images/gene.jpg"
              alt="A photo of Gene Han"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div 
          className="md:col-span-7"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-4xl font-bold mb-4">A Little More About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Hello! I&apos;m Gene, a developer with a passion for building clean, intuitive, and performant applications. My journey into tech started with a simple curiosity for how things work, and it has since grown into a full-fledged passion. I thrive on solving complex problems and learning how new technologies work.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-accent-teal">My Skillset</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;