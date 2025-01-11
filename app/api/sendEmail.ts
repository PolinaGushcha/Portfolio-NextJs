import { publicKeyId, serviceId, templateId } from '@config/email'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'

import { ISendEmailParams } from './sendEmail.types'

export const sendEmail = ({ from_name, from_email, title, message, phone }: ISendEmailParams) => {
  const templateParams = {
    from_name,
    from_email,
    to_name: 'Polina Hushcha',
    to_email: 'polina.hushcha@gmail.com',
    title,
    message,
    phone
  }

  try {
    emailjs.send(serviceId, templateId, templateParams, {
      publicKey: publicKeyId
    })
  } catch (err) {
    if (err instanceof EmailJSResponseStatus) {
      console.error('EMAIL FAILED...', err)
      return
    }

    console.error('ERROR', err)
  }
}
