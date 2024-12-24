import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blogger",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Graphic Designer Intern",
    company_name: "Aashmaan Foundation",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2022 - Nov 2022",
    points: [
      "Collaborated with cross-functional teams to understand design requirements and deliver creative solutions.",
      "Designed engaging graphics for digital platforms, including social media and websites.",
      "Conducted research on design trends to incorporate innovative ideas into projects.",
      "Achieved a 4 out of 5 star rating on the internship certificate for outstanding performance.",
    ],
  },
  {
    title: "Web Developer/Design Intern",
    company_name: "The Sparks Foundation",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Dec 2022",
    points: [
      "Developed and maintained web applications using HTML, CSS, and JavaScript, ensuring a responsive and user-friendly design.",
      "Collaborated with cross-functional teams to gather requirements and implement features that enhance user experience.",
      "Assisted in the design and development of user interfaces, focusing on visual aesthetics and functionality.",
      "Researched and implemented new web technologies to enhance development processes and project outcomes.",
    ],
  },
  {
    title: "Web/Epub Developer",
    company_name: "Sun ITES Consulting Pvt. Ltd.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2022 - Dec 2023",
    points: [
      "Created and optimized ePub files for compatibility across multiple platforms.",
      "Designed and developed websites and eBooks, gathering and refining specifications based on technical requirements.",
      "Collaborated with team members to ensure timely and high-quality product development.",
      "Ensured cross-browser compatibility and responsive design for all web content.",
    ],
  },
  {
    title: "AWS Intern",
    company_name: "Internship Studio",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Developed and deployed cloud-based applications using AWS services to enhance performance and scalability.",
      "Collaborated with teams to implement AWS solutions that optimize application functionality and user experience.",
      "Assisted in configuring essential AWS services such as EC2, S3, and Lambda for various projects.",
      "Conducted testing and troubleshooting to ensure reliability and efficiency of cloud applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "In web development, Ananya shines with impressive skills, creating responsive and user-friendly websites.",
    name: "Kshitija Shetty",
    designation: "SWE",
    company: "SAP Labs",
    image: "https://i.im.ge/2024/10/25/kcyltx.1729589788612.jpeg",
  },
  {
    testimonial:
      "With innovative solutions, Ananya excels in Android, delivering seamless user experiences.",
    name: "Preetham Hegde",
    designation: "CEO",
    company: "Exter",
    image: "https://i.im.ge/2024/10/25/kcyXqG.1584156513208.jpeg",
  },
  {
    testimonial:
      "Ananya’s design work stands out, blending creativity and functionality for visually stunning projects!",
    name: "Gautham Hegde",
    designation: "Director",
    company: "Vivitron Energy",
    image: "https://i.im.ge/2024/10/25/kcyT4L.1713689037459.jpeg",
  },
];

const projects = [
  {
    name: "School Bus Tracker",
    description:
      "A School Bus Tracker app provides real-time GPS tracking for parents to monitor bus location, Delay, and arrival time. Schools use it to efficiently manage and track bus routes.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Ananya-Hegde2001/School-Bus-Tracker-App",
  },
  {
    name: "Online Voting System",
    description:
      "The Online Voting System enables secure electronic voting with user registration and real-time results, featuring an admin interface for managing elections.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Xampp",
        color: "green-text-gradient",
      },
      {
        name: "Sql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ananya-Hegde2001/Online-Voting-System",
  },
  {
    name: "Spotify Clone",
    description:
      "The Spotify clone is a music streaming app that lets users search and manage playlists. It includes user authentication for a personalized experience.",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Ananya-Hegde2001/Spotify-Clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
