import type { IconType } from "react-icons";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiReactquery,
  SiRecoil,
  SiNodedotjs,
  SiExpress,
  SiPassport,
  SiAmazonsimpleemailservice,
  SiZod,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiCloudflare,
//   SiAmazonwebservices,
  SiAppwrite,
} from "react-icons/si";

type item = {
    name:string,
    icon:IconType
}

type techStack = string

export interface SkillType {
    category:string,
    items:item[]
}


export interface projectType {
    name: string,
    github?: string,
    live?: string,
    description:string,
    techStack: techStack[],
  }

  export interface socialType {
    title: string,
    icon: IconType,
    link: string,
  }

export const skills:SkillType[] = [
  {
    category: "Languages",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "SQL", icon: SiPostgresql },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "TanStack Query", icon: SiReactquery },
      { name: "Recoil", icon: SiRecoil },
      { name: "React Hook Form", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React Beautiful DnD", icon: SiReact },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: SiPostman },
      { name: "Passport.js", icon: SiPassport },
      { name: "Nodemailer", icon: SiAmazonsimpleemailservice },
      { name: "Hono", icon: SiCloudflare },
      { name: "Zod", icon: SiZod },
      { name: "Express Rate Limit", icon: SiExpress },
    ],
  },
  {
    category: "Database & ORM",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    category: "Tools & Cloud",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: SiDocker },
      { name: "Cloudflare Workers", icon: SiCloudflare },
    //   { name: "AWS", icon: SiAmazonwebservices },
      { name: "Appwrite", icon: SiAppwrite },
    ],
  },
];

export const projects:projectType[] = [
  {
    name: "Shopzy",
    github: "https://github.com/Tejasnavadkar/E-Commerce-App-MERN",
    live: "https://shopzy-app.vercel.app/",
    description:
      "A full-stack e-commerce application with user and admin modules, secure authentication, and optimized state management.",
    techStack: [
      "React",
      "Redux Toolkit",
      "Redux Thunk",
      "Node.js",
      "Express",
      "MongoDB",
      "Passport.js",
      "Nodemailer",
      "Express Rate Limit",
      "React Hook Form",
    ],
  },

  {
    name: "Medium Clone",
    github: "https://github.com/Tejasnavadkar/Medium",
    live: "https://medium-psi-ebon.vercel.app/",
    description:
      "A serverless blogging platform built with modern web technologies, featuring JWT authentication and scalable backend architecture.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Hono",
      "Cloudflare Workers",
      "Recoil",
      "Zod",
      "Prisma",
      "PostgreSQL",
    ],
  },

  {
    name: "Pic-Perk",
    github: "https://github.com/Tejasnavadkar/Pic-Perk",
    live: "https://pic-perk.onrender.com/",
    description:
      "An image-sharing platform with authentication, image upload/download, and responsive UI for seamless user experience.",
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Tailwind CSS",
    ],
  },

  {
    name: "PayFlow",
    github: "https://github.com/Tejasnavadkar/Paytm",
    live: "https://pay-flow-inky.vercel.app/",
    description:
      "A secure money transfer application supporting JWT authentication, atomic database transactions, and robust input validation.",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Zod",
      "Axios",
    ],
  },
];

export const NavItems = [
    {
        name:"Home",
        link:"home"
    },
     {
        name:"About",
        link:"about"
    },
     {
        name:"Skills",
        link:"skills"
    },
     {
        name:"Project",
        link:"projects"
    },
     {
        name:"Contact",
        link:"contact"
    },
]

export const SocialLinks:socialType[] = [
    {
        title:"GitHub",
        icon:ImGithub,
        link:"https://github.com/Tejasnavadkar"
    },
    {
        title:"LinkedIn",
        icon:GrLinkedin,
        link:"https://www.linkedin.com/in/tejas-navadkar/"
    },
    {
        title:"Twitter",
        icon:BsTwitter,
        link:"https://x.com/Tejas_Navadkar"
    }
]
