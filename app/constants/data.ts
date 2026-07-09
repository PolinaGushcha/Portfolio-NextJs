import CookingAIImage from '@images/cooking-ai-app.png'
import IrregularVerbsImage from '@images/irregular-verbs-app.png'
import PlantsImage from '@images/plants-app.png'
import PortfolioImage from '@images/portfolio-app.png'
import SpeechScribeImage from '@images/speechscribe-audio-app.png'
import TaskManagerImage from '@images/task-manager-app.png'

// import CoincapImage from '@images/coincap-app.png'
import { IEducationCards, IExperienceCard, ITechniquesOptions, IWorkSection } from './types/data.types'

export const SECTIONIDS: string[] = ['greeting', 'experience', 'skills', 'ai', 'works', 'contacts']

export const TECHNIC_TITLES: string[] = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Angular', 'Node.js', 'MongoDB']

export const EXPERIENCE_CARDS: IExperienceCard[] = [
  {
    id: 0,
    name: 'Blockchain Labs Team',
    link: 'https://www.linkedin.com/company/blockchain-labs-team/',
    duration: 'september 2025 – present',
    description:
      'Developing frontend for a web application (partner/CPA platform with registration, authentication, profiles, and' +
      ' newsletters) using React PWA and TypeScript stack. Contributing to PWA CRA React app implementation: forms, UI' +
      ' components, API integrations, newsletter creation, and 2FA/SMS/email authentication. Focus on security, statement' +
      ' editing/creation, and animated landing page development.',
    responsibilities: [
      'Creating reusable UI React components with MUI',
      'Integrated HTTP client and interceptors for authentication, centralized error handling, and retry logic. Used' +
        ' react-hook-form and form validation, error handling and localization.',
      'Animated landing page using GSAP.',
      'Developing cross-browser email newsletters.'
    ],
    team: ['1 TL', '1 UX/UI', '1 FE', '1BE', '1 BA', '1 SA', '1 PM', '1 QA', '1 InfoSec', '1 DevOps']
  },
  {
    id: 1,
    name: 'Volt X',
    link: 'https://www.yourvoltx.com/',
    duration: 'August 2024 – December 2025',
    description:
      'I specialize in building scalable and reliable interfaces for ERP, CRM, MES, HCM systems using Next.js, TypeScript,' +
      ' React, Ant Design, and other modern frontend tools. My experience covers the full spectrum of UI development — from' +
      ' architectural design to implementing business logic and integrating with backend APIs (REST / Supabase / Firebase).',
    responsibilities: [
      'My role in the project involves handling architectural decisions (we use either a microservice or atomic application architecture)',
      'Managing the processing of imported and exported files within the system — specifically, validating imported files' +
        ' according to required system formats, storing projects, and displaying them in tables. I’m also responsible for table' +
        ' analytics presented as charts.',
      'Optimize performance, SSR, and routing in Next.js applications',
      'Set up authentication (Google, Microsoft, Supabase Auth, etc.)',
      'Develop tables, forms, filters, and navigation in large-scale interfaces'
    ],
    team: ['1 SA', '1 TL', '1 UX/UI', '1 FE', '2 BE', '2 ML']
  },
  {
    id: 2,
    name: 'Alivio-AI',
    link: 'https://www.alivio.ai/',
    duration: 'June 2024 – January 2025',
    description:
      'Worked on two AI-powered products — a travel management platform (Angular) and a web & mobile recipe generation app (React / React Native).' +
      ' The cooking-ai mobile application built with React Native fully replicates the web version developed in React' +
      ' The travel-ai application provides role-based access and ensures secure authentication',
    responsibilities: [
      'Divided applications into modules, implemented authorization and routing',
      'Integrated APIs with filtering and grouping of data',
      'Built microservice architecture from scratch',
      'Developed mobile application in React Native, adapting web components for mobile',
      'Conducted onboarding and code reviews for new developers'
    ],
    team: ['1 PO', '1 TL', '1 PM', '1 BA', '2 UX/UI', '2 FE', '3 BE', '3 QA'],
    products: [{ id: 1, name: 'cooking-ai React app', link: 'https://cooking.alivio.ai/' }]
  },
  {
    id: 3,
    name: 'Milestep',
    link: 'https://milestep.io/',
    duration: 'February 2024 – June 2024',
    description:
      'A web application for tracking, sorting, and shipping warehouse supplies. The app included a table with all products from ' +
      'suppliers, along with full delivery information and s`tatus. Users with different access levels had to update box statuses by ' +
      'recording the required data at each stage. The final stage triggered the process of sending a set of boxes to sellers.',
    responsibilities: [
      'Web application on React for tracking logistics deliveries. Displayed a large amount of data using react-admin tables.' +
        ' I developed the front from scratch',
      'Communicating with the backend, developed the frontend client and admin sides of the application.'
    ],
    team: ['1 PO', '1 TL', '1 BA', '1 FE', '2 BE', '1 QA']
  },
  {
    id: 4,
    name: 'Taqtile',
    link: 'https://taqtile.com/',
    duration: 'September 2023 – April 2024',
    description:
      'Contributed to five web and mobile products built with React, React Native, and Next.js. Work spanned AI-powered wellness and posture' +
      'tracking apps with ML integration, a Chrome extension for audio transcription, and two English learning apps with gamification' +
      'and subscription features.',
    responsibilities: [
      'Designed user interfaces for web and mobile applications, enhancing their functionality and usability.',
      'Implemented and optimised complex forms, animations and navigation to improve the UX/UI.',
      'Integrated Google Firebase, company databases and SEO optimisation.',
      'Debugged and improved application stability, ensuring high product quality and performance.'
    ],
    products: [
      {
        id: 0,
        name: '"SpeechScribe audio" chrome extension in Next.js',
        link: 'https://chromewebstore.google.com/detail/speechscribe-audio-z-d%C5%BAwi/gijnkelbkbmaekkkgoalpimggbmoahol?hl=pl'
      },
      { id: 1, name: '"Irregular verbs" React Native app', link: 'https://apps.apple.com/us/app/english-verbs-learn-grammar/id1638688704' },
      { id: 2, name: '"Posture" Ionic app', link: 'https://play.google.com/store/apps/details?id=io.ionic.posture&hl=en_US&pli=1' }
    ],
    team: ['1 PM', '1 UX/UI', '3 FE', '2 BE', '1 QA', '1 DevOps']
  }
]

