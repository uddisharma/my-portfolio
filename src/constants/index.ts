import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

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
  docker,
  carrent,
  jobit,
  nextjs,
  recoil,
  tripguide,
  hr,
  chatbot,
  object,
  mongoose,
  prisma,
  postgres,
  expressjs,
  redis,
  kafka,
  cloudflare,
  aws,
  notesphere,
  talksphere,
  // jest,
  cypress,
  cicd,
  hono,
  turbo,
  jenkins,
  graphql,
  kubernetes,
  exchange,
  rydehub
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'DevOps',
    icon: creator,
  },
  {
    title: 'Testing',
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: "TurboRepo",
    icon: turbo
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Recoil',
    icon: recoil,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Git',
    icon: git,
  },
  // {
  //   name: 'github',
  //   icon: github1,
  // },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Express JS',
    icon: expressjs,
  },
  {
    name: 'Redis',
    icon: redis,
  },
  {
    name: 'Kafka',
    icon: kafka,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },

  {
    name: 'postgreSQL',
    icon: postgres,
  },
  {
    name: 'Prisma',
    icon: prisma,
  },
  {
    name: 'Mongoose',
    icon: mongoose,
  },
  {
    name: 'Hono',
    icon: hono
  },

  {
    name: "GraphQL",
    icon: graphql
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'CI CD Pipeline',
    icon: cicd
  },
  {
    name: "Jenkins",
    icon: jenkins
  },
  {
    name: 'kubernetes',
    icon: kubernetes
  },

  {
    name: 'Cloudflare',
    icon: cloudflare,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  // {
  //   name: 'Jest',
  //   icon: jest
  // },
  {
    name: "Jest & Cypress",
    icon: cypress
  },


];

