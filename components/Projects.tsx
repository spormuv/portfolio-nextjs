'use client';

import { motion } from 'framer-motion';
import ProjectItem from './ProjectItem';

const Projects = () => {
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

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg="/assets/projects/property.jpg"
            tech="React JS"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg="/assets/projects/crypto.jpg"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg="/assets/projects/netflix.jpg"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg="/assets/projects/twitch.jpg"
            tech="React JS"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
