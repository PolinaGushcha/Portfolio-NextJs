const P_BOLT = 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'

const P_BULB =
  'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189' +
  'm3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0' +
  'M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0' +
  'c.85.493 1.509 1.333 1.509 2.316V18'

const P_CODE =
  'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6' +
  'a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z'

const P_GRAD =
  'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904' +
  'a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0' +
  'a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84' +
  'c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489' +
  'a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5' +
  'zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55' +
  'A5.981 5.981 0 006.75 15.75v-1.5'

const P_CLOCK = 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'

const P_SHIELD =
  'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6' +
  ' 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623' +
  ' 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152' +
  'c-3.196 0-6.1-1.248-8.25-3.285z'

const P_MONEY =
  'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75' +
  'M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25' +
  'M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375' +
  'c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375' +
  'm1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375' +
  'a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75' +
  'M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'

const P_CHAT =
  'M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193' +
  '-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163' +
  'a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095' +
  ' 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286' +
  'c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235' +
  'A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402' +
  '-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235' +
  '.577.075 1.157.14 1.74.194V21l4.155-4.155'

const TerminalIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.8} width={20} height={20}>
    <polyline points='4 17 10 11 4 5' />
    <line x1='12' y1='19' x2='20' y2='19' />
  </svg>
)

const ChatBubbleIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.8} width={20} height={20}>
    <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
  </svg>
)

const CodeBracketsIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.8} width={20} height={20}>
    <polyline points='16 18 22 12 16 6' />
    <polyline points='8 6 2 12 8 18' />
  </svg>
)

const TriangleIcon = () => (
  <svg viewBox='0 0 24 24' fill='currentColor' width={20} height={20}>
    <path d='M12 3L2 21h20L12 3z' />
  </svg>
)

const SearchPlusIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.8} width={20} height={20}>
    <circle cx='11' cy='11' r='8' />
    <line x1='21' y1='21' x2='16.65' y2='16.65' />
    <line x1='11' y1='8' x2='11' y2='14' />
    <line x1='8' y1='11' x2='14' y2='11' />
  </svg>
)

const WorkflowIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.8} width={20} height={20}>
    <circle cx='18' cy='5' r='3' />
    <circle cx='6' cy='12' r='3' />
    <circle cx='18' cy='19' r='3' />
    <polyline points='8.59 13.51 15.42 17.49' />
    <polyline points='15.41 6.51 8.59 10.49' />
  </svg>
)

export const AI_TOOLS = [
  { id: 1, name: 'Claude Code', icon: <TerminalIcon />, color: '#D4722A' },
  { id: 2, name: 'ChatGPT', icon: <ChatBubbleIcon />, color: '#10A37F' },
  { id: 4, name: 'Cursor', icon: <CodeBracketsIcon />, color: '#8B5CF6' },
  { id: 5, name: 'v0.dev', icon: <TriangleIcon />, color: '#E2E8F0' },
  { id: 6, name: 'Perplexity', icon: <SearchPlusIcon />, color: '#5436DA' },
  { id: 7, name: 'n8n', icon: <WorkflowIcon />, color: '#EA4B71' }
]

const Icon = ({ d }: { d: string }) => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5}>
    <path strokeLinecap='round' strokeLinejoin='round' d={d} />
  </svg>
)

export const MY_BENEFITS = [
  {
    id: 1,
    icon: <Icon d={P_BOLT} />,
    title: 'Faster development',
    description: 'AI cuts boilerplate, scaffolds components, and autocompletes patterns' + ' — so I spend my time on logic that actually matters.'
  },
  {
    id: 2,
    icon: <Icon d={P_BULB} />,
    title: 'Sharper problem-solving',
    description:
      'Using AI as a thinking partner helps me explore multiple approaches before' + ' committing to a solution — catching edge cases early.'
  },
  {
    id: 3,
    icon: <Icon d={P_CODE} />,
    title: 'Cleaner code',
    description:
      'AI-assisted reviews surface naming issues, missing edge cases, and refactoring' + ' opportunities I might have skimmed past on a deadline.'
  },
  {
    id: 4,
    icon: <Icon d={P_GRAD} />,
    title: 'Continuous learning',
    description: 'New frameworks and APIs land faster than ever. AI lets me onboard to unfamiliar' + ' tech in hours, not days.'
  }
]

export const CLIENT_BENEFITS = [
  {
    id: 1,
    icon: <Icon d={P_CLOCK} />,
    title: 'Shorter timelines',
    description:
      'Features that used to take a week ship in days. My AI-enhanced workflow directly' + ' translates into faster deliverables for clients.'
  },
  {
    id: 2,
    icon: <Icon d={P_SHIELD} />,
    title: 'Higher quality',
    description: 'AI-assisted testing strategies and automated code reviews mean fewer bugs reaching' + ' production and a more robust final product.'
  },
  {
    id: 3,
    icon: <Icon d={P_MONEY} />,
    title: 'Better value',
    description:
      "Time saved on repetitive tasks is reinvested into the product's UX, architecture," + ' and performance — you get more for the same budget.'
  },
  {
    id: 4,
    icon: <Icon d={P_CHAT} />,
    title: 'Creative results',
    description:
      'With routine tasks handled by AI, I bring more creative thinking to the table' +
      ' — better UX decisions, smarter architecture, richer interactions.'
  }
]
