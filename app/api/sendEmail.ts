import { publicKeyId, serviceId, templateId } from '@config/email'
import emailjs from '@emailjs/browser'

export const sendEmail = (from_name: string, from_email: string, phone: string, title: string, message: string) => {
  const templateParams = {
    from_name,
    from_email,
    to_name: 'Polina Hushcha',
    to_email: 'polina.hushcha@gmail.com',
    title,
    message,
    phone
  }

  return emailjs.send(serviceId, templateId, templateParams, { publicKey: publicKeyId })
}
