// import React from 'react'
import './Contact.css'
import contact from '../../assets/contactus.webp'

const Contact = () => {
  return (
    <div id="contact" className='w-full h-screen flex items-center justify-between gap-10 px-10 dark:bg-dark'>
      <div className="left-contact w-[45%] object-cover">
        <img src={contact} className='' />
      </div>
      <div className="right-contact w-1/2">
        <form action="https://formspree.io/f/xjkvevbj" method='POST' 
        className='w-full flex flex-col items-center gap-5 p-6'>
          <input type="text" placeholder='Name' name='username' className='w-full p-2 rounded-lg shadow-xl border-b-2 border-dark border-r-2'/>
          <input type="email" name='email' placeholder='email'  className='w-full p-2 rounded-lg border-b-2 border-dark border-r-2'/>
          <textarea name="message" id="text-area" placeholder='write your message'className='w-full p-6 rounded-lg border-b-2 border-dark border-r-2'> </textarea>
          <input type="submit" id='btn' value='submit' className='w-[150px] bg-primary p-2 font-serif rounded-md text-light text-xl'/>
        </form>
      </div>
    </div>
  )
}

export default Contact