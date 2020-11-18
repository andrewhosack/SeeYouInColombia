import React from 'react';
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



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

  const contactFormLabel = {
    marginBottom: '10px',
    backgroundColor: 'white !important',
    padding:'5px',
    fontSize:'18px',
    fontWeight:'700',
    width:'250px',
  }

  const contactFormTextField = {
    marginBottom: '15px !important',
    backgroundColor: 'white !important',
    marginBottom:`20px`,
    width:'250px',
    height:`50px`,
    padding:'9px 20px',
  }

  const contactFormTextArea = {
    marginBottom: '15px !important',
    backgroundColor: 'white !important',
    marginBottom:`20px`,
    width:'250px',
    height:`77px`,
    padding:'9px 20px',
    fontFamily:`Eb Garamond`
  }

  const cardStyles = {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    marginBottom: "1rem",
    boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
    backgroundColor: "#fff",
    marginTop:"3rem",
    maxHeight:"370px",
    minWidth:"260px",
  }

  const helpStyles = {
    backgroundColor:"#f7f8fc",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    marginTop:"3rem",
    minWidth:"260px",
  }

  const contactFormStyles = {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    marginBottom: "1rem",
    boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
    backgroundColor: "#fff",
    maxWidth: "340px",
    marginTop:"3rem",
    minWidth:"300px",
  }

  return (
    <div id="contactForm" style={contactForm}>
    
    <div style={Title} style={{display:`flex`, flexDirection:`column`}}>
    <span  style={{fontSize:`16px`, color:`#a33100`,  width:`100%`, textAlign:`center`}}>GOT A QUESTION?</span>
    <span  style={{marginTop:`1rem`, fontWeight:`bold`,fontSize:`28px`, color:`#a33100`,  width:`100%`, textAlign:`center`}}>Get in Contact With Us</span>
    <h3 style={{marginTop:`1rem`, width:`100%`, textAlign:`center`,fontSize:`2rem`}}>Have questions about our products, services, or pricing?</h3>
    <h3 style={{margin:`0 0 0`, width:`100%`, textAlign:`center`,fontSize:`2rem`}}>We're here to help!</h3>
    </div>

    {/*Contact Form */}
    <div className="columns is-multiline" style={{display:`flex`, justifyContent:`center`}}>
    <div className="is-parent column is-1" style={contactFormStyles}>
  
    <form method="post" action="/contact/thanks/" noValidate autoComplete="off" name={props.formName} netlify-honeypot="bot-field" data-netlify="true">
    <input type="hidden" name="bot-field" /> <input type="hidden" name="form-name" value={props.formName} />
    
    <div style={{display:`flex`, flexDirection:`column`, marginLeft:`15px`}}>
      <label style={contactFormLabel}>
        NAME: 
      </label>
      <input style={contactFormTextField} type="text" name="name" id="name" />
      </div>
    <div style={{display:`flex`, flexDirection:`column`, marginLeft:`15px`}}>
    <label style={contactFormLabel}>
        TELEPHONE NUMBER
      </label>
      <input style={contactFormTextField} type="tel" name="telephone" id="telephone" />
    </div>
    <div style={{display:`flex`, flexDirection:`column`, marginLeft:`15px`}}>
    <label style={contactFormLabel}>
        EMAIL
      </label>
      <input style={contactFormTextField} type="email" name="email" id="email" />
    </div>
    <div style={{display:`flex`, flexDirection:`column`, marginLeft:`15px`}}>
    <label style={contactFormLabel}>
        MESSAGE
      </label>
      <textarea style={contactFormTextArea} name="message" id="message" rows="5" placeholder="I'd like more information about..."/>
    </div>
      <div style={{display:`flex`, flexDirection:`row`, marginLeft:`20px`, marginTop:`10px`}}>
        <button className="button is-link" type="submit" style={{margin:`5px`, width:`122px`, fontFamily:`EB Garamond`}}>Send</button>
        <input className="button is-link" type="reset" value="Clear" style={{margin:`5px`, width:`122px`, fontFamily:`EB Garamond`}}/>
      </div>
        </form>
     
    </div>
    </div>
    
    {/*Contact Info card */}
    <div className="columns is-multiline" style={{display:`flex`,justifyContent:`center`}}> {/* style={{display:`flex`, justifyContent:`center`, flexWrap:`wrap`}}*/}
    <div className="is-parent column is-6 contactContactCard" style={cardStyles}>
      <h4 style={{margin:`0 0 0`, width:`100%`, textAlign:`left`,fontSize:`1.5rem`}}>Contact Information</h4>

      <div style={{display:`flex`, flexDirection:`row`, marginTop:`4rem`}}>
        <FontAwesomeIcon style={{marginTop:`8px`}}  icon={faPhoneAlt} />
        <span style={{marginLeft:`2rem`, fontSize:`1.3rem`}}> <a href="tel:828-799-0813">828-799-0813</a></span>
      </div>

      <div style={{display:`flex`, flexDirection:`row`, marginTop:`2rem`}}>
        <FontAwesomeIcon style={{marginTop:`8px`}}  icon={faEnvelope} />
        <span style={{marginLeft:`2rem`, fontSize:`1.3rem`}}><a style={{overflowWrap:`anywhere`}} href="mailto:enjoysafetravelscolombia@gmail.com">enjoysafetravelscolombia@gmail.com</a></span>
      </div>

      <div style={{display:`flex`, flexDirection:`row`, marginTop:`2rem`}}>
        <FontAwesomeIcon style={{marginTop:`8px`}} icon={faMapMarkerAlt} />
        <span style={{marginLeft:`2rem`, fontSize:`1.3rem`}}>Medellin, Antioquia, Colombia</span>
      </div>
     
    </div>

{/*Contact Details card */}
    <div className="is-parent column is-6 contactHelpCard" style={helpStyles}>
      <h4 style={{margin:`0 0 0`, width:`100%`, textAlign:`left`,fontSize:`1.5rem`}}>How can we help?</h4>

      <p style={{marginTop:`2rem`,fontSize:`1.3rem`}}>Please select a topic below related to your inquiry. If you don’t find what you need, fill out our contact form.</p>
      
      <div style={{display:`flex`, flexDirection:`column`, marginTop:`2rem`}}>
        <h4><a href="https://calendly.com/enjoysafetravelscolombia/20-minute-colombia-consultation">Book a Consultation Call</a></h4>
        <span style={{fontSize:`1.2rem`}}>Schedule a quick call to discuss our services and products.</span>
      </div>
      <div style={{marginTop:`2rem`, width:`100%`, borderBottomStyle:`solid`, borderBottomColor:`black`, borderBottom:`2px solid rgba(0,0,0,.1)`}}></div>
      
      <div style={{display:`flex`, flexDirection:`column`, marginTop:`2rem`}}>
        <h4><Link to="../#presentation" >
                      Review Services We Offer
                    </Link></h4>
        <span style={{fontSize:`1.2rem`}}>Discover the many ways we are helping our clients.</span>
      </div>
      <div style={{marginTop:`2rem`, width:`100%`, borderBottomStyle:`solid`, borderBottomColor:`black`, borderBottom:`2px solid rgba(0,0,0,.1)`}}></div>
      
      <div style={{display:`flex`, flexDirection:`column`, marginTop:`2rem`, marginBottom:`2rem`}}>
        <h4><Link to="../#contactForm" >
                      Become a Member
                    </Link></h4>
        <span style={{fontSize:`1.2rem`}}>Join our members area for exclusive content.</span>
      </div>
     
    </div>

    </div>
    </div>
  );
}


