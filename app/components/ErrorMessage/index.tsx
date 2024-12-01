export interface IErrorMessage {
  message?: string
}

export const ErrorMessage: React.FC<IErrorMessage> = ({ message }) => {
  return <p>{message}</p>
}
