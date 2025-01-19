import { IEducationCards, IExperienceCard, ITechniquesOptions } from './types/data.types'

export const SECTIONIDS: string[] = ['greeting', 'experience', 'skills', 'works', 'contacts']

export const TECHNIC_TITLES: string[] = ['React', 'React Native', 'Next.js', 'Angular', 'React']

export const EXPERIENCE_CARDS: IExperienceCard[] = [
  {
    id: 1,
    name: 'GSU-AI',
    link: 'https://cooking.alivio.ai/',
    duration: 'June 2024 – present',
    description: [
      'On a project using microservice architecture, participated in the development of the overall structure of the application from the start. ',
      'I participate in the creation of basic functions, variables and components in the application core. ',
      'I am involved in application navigation and ui development',
      'Responsible for the development of a mobile application. ',
      'I rewrite web components for mobile ones, conduct onboarding and code reviews for new programmers on a React Native project'
    ],
    products: [
      {
        id: 1,
        name: '"cooking-ai" React app',
        link: 'https://cooking.alivio.ai/'
      }
    ],
    team: ['PM', 'GD']
  },
  {
    id: 2,
    name: 'Milestep',
    link: 'https://milestep.io/',
    duration: 'February 2024 – June 2024',
    description: [
      'Web application on React for tracking logistics deliveries. ',
      'Displayed a large amount of data using react-admin tables. I developed the front from scratch. ',
      'Communicating with the backend, developed the frontend client and admin sides of the application'
    ],
    products: [{ id: 1, name: 'Web application for optimizing logistics supplies in React-Admin' }],
    team: ['PM', 'GD']
  },
  {
    id: 3,
    name: 'Taqtile',
    link: 'https://taqtile.com/',
    duration: 'September 2023 – April 2024',
    description: [
      'Разрабатывала пользовательские интерфейсы для веб и мобильных приложений, улучшая их функциональность и удобство. ',
      'Реализовывала и оптимизировала сложные формы, анимации и навигацию для улучшения UX/UI. Интегрировала Google Firebase, базы данных компании',
      ' и SEO-оптимизацию. Исправляла ошибки и повышала стабильность приложений, обеспечивая высокое качество и производительность продуктов.'
    ],
    products: [
      { id: 1, name: '"HealthUApp" Next.js app', link: 'https://healthuapp.com/' },
      {
        id: 2,
        name: '"SpeechScribe audio" chrome extension in Next.js',
        link: 'https://chromewebstore.google.com/detail/speechscribe-audio-z-d%C5%BAwi/gijnkelbkbmaekkkgoalpimggbmoahol?hl=pl'
      },
      { id: 3, name: '"Irregular verbs" React Native app', link: 'https://apps.apple.com/us/app/english-verbs-learn-grammar/id1638688704' },
      { id: 4, name: '"Posture" Ionic app', link: 'https://play.google.com/store/apps/details?id=io.ionic.posture&hl=en_US&pli=1' }
    ],
    team: ['PM', 'GD']
  }
]

export const EDUCATION_CARDS: IEducationCards[] = [
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
    certificateLink: '',
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
  'SCSS & SASS',
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
  'Angular'
]

export const DELAY_TIME: number = 3000