export const EDUCATION_CARDS: IEducationCards[] = [
  {
    id: 0,
    name: 'AWS Cloud Practitioner',
    organization: 'AWS',
    organizationLink: 'https://bsu.by/',
    certificateLink: '',
    description:
      'Completed the AWS Cloud Practitioner Essentials course, covering core cloud concepts, AWS global infrastructure, compute, ' +
      'networking, storage, databases, security, monitoring, and cloud economics. Gained practical understanding of key AWS services including ' +
      'EC2, Lambda, S3, RDS, IAM, and CloudWatch, as well as cloud migration strategies and the Well-Architected Framework.',
    date: '2026'
  },
  {
    id: 1,
    name: 'Angular the rolling scope school course',
    organization: 'RS school',
    organizationLink: 'https://rs.school/',
    certificateLink: 'https://app.rs.school/certificate/d3d024a3',
    description:
      'This course is designed for individuals with a solid foundation in JavaScript, TypeScript, and front-end development. ' +
      'The course lasts 11 weeks, requiring approximately 20-40 hours of study per week. ' +
      'At the end of the course, she was in the top 5% of all students in terms of academic achievement',
    date: 'date'
  },
  {
    id: 2,
    name: 'JavaScript and React course',
    organization: 'TeachMeSkills',
    organizationLink: 'https://teachmeskills.by/',
    certificateLink: 'https://drive.google.com/file/d/1_eCjKxE3ahGqSZjoMzH9SE7Ab8oYkpDQ/view',
    description:
      'On this 7-month course I learned how to work with webpack and React library. Also I was introduced to ' +
      'Typescript. Developed a couple of SPA applications using these technologies',
    date: 'date'
  },
  {
    id: 3,
    name: 'Website development with HTML, CSS & JS',
    organizationLink: 'https://www.it-academy.by/',
    certificateLink: '',
    organization: 'IT-Academy',
    description:
      'In IT-Academy (brand of the Educational Center for Programming and High Technologies) on the course HTML, CSS & JavaScript the basics of ' +
      'creating websites and programming in general were studied. The theory of the mentioned technologies was studied to a greater extent',
    date: 'date'
  },
  {
    id: 4,
    name: 'Bachelor of Economic Informatics',
    organization: 'BSU faculty of economics',
    organizationLink: 'https://bsu.by/',
    description: 'it includes general knowledge of project management, business analysis, reengineering, marketing and economics',
    date: '2019-2023'
  }
]

export const TECHNIQUES_OPTIONS: ITechniquesOptions[] = [
  { id: 1, value: 'html&css', name: 'HTML & CSS website layout' },
  { id: 2, value: 'react', name: 'React' },
  { id: 3, value: 'nextjs', name: 'Next.js' },
  { id: 4, value: 'reactnative', name: 'React Native' },
  { id: 5, value: 'ionic', name: 'Ionic' },
  { id: 6, value: 'angular', name: 'Angular' },
  { id: 7, value: 'other', name: 'Other' }
]

export const SKILLS_LIST: string[] = [
  'HTML, CSS',
  'SCSS',
  'Tailwind',
  'JavaScript',
  'React',
  'Redux',
  'MobX',
  'React Admin',
  'Next.js',
  'Framer Motion',
  'Gsap',
  'React Native',
  'Ionic',
  'Angular',
  'Node.js',
  'TypeScript'
]

export const DELAY_TIME: number = 3000

