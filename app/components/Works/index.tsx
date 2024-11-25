import { TITLE_TECHNICS } from '@constants/data.constants'

export const Work = () => {
  return (
    <section id='works'>
      <h2>Works</h2>
      <div>
        {TITLE_TECHNICS.map((el, id) => {
          return (
            <div key={id}>
              <p>{el}</p>
            </div>
          )
        })}
        <div>
          <div>
            <div>
              <h3>Card title</h3>
              <p>card description</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
