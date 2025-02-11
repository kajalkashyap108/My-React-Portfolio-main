import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";

export const HERO_CONTENT = `I am a passionate Computer Science and Engineering graduate with a strong academic background and a zest for innovation. Join me as I share my projects and experiences, showcasing my dedication to creating impactful solutions and pushing the boundaries of what's possible in the tech world. `;

export const ABOUT_TEXT = `Hello! I’m a passionate Computer Science and Engineering graduate from GIET University in Gunupur, Odisha. My journey into programming started in class 10 when I learned C++. This sparked my curiosity about how software works and led me to pursue engineering.

I have a strong foundation in programming languages like Python, C/C++, JavaScript, and PHP. I enjoy web development using frameworks like Django and Flask. I also have experience with machine learning tools and frontend development using HTML/CSS. Additionally, I work with databases like SQL and Firebase.

I’ve gained practical experience as a Software Developer Intern at DePronto Infotech, where I worked on projects for private banks in India. I enjoy solving coding challenges on platforms like LeetCode and HackerRank, where I have solved over 250 problems. I’m always eager to learn and explore new areas in software development.

I also participate in extracurricular activities and hold certifications like AWS Cloud Practitioner Essentials.`;

export const EXPERIENCES = [
  {
    year: "Oct 2024 - Present",
    role: "Associate Software Engineer",
    company: "Accenture Technology",
    description: `Onboarded as a Junior Software Engineer and trained on MS Azure Services.Looking forward to learn and grow`,
    technologies: ["Data Pipelines","Azure Storage","Python", "SQL"],
  },
  {
    year: "Dec 2023 - May 2024",
    role: "Software Developer Intern",
    company: "DePronto Infotech.",
    description: `I've contributed to various projects for major private banks in India, focusing on resolving issues promptly to maintain high client satisfaction. By optimizing code and writing efficient scripts, I improved application performance by up to 30%. I maintain open communication with clients to understand and meet their evolving needs.`,
    technologies: ["Javascript","MSSQL","ReactJs", "Zend"],
  },
  {
    year: "Oct 2022 - Dec 2022",
    role: "Salesforce Developer Intern (AICTE Virual Internship)",
    company: "Smartbridge",
    description: `Completed an eight-week online internship with SmartBridge, in collaboration with AICTE. My tasks included completing modules on the Trailhead platform, where I successfully finished all trails. I earned the Apex Specialist Badge and Process Automation Specialist Super Badge, gaining practical skills in Salesforce CRM through hands-on learning.`,

    technologies: ["Salesforce", "Trailshead", "Apex"],
  },
  {
    year: "May 2022 - June 2022",
    role: "Data Analyst Intern",
    company: "Lagozon Edtech Private Limited",
    description: `Completed a six-week training and internship program where I received training in MySQL, focusing on topics like Joins, relations, and basic commands. I acquired knowledge of Power BI, including various visualizations, and learned about DAX functions and Power Query. I  implemented machine learning algorithms within the Power BI, and successfully presented a project based on these topics.`,

    technologies: ["Python", "PowerBI", "ML","SQL"],
  }

];

export const EDUCATION = [
  {
    degree: "Bachelors of Technology in Computer Science and Engineering",
    institution: "GIET University",
    duration: "Nov 2020 - June 2024",
    description:
      "Graduated with a  understanding of core computer science fundamentals. Explored a wide range of topics including coding, app development, web development, and machine learning. Lived away from home in a hostel, where I made lasting friendships and created wonderful memories",
  },
  {
    degree: "12th Science",
    institution: "Deepika English Medium School,CBSE",
    duration: "June 2018 - May 2020",
    description:
      "Studied Physics, Chemistry, Mathematics, and Computer Science with a focus on C++. Developed a growing interest in programming, enjoyed memorable trips with friends, and cherished the final moments of school life.",
  },
  {
    degree: "Primary School",
    institution: "Deepika English Medium School,CBSE",
    duration: "April 2008 - May 2018",
    description:
      "Gained a solid foundation across all subjects while growing from a curious child into a motivated young adult. Embraced a wide range of activities, including quizzes, Taekwondo, and other extracurriculars, which enriched my learning experience and personal development.",
  },
]; 

export const PROJECTS = [
  {
    title:"Paisa Planner",
    image: project5,
    description:
    "PaisaPlanner is a web application aimed at simplifying expense management. It provides users with tools to track income, categorize expenses, and visualize financial data through intuitive dashboards.",
    technologies:["React","NodeJs","MongoDB","ExpressJs","Vercel","Renderer"],
    github:"https://github.com/thegeek36/PaisaPlanner",
    live:"https://paisa-planner.vercel.app/"
  },
  {
    title: "Bharataya Rescue",
    image: project1,
    description:
      "An innovative project designed to reunite missing individuals with their loved ones. Built using latest face recognition technology, it ensures an efficient and seamless user experience. The project also features notification functionality to alert users if a missing person is found.",
    technologies: ["HTML", "CSS", "Javascript", "OpenCV", "Django","Sqlite"],
    github : "https://github.com/thegeek36/Missing-Person-Detection-System",
    live : "#" ,
  },
  {
    title: "MyRecipes.com",
    image: project2,
    description:
      "Designed and developed a dynamic web application where food enthusiasts can share and explore a wide variety of delectable recipes. The platform features full CRUD operations, user profiles, and interactive functionalities, including comments and ratings for user engagement.",
    technologies: ["HTML", "CSS", "sqlite", "Django"],
    github : "https://github.com/thegeek36/Recipe-App",
    live : "#" ,
  },
  {
    title: "Multiple Disease Prediction",
    image: project3,
    description:
      "Created a user-friendly web app to predict Diabetes, Heart Disease, and Parkinson's Disease. The app is deployed online using Streamlit and employs various machine learning algorithms to provide accurate predictions.",
    technologies: ["Python", "Machine Learning", "Streamlit",],
    github : "https://github.com/thegeek36/Multiple-Disease-Prediction",
    live : "#" ,
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind Css", "React",],
    github : "https://github.com/thegeek36/My-React-Portfolio",
    live : "#" ,
  },
];

export const CONTACT = {
  address: "Banglore,India",
  phoneNo: "+91 9090xxxxxx",
  email: "priyanshu.panda.tech@gmail.com",
};