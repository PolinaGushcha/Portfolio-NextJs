import { IEducationCards, IExperienceCard, ITechniquesOptions } from './types/data.types'

export const SECTIONIDS: string[] = ['greeting', 'experience', 'skills', 'works', 'contacts']

export const TECHNIC_TITLES: string[] = ['React', 'React Native', 'Next.js', 'Angular', 'React']

export const EXPERIENCE_CARDS: IExperienceCard[] = [
  {
    id: 1,
    name: 'GSU-AI',
    duration: 'June 2024 – present',
    description: [
      'On a project using microservice architecture, participated in the development of the overall structure of the application from the start',
      'I participate in the creation of basic functions, variables and components in the application core. ' +
        'I am involved in application navigation and ui development',
      'Responsible for the development of a mobile application. ' +
        'I rewrite web components for mobile ones, conduct onboarding and code reviews for new programmers on a React Native project'
    ],
    products: [{ id: 1, name: 'cooking-ai', description: 'app description', link: '' }],
    team: ['PM', 'GD']
  },
  {
    id: 2,
    name: 'Milestep',
    duration: 'February 2024 – June 2024',
    description: [
      'Web application on React for tracking logistics deliveries. ' +
        'Displayed a large amount of data using react-admin tables. I developed the front from scratch',
      'Communicating with the backend, developed the frontend client and admin sides of the application'
    ],
    products: [{ id: 1, name: 'Web application for optimizing logistics supplies', description: 'app description' }],
    team: ['PM', 'GD']
  },
  {
    id: 3,
    name: 'Taqtile',
    duration: 'September 2023 – April 2024',
    description: ['description'],
    products: [{ id: 1, name: 'logistic app', description: 'app description' }],
    team: ['PM', 'GD']
  }
]

export const EDUCATION_CARDS: IEducationCards[] = [
  {
    id: 1,
    name: 'Angular the rolling scope school course',
    description: 'description',
    date: 'date'
  },
  {
    id: 2,
    name: 'JavaScript and React course',
    description: 'description',
    date: 'date'
  },
  {
    id: 3,
    name: 'Website development with HTML, CSS & JS',
    description: 'description',
    date: 'date'
  },
  {
    id: 4,
    name: 'BSU',
    description: 'description',
    date: 'date'
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
