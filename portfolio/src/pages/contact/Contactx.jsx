// import React from 'react'
import './Contact.css';
import contact from '../../assets/contact.png';

const Contact = () => {
  return (
    <div id="contact" className='w-full h-screen flex flex-row items-center gap-12 sm:px-20 px-0 dark:bg-dark'>
      <div className='md:block hidden hover:scale-105 transition-all'>
        <img src={contact} alt="" className='w-[40vw]'/>
      </div>
      <div className="right-contact w-full sm:p-0 p-4">
        <h1 className='text-center font-serif font-black text-3xl dark:text-light mb-4 hover:scale-105 transition-all'>Get In Touch</h1>
        <form action="https://formspree.io/f/xjkvevbj" method='POST' 
        className='flex flex-col items-center gap-5 p-6 font-thin font-serif shadow-lg rounded-xl text-center border-b-8 border-r-8 border-primary border-l-primaryDark border-t-primaryDark border-2 dark:boder-2 dark:border-light hover:scale-95 transition-all'>
          <input type="text" placeholder='Name' name='username' className='w-full p-2 rounded-lg shadow-xl border-dark'/>
          <input type="email" name='email' placeholder='email'  className='w-full p-2 shadow-xl rounded-lg border-dark'/>
          <textarea name="message" id="text-area" placeholder='type your query here ...'className='text-black shadow-xl w-full p-6 rounded-lg border-dark h-[150px]'></textarea>
          <input type="submit" id='btn' value='Submit' className='w-[150px] bg-gray p-2 font-serif rounded-md text-light text-xl'/>
        </form>
      </div>
    </div>
  )
}

export default Contact;