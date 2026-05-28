import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile2.jpg";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiFirebase,
  SiFigma,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiShadcnui,
} from "react-icons/si";

const About = () => {
  const skills = [
    { name: "HTML", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS", icon: SiCss3, color: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "React", icon: SiReact, color: "text-cyan-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-blue" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
    { name: "Shadcn UI", icon: SiShadcnui, color: "text-blue" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "GitHub", icon: SiGithub, color: "text-blue" },
    { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
    { name: "Figma", icon: SiFigma, color: "text-pink-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-700" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-700" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about me and my journey in web development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative "
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 animate-pulse" />
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              {/* <h3 className="text-2xl mt-5 font-semibold">
                MERN Stack Developer
              </h3> */}
              <p className="text-muted-foreground">
                Hi, I’m Muhammad Mubashir — a MERN Stack and Frontend Developer
                who enjoys building clean, responsive, and user-friendly web
                interfaces. I started my journey through self-learning, then
                strengthened my skills through my DIT diploma and MERN Stack
                training. Since then, I’ve been consistently practicing by
                building small to mid-level projects to improve my understanding
                of real development workflows.
              </p>
              <p className="text-muted-foreground">
                On the frontend, I work with React.js, Next.js, TypeScript,
                Tailwind CSS, Redux Toolkit, React Context, and Shadcn UI. I
                enjoy creating clean UI components, managing state efficiently,
                and designing smooth experiences that work well across devices
              </p>
              <p className="text-muted-foreground">
                On the backend, I use Node.js, Express.js, MongoDB, and Firebase
                to build APIs, handle authentication, and manage data. Most of
                the projects I’ve built so far are self-practice projects, but
                each one has helped me understand real-world concepts like
                reusable components, routing, API integration, and performance
                basics.
              </p>
              <p className="text-muted-foreground">
                I have completed my Intermediate, earned a DIT diploma,
                completed my MERN Stack program, and I’m currently pursuing BSc
                AD-Science. I’m now looking for my first internship opportunity,
                where I can apply what I’ve learned, gain practical experience,
                and grow by working with a real development team.
              </p>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-semibold text-center mb-8">
              My Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-card rounded-xl p-6 text-center border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <skill.icon
                    className={`w-8 h-8 mx-auto mb-3 ${skill.color}`}
                  />
                  <h4 className="font-medium">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
