// data/projects.ts
import { SiReact } from "react-icons/si";
import { FaStackOverflow } from "react-icons/fa";
import { Linkedin02Icon } from "hugeicons-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
}

export const projects: Project[] = [
  {
  id: 1,
  title: "LinkedLens: Optimizing search in LinkedIn",
  description: "Smart job search platform using RAG to query 124K+ LinkedIn listings with high accuracy and real-time results.",
  icon: Linkedin02Icon,
  technologies: ["Next.js", "React", "Python", "LangChain", "FAISS", "RAG", "LLMs", "FastAPI", "GCP"],
  githubLink: "https://github.com/jaynanduri/LinkedLens",
  },
  {
    id: 2,
    title: "FakeStackOverflow",
    description: "Designed and developed a full-stack web application mimicking Stack Overflow, enabling users to post questions, answer, comment, and vote with real-time updates. Integrated authentication, authorization.",
    icon: FaStackOverflow,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Jest", "Cypress", "Helm", "Docker", "Kubernetes"],
    githubLink: "https://github.com/saideep2000/fake_stackoverflow",
  },
  {
    id: 3,
    title: "Caption Craft",
    description: "Innovative social media platform designed to creatively generate and share art based on user-provided prompts.",
    icon: SiReact,
    technologies: ["Javascript", "React", "Express", "Redux", "MongoDB", "MaterialUI", "Stable Diffusion", "Transformers"],
    githubLink: "https://github.com/saideep2000/caption-craft-react-web-app",
  },
  // {
  // id: 4,
  // title: "Next.js Portfolio Website",
  // description: "A single-page application portfolio website built using Next.js, TailwindCSS, and shadcn/ui components.",
  // icon: RiNextjsFill,
  // technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "shadcn/ui"],
  // githubLink: "https://github.com/jaynanduri/portfolio-website",
  // },
  // {
  // id: 5,
  // title: "Distributed Graph Analysis",
  // description: "Implemented PageRank in MapReduce and Spark to analyze 1M nodes dense web graph on EMR cluster with I/O handling in S3 buckets",
  // icon: PiGraphThin,
  // technologies: ["PageRank", "Python", "Java", "PySpark", "AWS", "Hadoop"],
  // githubLink: "https://github.com/jaynanduri/text-search-engine",
  // }
  
];
