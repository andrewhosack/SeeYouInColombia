import React from 'react';
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
    // color: '#CC3700',
    // fontSize: '30px',
    //backgroundColor: '#f5f5f5',
  } 

  const contactForm = {
    marginTop: '70px',
    borderRadius: '6px',
    // margin: '5%',
    width: '100%',
    // maxWidth: `350px`,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    // border: '1px solid #dbdbdb',
    boxShadow: 'inset 0 0 0 2px #f40',
  }

  const contactFormTextField = {
    marginBottom: '15px !important',
    fontFamily: 'Georgia Serif !important',
    backgroundColor: 'white !important',
  }

  return (
    <div id="contactForm" style={contactForm}>
    <div style={Title}>
      <span color='white' style={{margin:`0 0 0`, fontWeight:`bold`}}>Get in Contact With Us</span>
    </div>

    <div style={BigText}>
   
    <div style={{margin: '5%'}}>
    <p>Please contact us if you'd like to find out more about our pricing or services! When you reach out please let us know which services you are interested in, any pertinent information, and also a good time and method of reaching you!</p>

    <p style={{color:`black`}}><h4>Call us and leave us a message: <a href="tel:888-888-8888">888-888-8888</a></h4></p> 
    <p style={{color:`black`}}><h4>Reach us through Email: <a href="mailto:enjoysafetravelscolombia@google.com">Send an Email</a></h4></p> 
    <p style={{color:`black`}}><h4>Schedule a consultation call via Calendly: <a href="https://calendly.com/enjoysafetravelscolombia/30-minute-colombia-consultation">Schedule a Meeting</a></h4></p>
    {/* <TextField id="name" name="name" label="Nombre" variant="outlined" type="email" fullWidth className="contactFormTextField"/>
    
    <Button className="contactFormSubmit" type="submit" variant="contained" fullWidth >Contáctanos</Button> */}
<h3> If you prefer, you can send us a message here on the following form:</h3>
</div>
<div>
<form method="post" action='#' style={{margin: '5%'}} noValidate autoComplete="off" name={props.formName} netlify-honeypot="bot-field" data-netlify="true">
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
    <input style={contactFormTextField} type="tel" name="telephone" id="name" />
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
    <textarea style={contactFormTextField} name="message" id="message" rows="5" />
  </label>
  </p>
  <button className="button is-link" type="submit" style={{margin:`5px`, minWidth:`70px`}}>Send</button>
  <input className="button is-link" type="reset" value="Clear" style={{margin:`5px`, minWidth:`70px`}}/>


        </form>
        </div>
    </div>
    </div>
  );
}


