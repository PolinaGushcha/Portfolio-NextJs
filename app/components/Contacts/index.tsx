'use client'

import { ErrorMessage } from '@components/ErrorMessage'
import { TECHNIQUES_OPTIONS } from '@constants/data.constants'
import { yupResolver } from '@hookform/resolvers/yup'
import GmailIcon from '@icons/gmail.icon.svg'
import LocationIcon from '@icons/location.icon.svg'
import PhoneIcon from '@icons/phone.icon.svg'
import { sendEmail } from 'app/api/sendEmail'
import { schema } from 'app/config/formSchema.config'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export interface IContacts {
  firstName: string
  lastName: string
  email: string
  phone: string
  technique: NonNullable<'html&css' | 'react' | 'nextjs' | 'reactnative' | 'ionic' | 'angular' | 'other'>
  message: string
}

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
    // sendEmail(fullname, data.email, data.phone, data.technique, data.message)
    console.log(data)
    reset()
  }

  return (
    <section id='contacts'>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Let&#39;s work together&#33;</h2>
          <p>I code beautifully simple things and i love what i do. Just simple like that&#33;</p>
          <div>
            <input type='text' placeholder='First name' {...register('firstName')} />
            {errors.firstName && <ErrorMessage message={errors.firstName.message} />}
          </div>
          <div>
            <input type='text' placeholder='Last name' {...register('lastName')} />
            {errors.lastName && <ErrorMessage message={errors.lastName.message} />}
          </div>
          <div>
            <input type='email' placeholder='Email' {...register('email')} />
            {errors.email && <ErrorMessage message={errors.email.message} />}
          </div>
          <div>
            <PhoneInput
              country={'pl'}
              value={phoneInput}
              onChange={phone => {
                setPhoneInput(phone)
                setValue('phone', phone)
              }}
            />
            {errors.phone && <ErrorMessage message={errors.phone.message} />}
          </div>
          <div>
            <label htmlFor='technique'>
              Please choose an option
              <select id='technique' {...register('technique')}>
                <option value=''>-- Select --</option>
                {TECHNIQUES_OPTIONS.map(el => (
                  <option key={el.id} value={el.value}>
                    {el.name}
                  </option>
                ))}
              </select>
            </label>
            {errors.technique && <ErrorMessage message={errors.technique.message} />}
          </div>
          <div>
            <input type='text' id='message' placeholder='Message' {...register('message')} />
            {errors.message && <ErrorMessage message={errors.message.message} />}
          </div>
          <button type='submit'>Send message</button>
        </form>
      </div>
      <article>
        <div>
          <PhoneIcon />
          <div>
            <h3>Phone</h3>
            <p>+48 502 270 962</p>
          </div>
        </div>
        <div>
          <div>
            <GmailIcon />
            <h3>Gmail</h3>
            <p>polina.hushcha&#64;gmail.com</p>
          </div>
        </div>
        <div>
          <div>
            <LocationIcon />
            <h3>My current location</h3>
            <p>Poland, Poznan</p>
          </div>
        </div>
      </article>
    </section>
  )
}
