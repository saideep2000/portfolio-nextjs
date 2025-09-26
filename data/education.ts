import VitIcon from "@/components/icons/VitIcon";
import NortheasternIcon from "@/components/icons/NortheasternIcon";

export interface EducationField {
    university: string;
    degree: string;
    duration: string;
    year: string;
    logo: React.ComponentType<{ className?: string }>;
}

export const educations: EducationField[] = [
    {
        university: "Northeastern University, Boston",
        degree: "Master of Science in Computer Science",
        duration: "Jan 2023 - May 2025",
        year: "2023-2025",
        logo: NortheasternIcon
    },
    {
        university: "VIT-AP University, India",
        degree: "Master of Technology in Software Engineering (5-Year Integrated)",
        duration: "Aug 2017 - May 2022",
        year: "2017-2022",
        logo: VitIcon
    },
];
    
    