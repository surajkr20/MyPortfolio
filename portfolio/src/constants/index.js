import coc from '../assets/img/coc.png'
import bseb from '../assets/img/BSEB.jpeg'
import logo from '../assets/img/12th school logo.png'

import {
    contact,
    car,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Bachalor's of Computer Application",
        company_name: "College of Commerce, Arts & Science, patna || 2022-2025",
        iconBg: "#accbe1",
        schoolInfoLink: "https://www.cocaspatna.ac.in/",
        icon: coc,
        points: [
            "Gained proficiency in programming languages like C, C++, Java and Javascript",
            "Diving deep into advanced programming concepts, through learning Data Structure and algorithms with java.",
            "Building projects using, React.js, Node.js, Express.js, and MongoDB ( MERN stack )."
        ],
    },
    {
        title: "I.SC (Mathematics) || BSEB",
        company_name: "SAHID RAMANAND SINGH RAM GOBIND H.S. PUNPUN | 2020-2022",
        iconBg: "#fbc3bc",
        schoolInfoLink : "https://schools.org.in/patna/10281100205/sahid-ramanand-singh-ram-gobind-h-s-punpun.html",
        icon: logo,
        points: [
            "Excelled in key subjects like Mathematics, Physics, Chemistry, Hindi, and English.",
            "Achieved 78% marks, building a strong academic foundation for future learning.",
            "Developed a strong interest in technology and problem-solving."
        ],
    },
    {
        title: "High School (10th) | BSEB",
        company_name: "UTKRAMIT MADHYAMIK VIDYALAYA LANKA KACHHUARA | 2019-2020",
        iconBg: "#b7e4c7",
        schoolInfoLink : "https://schools.org.in/patna/10281001102/utkramit-madhyamik-vidyalaya-lanka-kachhuara.html",
        icon: bseb,
        points: [
            "Excelled in key subjects like Mathematics, Science, Hindi, English, and Sanskrit.",
            "Achieved 77% marks, building a strong academic foundation for future learning."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: "https://github.com/surajkr20",
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link:'https://www.linkedin.com/in/suraj-kumar-5b48b9254/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];