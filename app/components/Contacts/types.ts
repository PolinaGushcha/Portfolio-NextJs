export interface IContacts {
  firstName: string
  lastName: string
  email: string
  phone: string
  technique: NonNullable<'html&css' | 'react' | 'nextjs' | 'reactnative' | 'ionic' | 'angular' | 'other'>
  message: string
}
