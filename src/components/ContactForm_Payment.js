import React from 'react';

import { InlineWidget } from "react-calendly"

import PresentationCard from "../components/Products/PresentationCards"

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

  const cardStyles = {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "970px",
    flexDirection: "row",
    justifyContent: "center",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "6px",
  }

  return (
    <div id="contactForm" style={contactForm}>
    
    <div style={Title}>
      <span style={{margin:`0 0 0`, fontWeight:`bold`,fontSize:`25px`, color:`#a33100`}}>Set up the appointment</span>
    </div>

    {/* <div style={{marginTop:`40px`}}> */}
      <p style={{marginBottom:`50px`, marginTop:`40px`}}><span style={{fontWeight:'bold'}}>Important: </span>If you do not contact us, we will contact you via the email you used at the time of purchase!</p>
    







    {/* This is for Spanish Lesson purchases */}
    {(props.itemPurchased.indexOf("Curriculum") >= 0 || props.itemPurchased.indexOf("Lessons") >= 0)  &&
    <div>
      <p style={{margin:`30px`}}><span style={{fontWeight:`bold`, color:`#a33100`, fontSize:`1.5rem`}}>Step 1: Decide when you want the the 20 minute Spanish evaluation.</span> </p>
      <p style={{margin:`30px`}}>The next step before we start learning Spanish together, is for us to meet for a free 20 minute evaluation to figure out your current level of Spanish and to discuss your Spanish goals! Please either call us and let us know your availability, or sign up on our Calendly for a time that works for you, the process is simple.</p>

      <span style={{fontWeight:`bold`, color:`#a33100`, fontSize:`1.5rem`, margin:`30px`}}>Step 2: Make the appointment using Calendly.</span>
    
      <div style={{marginTop:`40px`,display:`flex`, justifyContent:`center`, width:`100%`}}>
        <InlineWidget 
        color="#00a2ff"
        text="Schedule a consultation call via Calendly"
        textColor="#ffffff"
        url="https://calendly.com/enjoysafetravelscolombia/20-minute-spanish-eval"
        styles={{minWidth:`220px`, maxWidth:`770px`, width:`100%`, height:`620px`, borderStyle:`solid`, borderRadius:`5px`, borderColor:`black`, backgroundColor:`gainsboro`}}/>
      </div>
    </div>
    }

    {/* This is for Presentation purchases */}
    {(props.itemPurchased.indexOf("Presentation") >= 0)  &&
    <div className="columns is-multiline" >
      
      <div className="is-parent column is-1">
      <p style={{marginTop:`1rem`, width:`100%`, textAlign:`center`, fontWeight:`bold`, color:`#a33100`, fontSize:`1.5rem`}}>Step 1: Choose the topics</p>
      <div className="box" style={{display:'flex', justifyContent:'center',flexDirection:`column`, marginBottom: '20px', backgroundColor:`#f7f8fc`}}>
        <div style={cardStyles}>
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
        <p>Also have ready any extra information like your current knowledge about Colombia, your interest in Colombia, and anything specifically you'd like to discuss about Colombia.  If you've purchased the Full Colombian Presentation, feel free to also include the topics you are MOST interested in learning about!</p>
        </div>
      </div>

      <div className="is-parent column is-1">
        <p style={{marginTop:`1rem`, width:`100%`, textAlign:`center`, fontWeight:`bold`, color:`#a33100`, fontSize:`1.5rem`}}>Step 2: Schedule the Presentation using Calendly!</p>
        {(props.itemPurchased.indexOf("1 hour - Colombia Presentation") >= 0)  &&
        <div className="box" style={{display:`flex`, justifyContent:`center`, width:`100%`, height:`650px`, backgroundColor:`#f7f8fc`}}>
          <InlineWidget 
            color="#00a2ff"
            text="Schedule the one hour Colombian Presentation via Calendly"
            textColor="#ffffff"
            // url="https://calendly.com/enjoysafetravelscolombia/1-hour-colombia-presentation"
            url="https://calendly.com/enjoysafetravelscolombia/20-minute-colombia-consultation"
            styles={{minWidth:`220px`, maxWidth:`770px`, width:`100%`, height:`600px`}}/>
        </div>
        }
        
        {(props.itemPurchased.indexOf("Full Colombia Presentation") >= 0)  &&
        <div className="box"  style={{marginTop:`40px`,display:`flex`, justifyContent:`center`, width:`100%`}}>
          <InlineWidget 
            color="#00a2ff"
            text="Schedule the full Colombian Presentation via Calendly"
            textColor="#ffffff"
            // url="https://calendly.com/enjoysafetravelscolombia/full-presentation-on-colombia"
            url="https://calendly.com/enjoysafetravelscolombia/20-minute-colombia-consultation"
            styles={{minWidth:`220px`, maxWidth:`770px`, width:`100%`, height:`600px`}}/>
        </div>
        }
    </div>
    </div>
        }
    {/* </div> */}
    </div>
  );
}


