'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  skill: string;
  percentage: number;
  color: string;
};

const SkillsItem = ({ skill, percentage, color }: Props) => {
  const strokeWidth = 10;
  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (percentage / 100) * circumference;

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  const variants = {
    initial: { strokeDashoffset: circumference },
    animate: { strokeDashoffset: progress },
  };

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial');
    }
  }, [controls, inView]);
  return (
    <div className="flex justify-center items-center py-2 cursor-pointer">
      <div
        className="relative w-[10rem] h-[10rem] hover:scale-110 hover:rotate-[15deg] transition"
        ref={ref}
      >
        <svg viewBox="0 0 100 100" className="absolute top-0 left-0">
          <circle
            cx="50"
            cy="50"
            r={radius}
            strokeWidth={strokeWidth}
            stroke="#E5E7EB"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            strokeWidth={strokeWidth}
            stroke={color}
            fill="none"
            strokeDasharray={circumference}
            strokeLinecap="round"
            variants={variants}
            initial="initial"
            animate={controls}
          />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xl font-semibold text-gray-700 px-5 text-center">
          {skill}
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
