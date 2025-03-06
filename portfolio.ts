import emoji from "react-easy-emoji";
import {
  EducationType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Harsh Deradi",
  title: "Hi all, I'm Harsh",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with React.js, Tailwind css, Node.js, Express.js, SQL. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "harshderadi",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=harshderadi@gmail.com",
  linkedin: "https://www.linkedin.com/in/harsh-deradi1/",
  github: "https://github.com/harshderadi",
 // instagram: "https://www.instagram.com/harrrsshh__11",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Software Developer",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Developing scalable and efficient software solutions"),  
        emoji("⚡ Designing and implementing robust backend systems and APIs"),  
        emoji("⚡ Creating responsive and user-friendly web applications"), 
      ],
      softwareSkills: [
        {
          skillName: "C",
          iconifyTag: "vscode-icons:file-type-c",
        },
        {
          skillName: "C Plus Plus", // ✅ Fixed (Removed `++`)
          iconifyTag: "logos:c-plusplus",
        },
        {
          skillName: "HTML",
          iconifyTag: "logos:html-5",
        },
        {
          skillName: "CSS",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "ReactJS", // ✅ Fixed (Removed `.js`)
          iconifyTag: "logos:react",
        },
        {
          skillName: "SQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "NodeJS", // ✅ Fixed (Removed `.js`)
          iconifyTag: "logos:nodejs-icon",
        },
        {
          skillName: "ExpressJS", // ✅ Fixed (Removed `.js`)
          iconifyTag: "simple-icons:express",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript-icon",
        },
        {
          skillName: "NextJS", // ✅ Fixed (Removed `.js`)
          iconifyTag: "logos:nextjs-icon",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
      ],
      
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Sage University, Indore",
    subHeader: "Bachelor of Technology in Computer Science and Engineering",
    duration: "2021-2025",
    desc: "",
    grade: "7.7 CGPA",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Govt. H.S. Excellence School, Ujjain",
    subHeader: "12th",
    duration: "2021",
    desc: "",
    grade: "83%",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Lokmanya Tilak Vidhya Vihar H.S. School, Ujjain",
    subHeader: "10th",
    duration: "2019",
    desc: "",
    grade: "82.7%",
    descBullets: [], // Array of Strings
  },
];



export const projects: ProjectType[] = [
  {
    name: "CodeQuad",
    desc: "A Real Time Code Editor with AI Code Review and Task Management",
    github: "https://github.com/Aviraj0714/CodeQuad",
    link: "https://code-quad.netlify.app/",
  },
  {
    name: "PropertEase",
    desc: "A User Friendly Home Rental System for Easy Rental Process with Digital Agreement",
    link: "https://properteasehomerent.netlify.app/",
  },
  {
    name: "H&A-Ecommerce Website",
    desc: "A easy to use well structured E-commerce website for shooping.",
    link: "https://hashopping.netlify.app/",
  },
  {
    name: "Portfolio",
    desc: "A developer portfolio which gives all neccessary information about me to demonstrate my skills ",
    link: "https://developer-portfolio-harsh-deradis-projects.vercel.app/",
  },
];



// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Harsh Deradi",
  description: greetings.description,
  author: "HArsh Deradi",
  image: "https://avatars.githubusercontent.com/u/75111484?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Harsh",
    "Hanzla Deradi",
    "@1Harsh100",
    "1Harsh100",
    "Portfolio",
    "Harsh Portfolio ",
    "Harsh Deradi Portfolio",
  ],
};
