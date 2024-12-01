import * as yup from 'yup'

export const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 9 digits')
    .required('Please enter your phone number'),
  technique: yup
    .string()
    .oneOf(['html&css', 'react', 'nextjs', 'reactnative', 'ionic', 'angular', 'other'], 'Invalid option selected')
    .required('Please select an option'),
  message: yup.string().required('Message is required')
})
