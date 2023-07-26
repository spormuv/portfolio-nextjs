'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="w-full px-6 pt-28 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 mb-10">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
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
            <h2 className="py-4">Get To Know Me</h2>
          </motion.div>
          <p className="py-2 text-gray-600">
            As a Junior Frontend Developer, I am passionate about creating
            dynamic and engaging user experiences on the web. I am eager to
            apply my skills to develop responsive and efficient web
            applications. I am always seeking to expand my knowledge of modern
            frontend frameworks and technologies, and I am committed to creating
            clean, maintainable and scalable code.
          </p>
          <p className="py-2 text-gray-600">
            With strong problem-solving and analytical skills, I am dedicated to
            delivering high-quality solutions that meet the needs of clients and
            users alike. I am excited to work as part of a team to build
            innovative and impactful web projects.
          </p>
          <a href="/assets/cv/portfolio-mike-by.pdf" download>
            <button className="p-4 text-gray-100 mt-4 hover:scale-105 transition">
              Download CV
            </button>
          </a>
        </div>

        <motion.div
          className="my-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative w-full h-auto m-auto shadow-md shadow-gray-400 rounded-full flex items-center justify-center hover:scale-105 ease-in duration-300 aspect-square">
            <Image
              src="/assets/about.jpg"
              fill
              className="rounded-full object-cover !static"
              alt="my photo"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
