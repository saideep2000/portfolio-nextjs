"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from '../Styledpic';
import { GiVolleyballBall } from "react-icons/gi";
import { GiGuitarHead } from 'react-icons/gi';
import { FaLightbulb, FaCode } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div id="about" className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20" ref={ref}>
      <motion.div 
      className="w-full sm:w-[70%] pr-0 sm:pr-8 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
          <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              <FaLightbulb className="mr-2" /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
             I’m Saideep Samineni, a passionate software engineer with a strong foundation in full-stack development, cloud-native architectures, and scalable distributed systems. I enjoy solving real-world problems through clean code, thoughtful system design, and automation — whether it’s building promo platforms, secure financial tools, or AI-driven web apps.
            </p>
            <p>
              <FaCode className="inline-block mr-2" /> 

              With 2+ years of hands-on experience across industries — from fintech at Accenture to fast-paced startups like Swapt — I&apos;ve built everything from QR code microservices to multithreaded financial integrations. I specialize in Java, Spring Boot, Python, React, Kubernetes, and CI/CD pipelines, and I&apos;m deeply invested in writing performant, maintainable, and testable software.            </p>
            <p>
              When I&apos;m not crunching numbers or coding, you might find me:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><GiGuitarHead className="inline-block mr-2" /> Playing guitar and experimenting with melodies</li>
              <li><GiVolleyballBall className="inline-block mr-2" /> Spiking volleyballs on the weekends</li>
            </ul>
            <p>
            I believe in continuous learning, collaborative building, and engineering with purpose. I&apos;m always looking for opportunities to create impact through technology — and to grow along the way.            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div 
        className="w-full sm:w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='w-full max-w-[250px] aspect-square'>
          <StyledPic />
        </div>
      </motion.div>
    </div>
  )
}

export default AboutMe
