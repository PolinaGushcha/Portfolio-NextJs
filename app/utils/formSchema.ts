import * as yup from 'yup'

export const schema = yup.object().shape({
  firstName: yup.string().max(20, 'The text must be at most 20 characters long').required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Please enter your phone number'),
  technique: yup
    .string()
    .oneOf(['html&css', 'react', 'nextjs', 'reactnative', 'ionic', 'angular', 'other'], 'Invalid option selected')
    .required('Please select an option'),
  message: yup.string().required('Message is required')
})
