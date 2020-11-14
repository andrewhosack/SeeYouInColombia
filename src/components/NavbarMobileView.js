import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { faFilePowerpoint } from '@fortawesome/free-solid-svg-icons'
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import { faPassport } from '@fortawesome/free-solid-svg-icons'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'

const NavbarDropDown = class extends React.Component {
  render() {
    return (
      <div className="navbar-start has-text-centered" style={{display:`flex`,justifyContent:`center`}}>
        <div className="mobileView box" style={{maxWidth:`450px`,display:`flex`, flexDirection:`column`,borderTop: `1.5px solid red`, padding: `10px` ,borderTopRightRadius: `12px`,borderTopLeftRadius: `12px`,margin:`20px`}}>
                
                <div style={{display:`flex`,flexDirection:`row`}}>
            
                    <div style={{width:`100%`,display:`flex`, flexDirection:`column`, margin:`30px`,marginLeft:`15px`,marginBottom:`0px`}}>
                      
                      <div style={{textAlign:`left`}}><span style={{fontWeight:`bold`, fontSize:`21px`}}>What would you like to do?</span></div>
                      <div style={{textAlign:`left`}}>We have everything you'll need to make a trip or a move to Colombia successful!</div>
                    </div>
                  </div>
                    <div style={{display:`flex`,flexDirection:`column`,width:`100%`}}>
                      <Link to="/travelSafely/#customizedPresentation" style={{width:`100%`,marginLeft:`5px`,marginBottom:`15px`,marginTop:`15px`}}>
                        <div style={{width:`100%`,display:`flex`,flexDirection:`row`,padding:`5px`}}>
                          <div style={{width:`35px`}}>
                            <FontAwesomeIcon className="test" style={{width:`35px`, height:`70px`,color:`rgb(255, 68, 0)`}}  icon={faFilePowerpoint} />
                          </div>
                          <div style={{display:`flex`,flexDirection:`column`, marginLeft:`10px`, marginRight:`30px`}}>
                            <span style={{textAlign:`left`, fontWeight:`bold`, fontSize:`22px`}}>Presentations</span>
                            <span style={{textAlign:`left`,color:`black`,fontSize:`18px`}}>Join us for a presentation about Colombia!</span>
                          </div>
                        </div>
                      </Link>
                      <Link to="/learnSpanish" style={{width:`100%`,marginLeft:`5px`,marginBottom:`15px`}}>
                        <div style={{width:`100%`,display:`flex`,flexDirection:`row`,padding:`5px`}}>
                          <div style={{width:`35px`}}>
                            <FontAwesomeIcon style={{width:`35px`, height:`70px`,color:`rgb(255, 68, 0)`}}  icon={faSchool} />
                          </div>
                          <div style={{display:`flex`,flexDirection:`column`, marginLeft:`10px`, marginRight:`30px`}}>
                            <span style={{textAlign:`left`, fontWeight:`bold`, fontSize:`22px`}}>Learn Spanish</span>
                            <span style={{textAlign:`left`,color:`black`,fontSize:`18px`}}>Hablas Espanol? Learn Colombian Spanish with us!</span>
                          </div>
                        </div>
                      </Link>
                      <Link to="/travelSafely" style={{width:`100%`,marginLeft:`5px`,marginBottom:`15px`}}>
                        <div style={{width:`100%`,display:`flex`,flexDirection:`row`,padding:`5px`}}>
                          <div style={{width:`35px`}}>
                            <FontAwesomeIcon style={{width:`35px`, height:`70px`,color:`rgb(255, 68, 0)`}}  icon={faPassport} />
                          </div>
                          <div style={{display:`flex`,flexDirection:`column`, marginLeft:`10px`, marginRight:`30px`}}>
                            <span style={{textAlign:`left`, fontWeight:`bold`, fontSize:`22px`}}>Travel Consulting</span>
                            <span style={{textAlign:`left`,color:`black`,fontSize:`18px`}}>Need some help managing and planning your trip? We can help!</span>
                          </div>
                        </div>
                      </Link>
                      <div style={{width:`100%`, display:`flex`,flexDirection:`row`,padding:`5px`,marginLeft:`5px`,marginBottom:`15px`}}>
                        <div style={{width:`35px`}}>
                          <FontAwesomeIcon style={{width:`35px`, height:`70px`,color:`rgb(255, 68, 0)`}}  icon={faUserLock} />
                        </div>
                        <div style={{display:`flex`,flexDirection:`column`, marginLeft:`10px`, marginRight:`30px`}}>
                          <span style={{textAlign:`left`, fontWeight:`bold`, fontSize:`22px`}}>Members Area</span>
                          <span style={{textAlign:`left`,color:`black`,fontSize:`18px`}}>Join our members area for exclusive Colombian content!</span>
                        </div>
                      </div>
                   </div>
                   <div style={{display:`flex`,flexDirection:`column`, textAlign:`left`, fontSize:`25px`, fontWeight:`bold`}}>
                   <Link className="navbar-item" to="/purchase/purchase">
                    Pricing
                    </Link>
                    <Link className="navbar-item" to="/about">
                      Who we are
                    </Link>
                      <Link className="navbar-item" to="/blog">
                        Blog
                    </Link>
                    </div>
                 </div>
                 </div>
    )
  }
}

export default NavbarDropDown
