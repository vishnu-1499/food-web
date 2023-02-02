import React from 'react';
import LeftBB from '../images/left-bb.jpg';
import "./Contact.css";

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{ backgroundImage: `url(${LeftBB})`}}>
        </div>
       
        <div className='rightSide'>
            <h1> Contact US </h1>

            <form>
                <label> Full Name </label>
                <input type="text" placeholder="eg...John" name='name' /> 
                <br />
                <label> E-Mail </label>
                <input type="email" placeholder="@email.com" name='email' /> 
                <br />
                <br />
                <textarea rows="6" placeholder="Enter Your Message..." name='message' required></textarea>
                <br />
                <br />
                <button type='submit'> <h2>Submit</h2> </button>
            </form>
        </div>

    </div>
  )
}

export default Contact;