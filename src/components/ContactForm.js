import React from 'react';

import { InlineWidget } from "react-calendly"


// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

export default function ContactForm(props) {

  const Title = {
    color: 'Black',
    opacity: '.8',
    borderRadius: '10px',
    width: '100%',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  
  const BigText = {
    marginTop:'20px',
    backgroundColor: '#d6400033',
    padding: '.5rem',
  } 

  const contactForm = {
    marginTop: '100px',
    borderRadius: '6px',
    // margin: '5%',
    width: '100%',
    // maxWidth: `350px`,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    // border: '1px solid #dbdbdb',
    //boxShadow: 'inset 0 0 0 2px #f40',
  }

  const contactFormTextField = {
    marginBottom: '15px !important',
    fontFamily: 'Georgia Serif !important',
    backgroundColor: 'white !important',
    padding:'5px'
  }

  return (
    <div id="contactForm" style={contactForm}>
    <div style={Title}>
    <span  style={{margin:`0 0 0`, fontWeight:`bold`,fontSize:`25px`, color:`#a33100`}}>Get in Contact With Us</span>
    </div>

    <div style={BigText} className="blog-list-item is-child box">
   
    <div>
    {/* <p>Please contact us if you'd like to find out more about our pricing or services! When you reach out please let us know which services you are interested in, any pertinent information, and also a good time and method of reaching you!</p>*/}
    <h3 style={{margin:`5%`}}>Have questions about our products, services, or pricing?</h3>
    <div style={{margin: `5%`}}><h4 style={{color:`#a33100`}}>Reach us through Email: </h4><a style={{fontSize:`100%`}} className="contactFormOptions" href="mailto:enjoysafetravelscolombia@google.com">enjoysafetravelscolombia@google.com</a></div>
    <div style={{margin: `5%`}}><h4 style={{color:`#a33100`, marginTop:`10px`}}>Schedule a consultation call via Calendly: </h4></div>
    <div style={{marginTop:`40px`,display:`flex`, justifyContent:`center`, width:`100%`}}>
    <InlineWidget 
     color="#00a2ff"
     text="Schedule a consultation call via Calendly"
     textColor="#ffffff"
     url="https://calendly.com/enjoysafetravelscolombia/20-minute-colombia-consultation"
     styles={{minWidth:`220px`, maxWidth:`770px`, width:`100%`, height:`620px`, borderStyle:`solid`, borderRadius:`5px`, borderColor:`#a33100`}}
   />
    </div>
    <div style={{margin: `5%`}}><h4 style={{color:`#a33100`}}>Call us and leave us a message: </h4><a style={{fontSize:`1.5rem`}} href="tel:888-888-8888">888-888-8888</a></div>
    
</div>
<div style={{margin:`5%`}}>
<h3 style={{marginTop:`45px`}}> If you prefer, you can send us a message using the following form:</h3>
<div>
<form method="post" action="/contact/thanks/" noValidate autoComplete="off" name={props.formName} netlify-honeypot="bot-field" data-netlify="true">
    <input type="hidden" name="bot-field" /> <input type="hidden" name="form-name" value={props.formName} />
<p>
  <label style={{color:`black`, display:`flex`, flexDirection:`column`}}>
    Name: 
    <input style={contactFormTextField} type="text" name="name" id="name" />
  </label>
  </p>
  <p>
  <label style={{color:`black`, display:`flex`, flexDirection:`column`}}>
    Telephone Number
    <input style={contactFormTextField} type="tel" name="telephone" id="telephone" />
  </label>
  </p>
  <p>
  <label style={{color:`black`, display:`flex`, flexDirection:`column`}}>
    Email
    <input style={contactFormTextField} type="email" name="email" id="email" />
  </label>
  </p>
  <p>
  <label style={{color:`black`, display:`flex`, flexDirection:`column`}}>
    Message
    <textarea style={contactFormTextField} name="message" id="message" rows="5" placeholder="I'd like more information about..."/>
  </label>
  </p>
  <button className="button is-link" type="submit" style={{margin:`5px`, minWidth:`70px`}}>Send</button>
  <input className="button is-link" type="reset" value="Clear" style={{margin:`5px`, minWidth:`70px`}}/>


        </form>
        </div>
    </div>
    </div>
    </div>
  );
}


