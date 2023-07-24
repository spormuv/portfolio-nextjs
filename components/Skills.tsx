'use client';

import { skillsData } from '@/data';
import { motion } from 'framer-motion';
import SkillsItem from './SkillsItem';

const Skills = () => {
  return (
    <section id="skills" className="w-full lg:h-screen p-2 mt-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
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
          <h2 className="py-4">What I Can Do</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {skillsData.map((item, index) => (
            <SkillsItem
              key={index}
              skill={item.skill}
              percentage={item.percentage}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
