// import React from 'react'
import './Contact.css'
import contact from '../../assets/contact.png'
// import {useGSAP} from '@gsap/react'
// import gsap from 'gsap'
// import {ScrollTrigger} from 'gsap/all'
// gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  return (
    <div id="contact">
      <div className="left-contact">
        <img src={contact} alt="" />
      </div>
      <div className="right-contact">
        <form action="https://formspree.io/f/xjkvevbj" method='POST'>
          <input type="text" placeholder='Name' name='username'/>
          <input type="email" name='email' placeholder='email' />
          <textarea name="message" id="text-area" placeholder='write your message'></textarea>
          <input type="submit" id='btn' value='submit'/>
        </form>
      </div>
    </div>
  )
}

export default Contact