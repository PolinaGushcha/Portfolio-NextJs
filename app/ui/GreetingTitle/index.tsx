import { TECHNIC_TITLES } from '@constants/data'
import DownloadIcon from '@icons/download.icon.svg'
import Gmail from '@icons/gmail.icon.svg'
import LinkedIn from '@icons/linkedin.icon.svg'
import Telegram from '@icons/telegram.icon.svg'
import { Button } from '@ui/Button/'
import Link from 'next/link'

import styles from './greetingTitle.module.css'

export const GreetingTitle = () => {
  return (
    <section id='greeting'>
      <div className={styles.container}>
        <h1 className={styles.title}>
          I am a frontend developer
          <div className={styles.technicsContainer}>
            <div>on</div>
            <div className={styles.technics}>
              {TECHNIC_TITLES.map((el, id) => (
                <span key={id} className={styles.technicName}>
                  {el}
                </span>
              ))}
            </div>
          </div>
        </h1>
        <p className={styles.text}>
          Junior Frontend developer on mobile and web applications with 1.5 years of experience. I develop both beautiful smooth animation of
          interfaces and work with Rest API. My broad experience includes the fields of e-commerce, health apps, logistics and transportation.
        </p>
        <div className={styles.mainLinks}>
          <Link href='/files/CV_Frontend_Dev_Polina.pdf' download>
            <Button icon={<DownloadIcon />} text={'Download CV'} />
          </Link>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href='https://www.linkedin.com/in/polina-gushcha/' target='_blank'>
                <Button icon={<LinkedIn />} />
              </Link>
            </li>
            <li className={styles.li}>
              <Link href='mailto:polina.hushcha@gmail.com' target='_blank'>
                <Button icon={<Gmail />} />
              </Link>
            </li>
            <li className={styles.li}>
              <Link href='https://t.me/PolinaGushcha' target='_blank'>
                <Button icon={<Telegram />} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
