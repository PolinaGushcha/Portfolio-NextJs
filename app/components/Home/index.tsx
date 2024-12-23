import { TITLE_TECHNICS } from '@constants/data'
import DownloadIcon from '@icons/download.icon.svg'
import Gmail from '@icons/gmail.icon.svg'
import LinkedIn from '@icons/linkedin.icon.svg'
import Telegram from '@icons/telegram.icon.svg'
import { Button } from '@ui/Button/'

import styles from './home.module.css'

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
    <section id='home'>
      <div className={styles.container}>
        <h1 className={styles.title}>
          I am a frontend developer
          <br />
          on <span className={styles.technics}>{TITLE_TECHNICS[0]}</span>
        </h1>
        <p className={styles.text}>
          Junior Frontend developer on mobile and web applications with 1.5 years of experience. I develop both beautiful smooth animation of
          interfaces and work with Rest API. My broad experience includes the fields of e-commerce, health apps, logistics and transportation.
        </p>
        <div className={styles.mainLinks}>
          <Button icon={<DownloadIcon />} text={'Download'} click={downloadFile} />
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Button icon={<LinkedIn />} click={openPage} />
            </li>
            <li className={styles.li}>
              <Button icon={<Gmail />} click={goToContacts} />
            </li>
            <li className={styles.li}>
              <Button icon={<Telegram />} click={openPage} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
