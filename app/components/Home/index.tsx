import { TITLE_TECHNICS } from '@constants/data.constants'
import { Button } from '@ui/button.ui'

export const Home = () => {
  return (
    <section>
      <h1>
        I am a frontend developer on <span>{TITLE_TECHNICS[0]}</span>
      </h1>
      <p>
        Junior Frontend developer on mobile and web applications with 1.5 years of experience. I develop both beautiful smooth animation of interfaces
        and work with Rest API. My broad experience includes the fields of e-commerce, health apps, logistics and transportation.
      </p>
      <div>
        <Button />
        <ul>
          <li>
            <Button />
          </li>
          <li>
            <Button />
          </li>
          <li>
            <Button />
          </li>
        </ul>
      </div>
    </section>
  )
}
