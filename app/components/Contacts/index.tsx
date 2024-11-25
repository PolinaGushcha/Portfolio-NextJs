'use client'

// import Image from 'next/image'

export const Contacts = () => {
  return (
    <section id='contacts'>
      <div>
        <form action='' method='post' onSubmit={() => {}}>
          <h2>Let&#39;s work together&#33;</h2>
          <p>I code beautifully simple things and i love what i do. Just simple like that&#33;</p>
          <input type='text' name='first_name' id='' placeholder='First name' />
          <input type='text' name='last_name' id='' placeholder='Last name' />
          <input type='email' name='email' id='' placeholder='Email' />
          <input type='tel' name='phone' id='' placeholder='Phone number' />
          <label htmlFor='technique'>
            Please choose an option
            <select id='technique' name='technique'>
              <option value='html&css'>HTML & CSS website layout</option>
              <option value='react'>React</option>
              <option value='nextjs'>Next.js</option>
              <option value='reactnative'>React Native</option>
              <option value='ionic'>Ionic</option>
              <option value='angular'>Angular</option>
              <option value='other'>Other</option>
            </select>
          </label>
          <input type='text' name='description' id='description' placeholder='Message' />
          <button type='submit'>Send message</button>
        </form>
      </div>
      <article>
        <div>
          {/* <Image alt='phone icon' src={phoneIcon} /> */}
          <div>
            <h3>Phone</h3>
            <p>+48 502 270 962</p>
          </div>
        </div>
        <div>
          {/* <Image alt='email icon' src={'./'} /> */}
          <div>
            <h3>Gmail</h3>
            <p>polina.hushcha&#64;gmail.com</p>
          </div>
        </div>
        <div>
          {/* <Image alt='location icon' src={'./'} /> */}
          <div>
            <h3>My current location</h3>
            <p>Poland, Poznan</p>
          </div>
        </div>
      </article>
    </section>
  )
}
