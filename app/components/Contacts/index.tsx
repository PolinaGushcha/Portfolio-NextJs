'use client'

import { sendEmail } from '@api/sendEmail'
import { TECHNIQUES_OPTIONS } from '@constants/data'
import { yupResolver } from '@hookform/resolvers/yup'
import GmailIcon from '@icons/gmail.icon.svg'
import LocationIcon from '@icons/location.icon.svg'
import PhoneIcon from '@icons/phone.icon.svg'
import { schema } from '@utils/formSchema'
import clsx from 'clsx'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import styles from './contacts.module.css'
import { IContacts } from './types'

export const Contacts = () => {
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<IContacts>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const [phoneInput, setPhoneInput] = useState('')

  const onSubmit: SubmitHandler<IContacts> = (data: IContacts) => {
    const fullname = `${data.firstName} ${data.lastName}`
    setPhoneInput('')
    sendEmail(fullname, data.email, data.phone, data.technique, data.message)
    reset()
  }

  return (
    <section className={styles.contacts} id='contacts'>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={styles.formTitle}>Let&#39;s work together&#33;</h2>
          <p className={styles.formText}>I code beautifully simple things and i love what i do. Just simple like that&#33;</p>
          <div className={styles.contactInfo}>
            <div className={styles.infoSection}>
              <div>
                <input
                  className={clsx(styles.input, errors.firstName && styles.errorInput)}
                  type='text'
                  placeholder='First name'
                  {...register('firstName')}
                  maxLength={20}
                />
                <p className={styles.errorMessage}>{errors.firstName && errors.firstName.message}</p>
              </div>
              <div>
                <input
                  className={clsx(styles.input, errors.lastName && styles.errorInput)}
                  type='text'
                  placeholder='Last name'
                  {...register('lastName')}
                  maxLength={20}
                />
                <p className={styles.errorMessage}>{errors.lastName && errors.lastName.message}</p>
              </div>
            </div>
            <div className={styles.infoSection}>
              <div>
                <input className={styles.input} type='email' placeholder='Email' {...register('email')} />
                <p className={styles.errorMessage}>{errors.email && errors.email.message}</p>
              </div>
              <div className={styles.phoneInput}>
                <PhoneInput
                  country={'pl'}
                  value={phoneInput}
                  onChange={phone => {
                    setPhoneInput(phone)
                    setValue('phone', phone)
                  }}
                  buttonStyle={{ paddingRight: 8 }}
                  inputStyle={{ marginLeft: 10, width: '95%' }}
                />
                <p className={styles.errorMessage}>{errors.phone && errors.phone.message}</p>
              </div>
            </div>
          </div>

          <div>
            <select className={clsx(styles.input, styles.selectInput)} {...register('technique')}>
              <option value=''>-- Please choose an option --</option>
              {TECHNIQUES_OPTIONS.map(el => (
                <option key={el.id} value={el.value}>
                  {el.name}
                </option>
              ))}
            </select>
            <p className={styles.errorMessage}>{errors.technique && errors.technique.message}</p>
          </div>
          <div>
            <textarea className={clsx(styles.input, styles.messageInput)} id='message' placeholder='Message' {...register('message')} />
            <p className={styles.errorMessage}>{errors.message && errors.message.message}</p>
          </div>
          <button className={styles.submitBtn} type='submit'>
            Send message
          </button>
        </form>

        <article className={styles.infoArticle}>
          <div className={styles.infoList}>
            <div className={styles.icon}>
              <PhoneIcon />
            </div>
            <div className={styles.information}>
              <h3>Phone</h3>
              <p>+48 502 270 962</p>
            </div>
          </div>
          <div className={styles.infoList}>
            <div className={styles.icon}>
              <GmailIcon />
            </div>
            <div className={styles.information}>
              <h3>Gmail</h3>
              <p>polina.hushcha&#64;gmail.com</p>
            </div>
          </div>
          <div className={styles.infoList}>
            <div className={styles.icon}>
              <LocationIcon />
            </div>
            <div className={styles.information}>
              <h3>My current location</h3>
              <p>Poland, Poznan</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
