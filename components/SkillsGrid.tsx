// components/SkillsGrid.tsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiApachekafka, SiPytorch, SiNumpy, SiPandas, SiScikitlearn, 
  SiLangchain, SiHuggingface, SiMongodb, SiGraphql, SiJenkins, SiKubernetes, SiMlflow } from "react-icons/si";
import { DiSpark } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { FaPython, FaDatabase, FaChartBar, FaGithub, FaJava, FaDocker, FaAws } from 'react-icons/fa';

const SkillsGrid = () => {
  const skills = useMemo(() => [
    { icon: <FaJava />, name: 'Java' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaGolang />, name: 'Go'},
    { icon: <FaDatabase />, name: 'SQL' },
    { icon: <BiLogoTypescript />, name: 'TypeScript' },
    { icon: <RiNextjsFill />, name: 'Next.js' },
    { icon: <SiGraphql />, name: 'GraphQL' },
    { icon: <SiApachekafka />, name: 'Kafka'},
    // { icon: <DiSpark />, name: "Spark"},
    // { icon: <SiNumpy />, name: "Numpy"},
    // { icon: <SiPandas />, name: "Pandas"},
    // { icon: <SiHuggingface />, name: "Hugging Face"},
    // { icon: <SiPytorch />, name: "PyTorch"},
    // { icon: <SiLangchain />, name: "LangChain"},
    // { icon: <SiScikitlearn />, name: "Scikit-learn"},
    // { icon: <SiMlflow />, name: 'MLflow' },
    { icon: <SiMongodb />, name: "MongoDB"},
    { icon: <FaChartBar />, name: 'Power BI' },
    { icon: <FaGithub />, name: 'Git' },
    { icon: <FaDocker />, name: 'Docker'},
    { icon: <SiKubernetes />, name: 'Kubernetes' },
    { icon: <SiJenkins />, name: 'Jenkins' },
    { icon: <FaAws />, name: 'AWS' },
    { icon: <VscAzure />, name: 'Azure' },
    
  ], []);

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-4 gap-2 sm:gap-4 mb-8 -mx-2 sm:mx-0"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          custom={index}
          variants={skillVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="bg-card text-card-foreground rounded-lg p-2 sm:p-3 text-center flex flex-col items-center justify-center"
        >
          <div className="text-2xl sm:text-3xl mb-1 text-primary">{skill.icon}</div>
          <p className="text-xs sm:text-sm font-medium">{skill.name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsGrid;
