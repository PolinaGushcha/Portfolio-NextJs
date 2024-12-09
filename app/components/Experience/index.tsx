import { EDUCATION, EXPERIENCE } from '@constants/data'

export const Experience = () => {
  return (
    <section id='experience'>
      <div>
        <h2>My experience</h2>
        {EXPERIENCE.map(el => {
          return (
            <div key={el.id}>
              <h3>{el.name}</h3>
              <p>{el.description}</p>
            </div>
          )
        })}
        <h2>My education</h2>
        {EDUCATION.map(el => {
          return (
            <div key={el.id}>
              <h3>{el.name}</h3>
              <p>{el.date}</p>
              <p>{el.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
