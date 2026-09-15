import CinemaBookingImage from '@images/cinema-app.png'
import CoincapImage from '@images/coincap-app.png'
import CookingAIImage from '@images/cooking-ai-app.png'
import EnglishCardsImage from '@images/english-cards-app.png'
import IrregularVerbsImage from '@images/irregular-verbs-app.png'
import PinterestImage from '@images/pinterest-app.png'
import PlantsImage from '@images/plants-app.png'
import PomodoroImage from '@images/pomodoro-app.png'
import PortfolioImage from '@images/portfolio-app.png'
import PostureImage from '@images/posture-app.png'
import SpeechScribeImage from '@images/speechscribe-audio-app.png'
import TaskManagerImage from '@images/task-manager-app.png'
import TrainTicketsImage from '@images/train-tickets-app.png'
import YoutubeClientImage from '@images/youtube-client-app.png'

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
      'networking, storage, databases, security, monitoring, and cloud economics, including EC2, Lambda, S3, RDS, IAM, and CloudWatch. ' +
      'This gives me a working understanding of the infrastructure behind the apps I build, so I can reason about deployment, ' +
      'environment configuration, and backend integrations rather than treating the cloud as a black box.',
    date: '2026'
  },
  {
    id: 1,
    name: 'Angular the rolling scope school course',
    organization: 'RS school',
    organizationLink: 'https://rs.school/',
    certificateLink: 'https://app.rs.school/certificate/d3d024a3',
    description:
      'An 12-week, project-based Angular course for developers with a solid JavaScript/TypeScript foundation, requiring 30-40 hours ' +
      'of study per week and covering Angular Material, RxJS, and NgRx. Graduated in the top 5% of all students. ' +
      'It sharpened my grasp of reactive state management and object-oriented programming, which I now use in both my React and Angular projects.',
    date: 'date'
  },
  {
    id: 2,
    name: 'JavaScript and React course',
    organization: 'TeachMeSkills',
    organizationLink: 'https://teachmeskills.by/',
    certificateLink: 'https://drive.google.com/file/d/1_eCjKxE3ahGqSZjoMzH9SE7Ab8oYkpDQ/view',
    description:
      'An 8-month, hands-on course covering modern JavaScript, TypeScript, Webpack, and the React ecosystem, culminating in several ' +
      'single-page applications built from scratch. This is where my React foundation was formed — the component design and ' +
      'build-tooling instincts from this course are still the base I build on in every React and Next.js project I work on today.',
    date: 'date'
  },
  {
    id: 3,
    name: 'Website development with HTML, CSS & JS',
    organizationLink: 'https://www.it-academy.by/',
    certificateLink: '',
    organization: 'IT-Academy',
    description:
      'A foundational course at IT-Academy (Educational Center for Programming and High Technologies) covering semantic HTML, ' +
      'CSS layout, and core JavaScript. It gave me the fundamentals I rely on daily for writing clean, accessible markup and ' +
      'debugging layout issues without depending on frameworks or libraries to do the thinking for me.',
    date: 'date'
  },
  {
    id: 4,
    name: 'Bachelor of Economic Informatics',
    organization: 'BSU faculty of economics',
    organizationLink: 'https://bsu.by/',
    description:
      'A degree combining IT with project management, business analysis, reengineering and economics. ' +
      'This background helps me see features in terms of business impact - I can talk through trade-offs with PMs and stakeholders, ' +
      'estimate work realistically, and prioritize what actually moves a product forward, not just what is technically interesting.',
    date: '2019-2023'
  }
]

