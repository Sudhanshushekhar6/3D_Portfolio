import {
  mobile,
  backend,
  creator,
  web,
  IBM,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
   NITT_logo,
  edunet,
  IIT_BOMBAY,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  monster,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "NextJs Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Data Engineer Intern",
    company_name: "NIT Trichy",
    company_website: "https://www.nitt.edu/",
  icon:NITT_logo,
    iconBg: "#E6DEDD",
    date: "May 2025 - June 2025",
    points: [
      " Developed a BCI-based ML system at NIT Trichy to detect mind wandering using EEG signals, enhancing focus monitoring capabilities.",
      "Applied signal processing and classification algorithms (SVM, RF) on EEG data to achieve high-accuracy mental state prediction",

    ],
  },
  {
    title: "AI Intern",
    company_name: "edunet foundation",
    company_website: "https://edunetfoundation.org/",
  icon: edunet,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Built an AI-powered potato disease detection system using TensorFlow, PIL, and Streamlit,achieving high accuracy through deep learning and image processing techniques",
      "Enabled real-time diagnosis for farmers by creating an interactive web app, helping them take timely actionto improve crop health and yield",
    
    ],
  },
  {
    title: "ML Intern",
    company_name: "IBM",
    company_website: "https://www.ibm.com/",
   icon:IBM,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Developed and implemented machine learning algorithms for a web-based platform, improving prediction accuracy by 15% and enabling real-time data-driven decisions",
      "Optimized website performance, data handling, and model integration, enhancing scalability by 50% and reducing load time by 40%.",
      
    ],
  },
  {
    title: "Data Engineer Intern",
    company_name: "IIT Bombay",
    company_website: "https://www.iitb.ac.in/",
   icon: IIT_BOMBAY,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Oct 2024",
    points: [
      " Contributed to the BharatGPT project by organizing and analyzing over 50,000 data points, enhancing model accuracy by 15% through data cleaning and structuring technique.",
      "Led and managed data annotation team, efficiently structuring 10,000+ data points, and streamlinedworkflows to reduce project completion time by 20%.",
      
    ],
  }

  
];

const projects = [
  {
    name: "Jeevni",
    description:
      "Revolutionizing mental healthcare in New York State with a user-friendly platform for personalized therapy and progress tracking. Provides the digital gateway to comprehensive behavioral healthcare.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
   
  },
  {
    name: "Ecowatt",
    description:"Ecowatt is an intelligent solar energy optimization platform that helps households and businesses maximize savings by managing energy usage based on Time-of-Use (TOU) tariffs. It leverages real-time monitoring, smart analytics, and AI-driven automation to reduce electricity costs and promote sustainable energy practices.",
    tags: [
      {
        name: "IOT",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://github.com/raushan0785/Ecowatt",
  },
  {
    name: "AgriLeaf",
    description:
      "An AI-powered system leveraging deep learning and image processing to detect potato leaf diseases. Built with TensorFlow, and Streamlit, this project helps farmers diagnose crop health efficiently.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://github.com/Sudhanshushekhar6/Potato_Leaf_Disease_Detection",
  }
  
  
  
];

const personalInfo = {
  name: "Sudhanshu",
  fullName: "Sudhanshu Kumar",
  email: "kumarsudhanshu@gmail.com",
  
  role: "Mern Stack Developer",
  about: `I am a passionate and results-driven Software Developer with a strong foundation in JavaScript and practical experience in building responsive, scalable, and user-centric applications across web, mobile, and backend environments. My frontend expertise lies in developing dynamic user interfaces using React.js and Next.js, complemented by efficient state management with Redux. I have a keen eye for design and usability, often utilizing Bootstrap and Tailwind CSS to craft clean, responsive layouts that enhance the user experience. On the backend, I work confidently with Node.js and Express.js, creating robust RESTful APIs and integrating with various services to ensure seamless data flow and secure operations.`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1fW3dBgjyh-gOIYviWzD4oxZMDPTxMpCT/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/sudhanshu-kumar-a9bb36268/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Sudhanshushekhar6",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
