import DownloadIcon from '@icons/download.icon.svg'
import Gmail from '@icons/gmail.icon.svg'
import LinkedIn from '@icons/linkedin.icon.svg'
import Telegram from '@icons/telegram.icon.svg'
import { TITLE_TECHNICS } from 'app/constants/data.constants'
import { Button } from 'app/ui/button.ui'

export const Home = () => {
  const downloadFile = () => {
    console.log('downloadFile')
  }

  const openPage = () => {
    console.log('openPage')
  }

  const goToContacts = () => {
    console.log('goToContacts')
  }

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
        <Button icon={<DownloadIcon />} text={'Download'} click={downloadFile} />
        <ul>
          <li>
            <Button icon={<LinkedIn />} click={openPage} />
          </li>
          <li>
            <Button icon={<Gmail />} click={goToContacts} />
          </li>
          <li>
            <Button icon={<Telegram />} click={openPage} />
          </li>
        </ul>
      </div>
    </section>
  )
}
