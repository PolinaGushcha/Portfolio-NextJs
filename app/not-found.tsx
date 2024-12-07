'use client'

import { useRouter } from 'next/navigation'

const ErrorPage = () => {
  const router = useRouter()

  return (
    <section>
      <h1>Page not found</h1>
      <button onClick={() => router.back()}>Go back</button>
    </section>
  )
}

export default ErrorPage