export const TECHNIQUES_OPTIONS: ITechniquesOptions[] = [
  { id: 1, value: 'html&css', name: 'HTML & CSS website layout' },
  { id: 2, value: 'react', name: 'React' },
  { id: 3, value: 'nextjs', name: 'Next.js' },
  { id: 4, value: 'reactnative', name: 'React Native' },
  { id: 5, value: 'nodejs', name: 'Node.js' },
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
  'AWS',
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
        title: 'Plants | Pixel Perfect landing page',
        description:
          'Pixel-perfect landing page for a plant care and gardening service from a Figma design. ' +
          'Focused on precise HTML and CSS implementation to match spacing, typography, and layout exactly,' +
          ' then deployed the responsive site live on Vercel.',
        link: 'https://pixel-perfect-plants.vercel.app/',
        figmaLink: 'https://www.figma.com/design/ntVt8IwlwzfVFMBuVVAze8/Plants?node-id=0-1&t=seb2KnaFjyvSUm9T-1',
        image: PlantsImage
      },
      {
        id: 2,
        title: 'Pomodoro Dashboard - Timer, Weather, Music & Tasks',
        description:
          'A feature-rich Pomodoro timer app built from scratch with vanilla JavaScript, HTML5, and SCSS —' +
          ' no frameworks, no libraries. The goal was to go beyond a basic countdown and create a complete ' +
          '"focus environment" that combines time management with ambient productivity tools.',
        link: 'https://polinagushcha.github.io/Simple-Pomodoro-App/',
        image: PomodoroImage
      }
    ]
  },
  {
    tech: 'React',
    cards: [
      {
        id: 1,
        title: 'Cooking AI — AI-powered recipe generation app',
        description:
          'AI-powered recipe generation app built at Alivio-AI. Contributed to the app architecture ' +
          'from the ground up — core components, navigation, and UI across a microservice setup — and ' +
          'later adapted the same components into a React Native mobile version.',
        link: 'https://cooking.alivio.ai/',
        image: CookingAIImage
      },
      {
        id: 2,
        title: 'CoinCap React — Cryptocurrency Tracker',
        description:
          'A single-page application built with React and TypeScript that consumes the CoinCap public' +
          ' REST API to display live cryptocurrency market data. Users can browse a paginated list of assets,' +
          ' drill into individual coins to see price history charts, and manage a personal "portfolio" of holdings' +
          ' with live total-value calculations.',
        link: 'https://coincap-react-bnu0s6gnh-polinagushchas-projects.vercel.app/Coincap-React?page=1',
        image: CoincapImage
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
          'English grammar learning app published on the Apple App Store. Built with React Native at ' +
          'Taqtile, with interactive verb drills, progress tracking, and a redesigned onboarding flow.',
        link: 'https://apps.apple.com/us/app/english-verbs-learn-grammar/id1638688704',
        image: IrregularVerbsImage
      },
      {
        id: 2,
        title: 'Posture',
        description:
          'Health and posture monitoring mobile app available on Google Play. Refactored from Ionic to ' +
          'React Native at Taqtile, integrating MediaPipe for real-time spine curvature analysis.',
        link: 'https://play.google.com/store/apps/details?id=io.ionic.posture&hl=en_US&pli=1',
        image: PostureImage
      },
      {
        id: 3,
        title: 'Pinterest Clone',
        description:
          'A cross-platform mobile app cloning core Pinterest functionality, built with React Native' +
          ' and Expo SDK 57. Features include a browsable image feed with search, pin detail views,' +
          ' image upload/picking, and tab-based navigation',
        link: 'https://github.com/PolinaGushcha/PinterestClone-ReactNative-Expo',
        image: PinterestImage
      },
      {
        id: 4,
        title: 'English Cards',
        description:
          'English Cards — a mobile app (React Native, iOS/Android) for learning English vocabulary' +
          ' through flashcards and mini-games (matching pairs, word completion, spelling,' +
          ' fill-in-the-blank, tests), with AI-assisted features, favourites, subscriptions, and' +
          ' daily "word of the day" reminders.',
        link: 'https://play.google.com/store/apps/details?id=com.englishingames.englishcards&hl=en',
        image: EnglishCardsImage
      }
    ]
  },
  {
    tech: 'Next.js',
    cards: [
      {
        id: 1,
        title: 'SpeechScribe Audio',
        description:
          'Chrome extension for automatic audio-to-text transcription, developed in Next.js at Taqtile. ' +
          'Connects a Transformers.js speech model and supports user authentication and subscriptions.',
        link: 'https://chromewebstore.google.com/detail/' + 'speechscribe-audio-z-d%C5%BAwi/gijnkelbkbmaekkkgoalpimggbmoahol?hl=pl',
        image: SpeechScribeImage
      },
      {
        id: 2,
        title: 'Portfolio (Next.js)',
        description:
          'This portfolio itself, powered by Next.js — using the App Router, server components, and a ' +
          'serverless email API to deliver a fast, SEO-friendly showcase of my work.',
        image: PortfolioImage
      }
    ]
  },
  {
    tech: 'Angular',
    cards: [
      {
        id: 1,
        title: 'Youtube Client app',
        description:
          'A single-page video browsing application inspired by YouTube, built with Angular 18 and ' +
          'Angular Material. Implements user registration / login, a favorites system, video card creation, ' +
          'and pagination, using NgRx for centralized state management and RxJS for reactive data flows. ' +
          'Covered by unit tests (Jest) with a CI-ready test suite.',
        image: YoutubeClientImage,
        link: 'https://polinagushcha.github.io/Youtube-app/'
      },
      {
        id: 2,
        title: 'Train Tickets app',
        description:
          'Angular 18 SPA for searching, booking, and managing train tickets, with dedicated user and admin dashboards.' +
          'The manager and the root administrator can enter the system with: email: admin@admin.com | password: my-password ' +
          'The ‘user’ role is assigned automatically; no further action is required.',
        link: 'https://train-a-app.netlify.app/home',
        image: TrainTicketsImage
      }
    ]
  },
  {
    tech: 'Node.js',
    cards: [
      {
        id: 1,
        title: 'Task Manager',
        description:
          'A full-stack task planner built on the MERN stack (MongoDB, Express, React, Node.js),' +
          ' designed and shipped end-to-end — from data model to deployed containers on AWS EC2. React SPA for' +
          ' managing tasks and projects. Features include task creation, assignment, status tracking, and' +
          ' a Kanban-style board for visualizing workflow.',
        link: 'https://main.dkc52pnqxg4rx.amplifyapp.com/',
        image: TaskManagerImage
      },
      {
        id: 2,
        title: 'Cinema Booking',
        description:
          'Full-stack cinema seat-booking web application with a React/TypeScript frontend and a' +
          ' Node.js/Express REST API, backed by Cassandra DB. Fully containerized with Docker Compose,' +
          ' including an automated init job for replica' +
          ' set setup and database seeding (cities, films, cinemas, timeslots, ~40k seat documents).',
        image: CinemaBookingImage
      }
    ]
  }
]
