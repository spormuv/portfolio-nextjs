'use client';

import { projectsData } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

const Projects = () => {
  const [nextItems, setNextItems] = useState(5);

  const handleLoadMore = () => {
    setNextItems(nextItems + 3);
  };

  return (
    <section id="projects" className="w-full pt-20">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="py-4">What I&apos;ve Built</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 md:px-8">
          {projectsData?.slice(0, nextItems).map((project, ind) => (
            <div
              key={ind}
              className="p-4 rounded-lg shadow-lg shadow-gray-400 cursor-pointer"
            >
              <div className="w-full relative group aspect-video">
                <Image
                  fill
                  src={project.background}
                  alt={project.title}
                  className="object-cover rounded-lg"
                />
                <div className="absolute w-full h-full bg-gradient-to-r from-[#5651e5] to-[#709dff] opacity-90 top-0 left-0 z-10 flex items-center justify-center gap-10 scale-0 group-hover:scale-100 transition-all duration-500 ease-out rounded-lg">
                  <a href={project.code} target="_blank">
                    <AiFillGithub className="text-4xl hover:scale-125 transition-all duration-300" />
                  </a>
                  <a href={project.demo} target="_blank">
                    <AiFillEye className="text-4xl hover:scale-125 transition-all duration-300" />
                  </a>
                </div>
              </div>
              <div className="mt-4 text-center font-bold uppercase">
                {project.title}
              </div>
              <div className="flex mt-4 flex-wrap gap-2">
                {project.tools.map((tool, ind) => (
                  <span
                    key={ind}
                    className="shadow-sm shadow-gray-300 rounded-full py-2 px-3 text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {nextItems < projectsData.length && (
          <div className="text-center">
            <button className="p-4 text-gray-100 mt-4" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
