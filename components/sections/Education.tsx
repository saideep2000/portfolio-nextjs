// components/sections/Work.tsx
"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { educations, EducationField } from '@/data/education';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { FaUserGraduate } from 'react-icons/fa';
import EducationTimeline from '../EducationTimeline';

const Education: React.FC = () => {
  const [active, setActive] = useState<EducationField | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollSection();

  useOutsideClick(popupRef, () => {
    if (active) {
      setActive(null);
    }
  });

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold text-primary flex items-center justify-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <FaUserGraduate className="mr-2"/> Education
      </motion.h2>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary"></div>
        
        {educations.map((education, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <EducationTimeline
              education={education}
              index={index}
              setActive={setActive}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
