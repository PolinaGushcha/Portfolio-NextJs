import { IErrorMessage } from './types'

export const ErrorMessage: React.FC<IErrorMessage> = ({ message }) => {
  return (
    <section>
      <h1>Page not found</h1>
      <p>{message}</p>
    </section>
  )
}
