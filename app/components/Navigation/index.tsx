import { ChangeColors } from '@components/ChangeColors'

export const Navigation: React.FC = () => {
  return (
    <nav>
      <div>
        <ChangeColors />
      </div>
      <ul>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#skills'>Skills</a>
        </li>
        <li>
          <a href='#works'>Works</a>
        </li>
        <li>
          <a href='#contacts'>Contacts</a>
        </li>
      </ul>
    </nav>
  )
}
