// data/workExperience.ts
import { FaPython, FaChartBar, FaAws, FaChalkboardTeacher, FaJava, FaReact, FaNodeJs, FaDatabase, FaJenkins, FaWatchmanMonitoring} from 'react-icons/fa';
import { SiApachekafka, SiDocker, SiJenkins, SiLangchain, SiMlflow, SiOpenai, SiPandas, SiPostgresql, SiPytorch, SiRedis, SiStreamlit, SiTableau } from 'react-icons/si';
import React from 'react';
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import NortheasternIcon from '@/components/icons/NortheasternIcon';
import { internshipWorkSWAPT, workAtINTUIT, workExpAtNEU } from './jobDesc';
import { RiNextjsFill } from 'react-icons/ri';
import SwaptLogo from '@/components/icons/SwaptLogo';
import IntuitLogo from '@/components/icons/IntuitIcon';


export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: string;
  description: string | Promise<string>;
  skills: Skill[];
  logo: React.ComponentType<{ className?: string }>;
}

async function convertMarkDown(desc: string){
  const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, {allowDangerousHtml: true})
  .use(rehypeStringify);
  const file = await processor.process(desc);
  return String(file);
}


export const workExperiences: WorkExperience[] = [
{
    company: "Swapt",
    position: "Software Engineer",
    duration: "Aug 2024 - Dec 2024 (5 Months)",
    year: "2024",
    description: convertMarkDown(internshipWorkSWAPT),
    skills: [
      { name: "Next.js", icon:  RiNextjsFill},
      { name: "React", icon: FaReact },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "PowerBI", icon: FaChartBar},
      { name: "Kafka", icon: SiApachekafka},
      { name: "LangChain", icon: SiLangchain},
      { name: "OpenAI", icon: SiOpenai},
      { name: "PostgreSQL", icon: SiPostgresql},
      { name: "Docker", icon: SiDocker},
      { name: "Jenkins", icon: SiJenkins},
      { name: "AWS", icon: FaAws},
    ],
    logo: SwaptLogo,
  },
  {
    company: "Northeastern University",
    position: "Graduate Teaching Assistant",
    duration: "Jan 2024 - May 2024 (5 Months)",
    year: "2024",
    description: convertMarkDown(workExpAtNEU),
    skills: [
      { name: "Teaching", icon: FaChalkboardTeacher },
      { name: "Python", icon: FaPython },
      { name: "React", icon: FaReact },
      { name: "NodeJS", icon: FaNodeJs },
      { name: "MongoDB", icon: FaDatabase },
    ],
    logo: NortheasternIcon
  },
  {
    company: "Intuit",
    position: "Software Engineer",
    duration: "May 2021 - Dec 2022 (1 yr 8 mos)",
    year: "2021-2022",
    description: convertMarkDown(workAtINTUIT),
    skills: [
      { name: "Java", icon: FaJava },
      { name: "React", icon: FaReact },
      { name: "Python", icon: FaPython },
      { name: "PostgreSQL", icon: SiPostgresql},
      { name: "AWS", icon: FaAws},
      { name: "Docker", icon: SiDocker},
      { name: "Jenkins", icon: FaJenkins },
      { name: "Splunk", icon: FaWatchmanMonitoring },
      
    ],
    logo: IntuitLogo
  },
];

