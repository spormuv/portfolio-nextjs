'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section
      id="about"
      className="w-full md:h-screen p-6 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI applications
            that connect with API&apos;s and other backend technologies.
            I&apos;m passionate about learning new technologies and understand
            there is more than one way to accomplish a task. Though I am most
            proficient in building front-end applications using HTML, CSS,
            Javascript, and React, I am a quick learner and can pick up new tech
            stacks as needed. I believe that being a great developer is not
            using one specific language, but choosing the best tool for the job.
          </p>
          <p className="py-2 text-gray-600">
            I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.
          </p>
          {/* <Link href="#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link> */}
          <a href="/assets/cv/portfolio-by.pdf" download>
            CV Download
          </a>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 md:aspect-[3/4] aspect-square">
            <Image
              src="/assets/about.jpg"
              fill
              className="rounded-xl object-cover !static"
              alt="my photo"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
