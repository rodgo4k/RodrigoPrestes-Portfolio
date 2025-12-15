import { FaPaintBrush } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  figma,
  sketch,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  node,
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Contact" },
];

export const services = [
  {
    title: "Web and Mobile Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Building responsive, dynamic, and high-performance websites and apps tailored to your needs. 
    Using modern technologies like React, React Native, Node, and more, I ensure your site is optimized 
    for speed, scalability, and accessibility, delivering a robust online presence.`,
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: `Crafting visually stunning and user-centric designs that ensure seamless user experiences. 
                  From wireframes to high-fidelity prototypes, I focus on creating intuitive interfaces that 
                  blend creativity and functionality, enhancing engagement and usability.`,
  },
  {
    title: "Content Creation",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Producing compelling digital content that resonates with your audience. From blogs 
                  and technical documentation to engaging website copy, I ensure your brand's message 
                  is clear, impactful, and aligned with your business goals.`,
  },
];

export const projects = [
  {
    title: "AI Powered School",
    image: project1,
    category: "UI/UX",
    description: `Transforming education with AI, our School UI Design project revolutionizes the 
                     learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
                     and intuitive navigation, our design empowers educators and students alike. Experience 
                     innovation at its finest as we pave the way for a smarter, more efficient educational 
                     journey.`,
    demoLink: "https://github.com/rodgo4k",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "XD",
        logo: xd,
      },
    ],
  },
  {
    title: "E-Commerce Application",
    image: project2,
    category: "Web",
    description: `Enhance your online shopping experience with our E-Commerce Application 
      UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
      interface offers easy navigation, personalized recommendations, and secure 
      transactions. Elevate your digital storefront and captivate customers with a visually 
      stunning design tailored to your brand`,
    demoLink: "https://github.com/rodgo4k",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Robotic Engineering Web Application",
    image: project3,
    category: "Web",
    description: `Unlock the future of robotics with our Robotic Engineering Web Application
      project. Seamlessly integrating cutting-edge technology, data analytics, 
      and collaborative tools, our platform empowers engineers to design, simulate, 
      and optimize robotic systems. Experience innovation at its peak as we redefine the 
      boundaries of robotic engineering.`,
    demoLink: "https://github.com/rodgo4k",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "Project Management application",
    image: project4,
    category: "Apps",
    description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                     Elevate your project management experience and achieve success with ease.`,
    demoLink: "https://github.com/rodgo4k",
    stacks: [
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "CSS",
        logo: css,
      },
    ],
  },
  {
    title: "Mobile bank - App Design",
    image: project5,
    category: "UI/UX",
    description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
    demoLink: "https://github.com/rodgo4k",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
    ],
  },
  {
    title: "Quiz App Development",
    image: project6,
    category: "Apps",
    description: `Elevate engagement and knowledge retention with our Quiz App 
                    Development project. Seamlessly crafted for interactive learning 
                    experiences, our app offers customizable quizzes, real-time feedback, 
                    and captivating visuals. Empower users to test their knowledge anytime,
                     anywhere, fostering a dynamic learning environment tailored to their 
                     needs.`,
    demoLink: "https://github.com/rodgo4k",
    stacks: [
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "Bootstrap",
        logo: bootstrap,
      },
    ],
  },
];

export const skills = [
  {
    title: "Web and Mobile Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
      {
        skill: "React Native",
        level: "Experienced",
        logo: reactnative,
      },
      {
        skill: "Node",
        level: "Intermediate",
        logo: node,
      },
      {
        skill: "Tailwind",
        level: "Experienced",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Intermediate",
        logo: bootstrap,
      },
    ],
  },
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
        logo: figma,
      },
      {
        skill: "Sketch",
        level: "Intermediate",
        logo: sketch,
      },
      {
        skill: "XD",
        level: "Intermediate",
        logo: xd,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "rodrigoaprestes@gmail.com",
    link: "mailto:rodrigoaprestes@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "WhatsApp",
    value: "+5511954953226",
    link: "https://wa.me/+5511954953226",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
  {
    name: "Messenger",
    value: "Rodrigo Prestes",
    link: "https://m.me/100076197234251?hash=AbaPTtmksjx2-fAJ&source=qr_link_share",
    icon: messengericon,
    btnIcon: <RiMessengerLine />,
    color: "rgb(139,74,251)",
  },
];
export const socialHandles = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/rodgo4k ",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/rodrigoprestes/",
  },
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    link: "https://fiverr.com/rodgo4k",
  },
];

export const testimonials = [
  {
    avatar: profile3,
    name: "Samuel Eze",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile4,
    name: "Emmanuel Joseph",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile5,
    name: "Gloria Chiwendu",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile6,
    name: "Precious Stone",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];