export const WORKS_CARDS: IWorkSection[] = [
  {
    tech: 'HTML & CSS',
    cards: [
      {
        id: 1,
        title: 'Plants SPA',
        description:
          'AI-powered recipe generation SPA built at GSU-AI. Participated in app architecture ' +
          'from the ground up — core components, navigation, and UI across a microservice setup.',
        link: 'https://pixel-perfect-plants.vercel.app/',
        image: PlantsImage
      }
    ]
  },
  {
    tech: 'React',
    cards: [
      {
        id: 1,
        title: 'Cooking AI',
        description:
          'AI-powered recipe generation SPA built at GSU-AI. Participated in app architecture ' +
          'from the ground up — core components, navigation, and UI across a microservice setup.',
        link: 'https://cooking.alivio.ai/',
        image: CookingAIImage
      },
      {
        id: 2,
        title: 'Coincap',
        description:
          'React & React-Admin web app for real-time tracking of logistics deliveries at Milestep. ' +
          'Built the full frontend from scratch, covering both client and admin sides.',
        link: 'https://milestep.io/'
      },
      {
        id: 3,
        title: 'Task Manager',
        description:
          'React SPA for managing tasks and projects. Features include task creation, assignment, ' +
          'status tracking, and a Kanban-style board for visualizing workflow. Implemented with React, ' +
          'Redux, and Material-UI.',
        link: 'https://main.dkc52pnqxg4rx.amplifyapp.com/',
        image: TaskManagerImage
      }
    ]
  },
  {
    tech: 'React Native',
    cards: [
      {
        id: 1,
        title: 'Irregular Verbs',
        description:
          'English grammar learning app published on the Apple App Store. Features interactive ' +
          'verb drills and progress tracking built with React Native at Taqtile.',
        link: 'https://apps.apple.com/us/app/english-verbs-learn-grammar/id1638688704',
        image: IrregularVerbsImage
      },
      {
        id: 2,
        title: 'Posture',
        description:
          'Health & posture monitoring mobile app available on Google Play. Developed within the ' +
          'Ionic + React Native stack at Taqtile, with Firebase integration for user data.',
        link: 'https://play.google.com/store/apps/details?id=io.ionic.posture&hl=en_US&pli=1'
      }
    ]
  },
  {
    tech: 'Next.js',
    cards: [
      {
        id: 1,
        title: 'HealthUApp',
        description:
          'Health & wellness platform built with Next.js at Taqtile. Implemented complex forms, ' +
          'animations, SEO optimisation, and Firebase integration for a production health product.',
        link: 'https://healthuapp.com/'
      },
      {
        id: 2,
        title: 'SpeechScribe Audio',
        description:
          'Chrome extension for audio transcription developed in Next.js at Taqtile. ' +
          'Handles real-time speech recognition and published to the Chrome Web Store.',
        link: 'https://chromewebstore.google.com/detail/' + 'speechscribe-audio-z-d%C5%BAwi/gijnkelbkbmaekkkgoalpimggbmoahol?hl=pl',
        image: SpeechScribeImage
      },
      {
        id: 3,
        title: 'Portfolio (Next.js)',
        description:
          'This portfolio is powered by Next.js — leveraging the App Router, server components, ' +
          'and a serverless email API to deliver a fast, SEO-friendly developer showcase.',
        image: PortfolioImage
      }
    ]
  },
  {
    tech: 'Angular',
    cards: [
      {
        id: 1,
        title: 'RS School Angular Project',
        description:
          'Capstone project for the RSSchool Angular course. Finished in the top 5% of all students, ' +
          'covering advanced RxJS, NgRx state management, lazy loading, and unit testing.',
        link: 'https://app.rs.school/certificate/d3d024a3'
      },
      {
        id: 2,
        title: 'Admin Dashboard (Angular)',
        description:
          'Feature-rich data management dashboard built with Angular and Angular Material. ' +
          'Includes role-based routing, reactive forms with validation, and REST API communication.'
      },
      {
        id: 3,
        title: 'E-commerce Storefront',
        description:
          'Angular SPA for an online storefront with a product catalogue, cart management, and ' +
          'checkout flow. Optimised with OnPush change detection and lazy-loaded modules.'
      }
    ]
  },
  {
    tech: 'Node.js',
    cards: [
      {
        id: 1,
        title: 'Serverless Email API',
        description:
          'Node.js serverless function (Next.js API route) powering the contact form on this ' +
          'portfolio. Validates input and sends email via Nodemailer with environment-based config.'
      },
      {
        id: 2,
        title: 'REST API Boilerplate',
        description:
          'Express + TypeScript REST API with JWT authentication, request validation via Zod, ' +
          'and Prisma ORM. Designed as a reusable backend starter for full-stack projects.'
      },
      {
        id: 3,
        title: 'Real-time Chat Server',
        description:
          'WebSocket chat server built with Node.js and Socket.IO. Supports multiple rooms, ' +
          'typing indicators, and message history stored in a lightweight SQLite database.'
      }
    ]
  }
]
