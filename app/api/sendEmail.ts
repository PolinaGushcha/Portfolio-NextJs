import { publicKeyId, serviceId, templateId } from '@config/email'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'

export const sendEmail = (fullname: string, email: string, phone: string, technique: string, message: string) => {
  const templateParams = {
    from_name: fullname,
    from_email: email,
    to_name: 'Polina Hushcha',
    to_email: 'polina.hushcha@gmail.com',
    title: technique,
    message: message,
    phone: phone
  }

  try {
    emailjs.send(serviceId, templateId, templateParams, {
      publicKey: publicKeyId
    })
  } catch (err) {
    if (err instanceof EmailJSResponseStatus) {
      console.log('EMAIL FAILED...', err)
      return
    }

    console.log('ERROR', err)
  }
}
