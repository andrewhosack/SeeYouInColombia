import React from 'react';

import { InlineWidget } from "react-calendly"

import PresentationCard from "../components/Products/PresentationCards"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'

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
  //marginTop: '50px',
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
      <span style={{margin:`0 0 0`, fontWeight:`bold`,fontSize:`25px`, color:`#a33100`}}>Set up the appointment</span>
    </div>

    <div style={BigText} className="blog-list-item is-child box">
    <p><span style={{fontWeight:'bold'}}>Important: </span>If you do not contact us, we will contact you via the email you used at the time of purchase!</p>
    
    {/* This is for Spanish Lesson purchases */}
    {(props.itemPurchased.indexOf("Curriculum") >= 0 || props.itemPurchased.indexOf("Lessons") >= 0)  &&
    <div><p style={{margin:`30px`}}>{/*<FontAwesomeIcon className="fa-4x" icon={faAward}/>*/}<span style={{fontWeight:`bold`, color:`#a33100`, fontSize:`1.5rem`}}>Step 1: Decide when you want the the 20 minute Spanish evaluation.</span> </p>
    <p style={{margin:`30px`}}>The next step before we start learning Spanish together, is for us to meet for a free 20 minute evaluation to figure out your current level of Spanish and to discuss your Spanish goals!
     Please either call us and let us know your availability, or sign up on our Calendly for a time that works for you, the process is simple.</p>

    {/* <h3 style={{marginTop:`15px`}}><span style={{fontWeight:`bold`, color:`red`, fontSize:`1.5rem`}}>Step 2: Make the appointment.</span> Choose one of the following options to schedule the evaluation call:</h3> */}
    <span style={{fontWeight:`bold`, color:`#a33100`, fontSize:`1.5rem`, margin:`30px`}}>Step 2: Make the appointment using Calendly.</span>
    {/* <h4 style={{color:`black`}}>Schedule the Spanish evaluation call via Calendly (below)</h4>
    <h4 style={{color:`black`}}>Call us (Either tell us your availability or leave us a message): <a href="tel:888-888-8888">888-888-8888</a></h4>
    <h4 style={{color:`black`, marginBottom:`30px`}}>Reach us through Email: <a href="mailto:enjoysafetravelscolombia@gmail.com">enjoysafetravelscolombia@gmail.com</a></h4>
     */}
    <div style={{marginTop:`40px`,display:`flex`, justifyContent:`center`, width:`100%`}}>
      <InlineWidget 
      color="#00a2ff"
      text="Schedule a consultation call via Calendly"
      textColor="#ffffff"
      url="https://calendly.com/enjoysafetravelscolombia/20-minute-spanish-eval"
      styles={{minWidth:`220px`, maxWidth:`770px`, width:`100%`, height:`620px`, borderStyle:`solid`, borderRadius:`5px`, borderColor:`black`, backgroundColor:`gainsboro`}}
    />
    </div>
    {/* <div>
    <h3 style={{marginTop:`30px`}}> If you prefer, you can send us a message using the following form:</h3>
    <form method="post" action="/contact/thanks/" style={{marginTop:`15px`}} noValidate autoComplete="off" name={props.formName} netlify-honeypot="bot-field" data-netlify="true">
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
        <textarea style={contactFormTextField} name="message" id="message" rows="5" placeholder="My availability for the evaluation call is..."/>
      </label>
      </p>
      <button className="button is-link" type="submit" style={{margin:`5px`, minWidth:`70px`}}>Send</button>
      <input className="button is-link" type="reset" value="Clear" style={{margin:`5px`, minWidth:`70px`}}/>


        </form>
        </div> */}
        </div>
        }
        {/* This is for Presentation purchases */}
    {(props.itemPurchased.indexOf("Presentation") >= 0)  &&


        <div>
        
         
        
       
      <p style={{margin:`30px`}}><span style={{fontWeight:`bold`, color:`#a33100`, fontSize:`1.5rem`}}>Step 1: Determine the topics you'd like to learn about the most </span></p>
      
      <p style={{margin:`30px`}}>Also have ready any extra information like your current knowledge about Colombia, your interest in Colombia, and anything specifically you'd like to discuss about Colombia.  If you've purchased the Full Colombian Presentation, feel free to also include the topics you are MOST interested in learning about!</p>
      {/* <div style={{textAlign:'center', marginTop:`30px`, fontSize: '1.75em'}}>
          Topics to learn about in the presentation:
        </div> */}
        <div style={{width:'100%', display:'flex', justifyContent:'center', marginBottom: '20px'}}>
          <div style={{display:'flex', flexWrap:'wrap', borderStyle:'solid', maxWidth:'770px', justifyContent:'center', borderColor:`#a33100`}}>              
        <PresentationCard topic="The major cities and touristic towns" />
        <PresentationCard topic="Real safety tips for travel in Colombia" />
        <PresentationCard topic="General Travel Tips" />
        <PresentationCard topic="Lessons about the culture in Colombia" />
        <PresentationCard topic="What to expect from Colombia" />
        <PresentationCard topic="Political, Social, Economic context" />
        <PresentationCard topic="Annual events held within Colombia" />
        <PresentationCard topic="Best times during the year to travel" />
        <PresentationCard topic="General cost to travel" />
        </div>
        </div>
        {/* <p style={{marginTop:`15px`}}><span style={{fontWeight:`bold`, color:`#a33100`, fontSize:`1.5rem`, margin:`30px`}}>Step 2: Let us know. </span> Include the above information when you set up the meeting time via an email, by calling us, or when you set up the presentation date and time via Calendly (you can include a note while you set the appointment). </p> */}

    <h3 style={{fontWeight:`bold`, margin:`30px`}}><span style={{fontWeight:`bold`, color:`#a33100`, fontSize:`1.5rem`}}>Step 2: Schedule the Presentation using Calendly!</span></h3>
    {/* <h4 style={{color:`black`}}>Schedule the Presentation call via Calendly (below) </h4>
    <h4 style={{color:`black`}}>Call us (Leave a message): <a href="tel:888-888-8888">888-888-8888</a></h4>
    <h4 style={{color:`black`, marginBottom:`30px`}}>Reach us through Email: <a href="mailto:enjoysafetravelscolombia@gmail.com">enjoysafetravelscolombia@gmail.com</a></h4>
     */}
    {(props.itemPurchased.indexOf("1 hour - Colombia Presentation") >= 0)  &&
    <div style={{marginTop:`40px`,display:`flex`, justifyContent:`center`, width:`100%`}}>
      <InlineWidget 
     color="#00a2ff"
     text="Schedule the one hour Colombian Presentation via Calendly"
     textColor="#ffffff"
     url="https://calendly.com/enjoysafetravelscolombia/1-hour-colombia-presentation"
     styles={{minWidth:`220px`, maxWidth:`770px`, width:`100%`, height:`650px`, borderStyle:`solid`, borderRadius:`5px`, borderColor:`black`, backgroundColor:`gainsboro`}}
   />
   </div>
      }
      {(props.itemPurchased.indexOf("Full Colombia Presentation") >= 0)  &&
      <div style={{marginTop:`40px`,display:`flex`, justifyContent:`center`, width:`100%`}}>
    <InlineWidget 
     color="#00a2ff"
     text="Schedule the full Colombian Presentation via Calendly"
     textColor="#ffffff"
     url="https://calendly.com/enjoysafetravelscolombia/full-presentation-on-colombia"
     styles={{minWidth:`220px`, maxWidth:`770px`, width:`100%`, height:`650px`, borderStyle:`solid`, borderRadius:`5px`, borderColor:`black`, backgroundColor:`gainsboro`}}
   />
   </div>
    }
    {/* <div>
    <h3 style={{marginTop:`30px`}}> Let us know the topics that interest you the most:</h3>
    <form method="post" action="/contact/thanks/" style={{marginTop:`15px`}} noValidate autoComplete="off" name={props.formName} netlify-honeypot="bot-field" data-netlify="true">
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
        <textarea style={contactFormTextField} name="message" id="message" rows="5" placeholder="My availability for the presentation is..., and the topics I'd like to discuss are..."/>
      </label>
      </p>
      <button className="button is-link" type="submit" style={{margin:`5px`, minWidth:`70px`}}>Send</button>
      <input className="button is-link" type="reset" value="Clear" style={{margin:`5px`, minWidth:`70px`}}/>


        </form>
        </div> */}
        </div>
        }
    </div>
    </div>
  );
}


