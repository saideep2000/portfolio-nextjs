
import React from 'react';
import { motion } from 'framer-motion';
import { EducationField } from '@/data/education';

interface EducationTimelineItemProps {
  education: EducationField;
  index: number;
  setActive: (education: EducationField) => void;
}

const WorkTimelineItem: React.FC<EducationTimelineItemProps> = ({ education, index, setActive }) => {
  return (
    <motion.div 
      className={`mb-16 relative cursor-pointer`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5}}
      whileHover={{ scale: 1.05 }}
      onClick={() => setActive(education)}
    >
      <div className={`absolute top-0 left-4 md:left-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'md:translate-x-8' : 'md:-translate-x-8'} bg-primary text-primary-foreground rounded-full px-4 py-1`}>
        {education.year}
      </div>
      
      <motion.div
        className={`bg-card text-card-foreground p-6 rounded-lg shadow-lg ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
        whileHover={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="flex items-center mb-4">
          <div className="text-5xl flex-shrink-0 mr-2">
            {React.createElement(education.logo)}
          </div>
          <div>
            <h3 className="text-xl font-semibold">{education.degree}</h3>
            <p className="text-primary">{education.university}</p>
            <p className="text-sm text-gray-500">{education.duration}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkTimelineItem;