const experiences: TExperience[] = [
  {
    title: 'React JS Intern',
    companyName: 'VisionTrek Communication ( Mohali )',
    icon: web,
    iconBg: '#383E56',
    date: 'May 2022 - July 2023',
    points: [
      'Working on React JS based web applications.',
      'Acquired knowledge in backend concepts',
    ],
  },
  {
    title: 'Full Stack Engineer',
    companyName: 'Mits Digitech Pvt Ltd ( Panchkula )',
    icon: web,
    iconBg: '#383E56',
    date: 'July 2022 - August 2023',
    points: [
      'Developing and maintaining web applications using React.js, Next.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Full Stack Engineer',
    companyName: '1Doc Healthcare Pvt Ltd ( Rohtak )',
    icon: web,
    iconBg: '#E6DEDD',
    date: 'August 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Acquired knowledge in DevOps concepts',
      'Primarily focused on backend development.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'NoteSphere',
    description:
      'Created NoteSphere, a Notion-inspired note-taking application, featuring rich text editing, organization, collaboration, customization, and integration capabilities. Utilized Next.js for frontend development, Convex for backend and database management, Clerk for authentication, and deployed the application on Vercel.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'docker',
        color: 'green-text-gradient',
      },
      {
        name: 'CI CD',
        color: 'pink-text-gradient',
      },
      {
        name: 'Convex',
        color: 'blue-text-gradient',
      },
    ],
    image: notesphere,
    sourceCodeLink: 'https://github.com/uddisharma/notion-clone',
    live: 'https://1notesphere.vercel.app/',
  },

  {
    name: 'TalkSphere',
    description:
      'Developed TalkSphere, a platform inspired by Discord, offering real-time chat, channels, guilds, voice and video chat functionalities. Leveraged Next.js for frontend and backend development, Prisma for ORM, Clerk for authentication, PostgreSQL for the database, Socket.io for chat, livekit for audio and video calls, and deployed on Vercel.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'docker',
        color: 'green-text-gradient',
      },
      {
        name: 'CI CD',
        color: 'pink-text-gradient',
      },
      {
        name: 'Prisma',
        color: 'blue-text-gradient',
      },
    ],
    image: talksphere,
    sourceCodeLink: 'https://github.com/uddisharma/talksphere',
    live: 'https://1talksphere.vercel.app/',
  },

  {
    name: 'Crypto Exchange',
    description:
      'I developed a crypto exchange application using Binance API, allowing users to securely trade a wide range of cryptocurrencies. The platform features real-time market data and an intuitive user interface designed for both novice and experienced traders. With seamless API integration, the application ensures fast, reliable, and accurate execution of trades.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'TurboRepo',
        color: 'green-text-gradient',
      },
      {
        name: 'Vercel',
        color: 'pink-text-gradient',
      },

    ],
    image: exchange,
    sourceCodeLink: 'https://github.com/uddisharma/exchange',
    live: 'https://exchange-nine-blue.vercel.app/',
  },
  {
    name: 'Rydehub',
    description:
      "I'm developing an Uber-like application using microservices architecture to enhance scalability. By breaking down features like user management, ride matching, driver app , location updater and payments into independent services, the app can efficiently handle high traffic, improve performance, and allow for seamless scaling and maintenance.",
    tags: [
      {
        name: 'TurboRepo',
        color: 'blue-text-gradient',
      },
      {
        name: 'Micro services',
        color: 'green-text-gradient',
      },


    ],
    image: rydehub,
    sourceCodeLink: 'https://github.com/uddisharma/rydehub',
    live: 'https://github.com/uddisharma/rydehub',
  },

  {
    name: 'MediumCart',
    description:
      'Developed a scalable  multivendor ecommerce platform, facilitating multiple sellers to showcase and sell their products. Implemented features including seller onboarding, product management, order processing, and payment integration. Utilized technologies such as Next.js and Node.js  ensuring a seamless shopping experience for customers and sellers',
    tags: [
      {
        name: 'MERN',
        color: 'blue-text-gradient',
      },
      {
        name: 'docker',
        color: 'green-text-gradient',
      },
      {
        name: 'bullmq',
        color: 'pink-text-gradient',
      },
      {
        name: 'AWS S3',
        color: 'blue-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: '#',
    live: '#',
  },

  {
    name: 'Admin & Seller Dashboard',
    description:
      'Admin and Seller dashboard for the multivendor platform provides a centralized hub for managing all aspects of the marketplace. From overseeing orders and payments to monitoring vendor performance and managing product listings, the admin dashboard offers powerful tools for maintaining a smooth and efficient operation.',
    tags: [
      {
        name: 'MERN',
        color: 'blue-text-gradient',
      },
      {
        name: 'docker',
        color: 'green-text-gradient',
      },
      {
        name: 'razorpay',
        color: 'pink-text-gradient',
      },
      {
        name: 'EC2',
        color: 'blue-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: '#',
    live: '#',
  },

  {
    name: 'Social Media App with Messaging Service',
    description:
      'Social media app that offers a comprehensive suite of features, including messaging capabilities, photo sharing, liking, commenting, and more. Users can connect with friends, family, and communities, sharing moments and engaging with content in a dynamic.',
    tags: [
      {
        name: 'reactJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'expressJs',
        color: 'green-text-gradient',
      },
      {
        name: 'mongoDb',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/uddisharma/fullstacksocialmedia',
    live: '#',
  },

  {
    name: 'HR Software',
    description:
      'I developed a  HR software solution to streamline HR processes, including employee management, payroll, leave management. Utilized technologies such as Next.js and Node.js, and MongoDB for the database, ensuring scalability and efficiency. Implemented features to automate repetitive tasks, improve data accuracy, and enhance overall HR management efficiency.',
    tags: [
      {
        name: 'nextJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'expressJs',
        color: 'green-text-gradient',
      },
      {
        name: 'mongoDb',
        color: 'pink-text-gradient',
      },
    ],
    image: hr,
    sourceCodeLink: '#',
    live: '#',
  },

  {
    name: 'AI Chat-Bot',
    description:
      'An AI Chat Bot is a tool that simulates human conversation through text interactions. It uses artificial intelligence (AI) modals of hugging face to understand and respond to user inputs, providing information, answering questions.  Used in customer service, healthcare, education, and many other fields. Also we can use it as a personal assistant.',
    tags: [
      {
        name: 'nextJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'huggingface',
        color: 'green-text-gradient',
      },
      {
        name: 'gen AI',
        color: 'pink-text-gradient',
      },
    ],
    image: chatbot,
    sourceCodeLink: 'https://github.com/uddisharma/chat-bot',
    live: 'https://chat-bot-77.vercel.app/',
  },

  {
    name: 'AI Object Detection',
    description:
      'AI object detection is a computer vision technology that involves using artificial intelligence algorithms to identify and locate objects within an image or video. It works by analyzing the visual patterns and features of an input image or video frame to detect the presence and location of objects of interest.',
    tags: [
      {
        name: 'nextJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tensorflow',
        color: 'green-text-gradient',
      },
      {
        name: 'gen AI',
        color: 'pink-text-gradient',
      },
    ],
    image: object,
    sourceCodeLink: 'https://github.com/uddisharma/object-detection',
    live: 'https://object-detector-77.vercel.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
