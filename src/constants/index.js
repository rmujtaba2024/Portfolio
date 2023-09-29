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
    huzzy,
    redux,
    tailwind,
    usman,
    nodejs,
    mongodb,
    git,
    python,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    flexible,
    jobit,
    threed,
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: " Software Engineer",
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
      name: "Python",
      icon: python,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Avanade",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "June 2023 - Aug 2023",
      points: [
        "Automated 40+ critical FHLBC processes with Python scripts in a RPA framework, reducing manual work by 35%",
        "Collaborated on a .NET web appplication for FHLBC, optimizing workflows for 1000+ users.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Actively contributed to sprint-based development, including features, database integration, and front-end enhancements.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Educative, Inc",
      icon: tesla,
      iconBg: "#483D8B",
      date: "June 2022 - Aug 2022",
      points: [
        "Implemented a chat room feature using websockets, leading to a 40% increase in user interaction and improved communication.",
        "Created effective product requirements and successfully leveraged the MERN stack (MongoDB, Express, React.js, Node.js) in combination with socket.io for implementation.",
        "Coordinated the development, maintenance, and optimization of new APIs, applying modern asynchronous techniques, resulting in a 20% reduction in response times and improved system efficiency.",
        "Collaborated closely with cross-functional teams to deliver high-quality products and ensure seamless user experiences.",
      ],
    },
    {
      title: "TA for Data Structures & Algorithms",
      company_name: "DePauw University",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sep 2021 - Dec 2022",
      points: [
        "Mentored 25+ students, leading to a significant enhancement in their grasp of practical project applications",
        "Provided personalized support during office hours, yielding a 30% improvement in student performance",
        "Led workshops on advanced algorithms, resulting in a 15% increase in student participation and understanding.",
        "Designed and conducted mock interviews, helping students improve their technical interview skills and leading to a 25% increase in successful internship placements",
      ],
    },
  ];
  


  const testimonials = [
    {
      testimonial:
        "I'm continually impressed by his unwavering dedication and exceptional work ethic!",
      name: "Huzaifa Ehsan",
      designation: "SWE",
      company: "Zillow",
      image: huzzy,
    },
    {
      testimonial:
        "In my years of teaching, Rana's dedication and accomplishments continue to astound and inspire me",
      name: "Elijah Wood",
      designation: "Professor",
      company: "DePauw Uni",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rana does.",
      name: "Usman Azhar",
      designation: "CEO",
      company: "Atlas",
      image: usman,
    },
  ];
  
  const projects = [
    {
      name: "Dribble Clone",
      description:
        "A full stack web application, where users can post their projects. It uncludes features such as user profiles, CRUD functionalities and Google authorization.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "graphql",
          color: "green-text-gradien",
        },
      ],
      image: flexible,
      source_code_link: "https://github.com/rmujtaba2024/dribble_clone",
    },
    {
      name: "3D T Shirt Site",
      description:
        "A captivating website that puts you in the designer's seat, enabling personalized customization of 3D T-shirts. Elevate your fashion game by seamlessly integrating AI-driven designs, creating a truly unique and immersive fashion experience",
      tags: [
        {
          name: "three.js",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "openai-api",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradien",
        },
      ],
      image: threed,
      source_code_link: "https://github.com/rmujtaba2024/3D-Web-App",
    },
    {
      name: "Tiger Chat App",
      description:
        "This project is a full-stack real-time messaging web app that I built. The app has several cool features, like direct messages, group chats, and message notifications through Twilio. It also supports emojis, message reactions, threads, and even gifs! ",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
        {
          name: "stream.io",
          color: "pink-text-gradien",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/rmujtaba2024/Tiger-Chat-App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  