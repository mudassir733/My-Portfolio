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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Wordpress Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "WordPress Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Created and customized WordPress themes and plugins to meet client requirements and enhance website functionality.",
      "Built responsive layouts that adapt seamlessly to different screen sizes.",
      "Utilized WordPress best practices to ensure security and performance.",

    ],
  },
  {
    title: "Backend Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Contributed to the development of robust back-end systems using [Express JS, JavaScript, Node JS]",
      "Handled data processing, server-side logic, and API interactions.",
      "Implemented secure and scalable solutions to meet project requirements.",
    ],
  },
  {
    title: "MongoDB Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Designed and implemented efficient data models using MongoDB for optimal performance and scalability.",
      "Performed complex queries and data manipulation tasks to retrieve and manage information effectively.",
      "Collaborated with other developers to ensure proper integration of the database with the application.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I was impressed by Mudassir Ali's ability to understand our complex needs and translate them into a user-friendly and high-performing e-commerce platform. Their communication was clear and consistent, and they delivered the project on time and within budget. Highly recommend!",
      name: "sara jones",
    designation: "(CEO)",
    company: "E-commerce Website Development",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Mudassir Ali's creativity and attention to detail were essential in revamping our outdated website. They worked closely with our team to ensure the new design reflected our brand identity and user expectations. We've already seen a significant increase in website traffic and engagement.",
    name: "Chris Brown",
    designation: "MM BS",
    company: "Website Redesign",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Working with Mudassir Ali was a breeze. They are a skilled developer who actively listened to our feedback and incorporated it into the final product. The landing page is not only visually appealing but also effectively captures leads. Thanks, Mudassir Ali!",
    name: "Lisa Wong",
    designation: "FGTS",
    company: "Landing Page Development",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Porto Ecomm",
    description:
      "Developed a user-friendly website, Porto, for buying and selling premium website themes at competitive prices. Implemented features for browsing themes, filtering by category, and secure purchase functionality. View the code on GitHub",
    tags: [
      {
        name: "react",
        color: "text-blue-600",
      },
      {
        name: "mongodb",
        color: "text-green-600",
      },
      {
        name: "tailwind",
        color: "text-pink-500",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/mudassir733/Porto-Ecommerce.github",
  },
  {
    name: "ClouXGame",
    description:
      "Developed ClouXGame, a comprehensive gaming platform offering users the ability to download and purchase games directly. The user-friendly interface allows players to browse a diverse game library, filter by genre, and utilize secure payment options. View the code on GitHub",
    tags: [
      {
        name: "react",
        color: "text-blue-600",
      },
      {
        name: "restapi",
        color: "text-green-600",
      },
      {
        name: "scss",
        color: "text-pink-600",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/mudassir733/ClouXGameWebsite.github",
  },
  {
    name: "Buildream",
    description:
      "Developed Buildream, a visually stunning website that streamlines the connection between clients and construction companies. Users can access transparent pricing for various engineering services, simplifying project estimates and facilitating direct communication with potential contractors. Explore the code on GitHub",
    tags: [
      {
        name: "nextjs",
        color: "text-blue-600",
      },
      {
        name: "supabase",
        color: "text-green-600",
      },
      {
        name: "css",
        color: "text-pink-600",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/mudassir733/Buildream-Construction",
  },
];

export { services, technologies, experiences, testimonials, projects };