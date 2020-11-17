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
      <div className="navbar-start has-text-centered" style={{width:`100%`, display:`flex`, justifyContent:`flex-end`, marginRight:`150px`}}>
        <div className="tooltip desktopView" style={{display:`flex`, flexDirection:`row`,alignItems:`center`,justifyContent:`center`}}>
                <span style={{width:`100px`}}>Products <FontAwesomeIcon style={{height:`20px`, marginBottom:`5px`, marginLeft:`3px`}}  icon={faSortDown} /></span>
                <div className="tooltiptext box" style={{display:`flex`,flexDirection:`row`}}>
                {/* <div 
                   
                  style={{display:`flex`,flexDirection:`row`}}
                  >  */}
                
                  <div style={{width:`30%`}}>
                    <div style={{height:`250px`, display:`flex`, flexDirection:`column`}}>
                      
                      <div style={{textAlign:`left`, marginLeft:`15px`, marginTop:`20px`}}><span style={{fontWeight:`bold`, fontSize:`21px`}}>What would you like to do?</span></div>
                      <div style={{textAlign:`left`, marginLeft:`15px`}}>We have everything you'll need to make a trip or a move to Colombia successful!</div>
                    </div>
                  </div>
                    <div style={{display:`flex`,flexWrap:`wrap`,width:`70%`, height:`250px`}}>
                      <Link to="/travelsafely/#customizedPresentation" style={{width:`50%`, height:`125px`}}>
                        <div style={{width:`100%`, height:`125px`, display:`flex`,flexDirection:`row`,padding:`15px`}}>
                          <div style={{width:`35px`}}>
                            <FontAwesomeIcon className="test" style={{width:`35px`, height:`70px`,color:`rgb(255, 68, 0)`}}  icon={faFilePowerpoint} />
                          </div>
                          <div style={{display:`flex`,flexDirection:`column`, marginLeft:`10px`}}>
                            <span style={{textAlign:`left`, fontWeight:`bold`, fontSize:`25px`}}>Presentations</span>
                            <span style={{textAlign:`left`,color:`black`}}>Join us for a presentation about Colombia!</span>
                          </div>
                        </div>
                      </Link>
                      <Link to="/learnspanish" style={{width:`50%`, height:`125px`}}>
                        <div style={{width:`100%`, height:`125px`, display:`flex`,flexDirection:`row`,padding:`15px`}}>
                          <div style={{width:`35px`}}>
                            <FontAwesomeIcon style={{width:`35px`, height:`70px`,color:`rgb(255, 68, 0)`}}  icon={faSchool} />
                          </div>
                          <div style={{display:`flex`,flexDirection:`column`, marginLeft:`10px`}}>
                            <span style={{textAlign:`left`, fontWeight:`bold`, fontSize:`25px`}}>Learn Spanish</span>
                            <span style={{textAlign:`left`,color:`black`}}>Hablas Espanol? Learn Colombian Spanish with us!</span>
                          </div>
                        </div>
                      </Link>
                      <Link to="/travelsafely" style={{width:`50%`, height:`125px`}}>
                        <div style={{width:`100%`, height:`125px`, display:`flex`,flexDirection:`row`,padding:`15px`}}>
                          <div style={{width:`35px`}}>
                            <FontAwesomeIcon style={{width:`35px`, height:`70px`,color:`rgb(255, 68, 0)`}}  icon={faPassport} />
                          </div>
                          <div style={{display:`flex`,flexDirection:`column`, marginLeft:`10px`}}>
                            <span style={{textAlign:`left`, fontWeight:`bold`, fontSize:`25px`}}>Travel Consulting</span>
                            <span style={{textAlign:`left`,color:`black`}}>Need some help managing and planning your trip? We can help!</span>
                          </div>
                        </div>
                      </Link>
                      <div style={{width:`50%`, height:`125px`, display:`flex`,flexDirection:`row`,padding:`15px`}}>
                        <div style={{width:`35px`}}>
                          <FontAwesomeIcon style={{width:`35px`, height:`70px`,color:`rgb(255, 68, 0)`}}  icon={faUserLock} />
                        </div>
                        <div style={{display:`flex`,flexDirection:`column`, marginLeft:`10px`}}>
                          <span style={{textAlign:`left`, fontWeight:`bold`, fontSize:`25px`}}>Members Area</span>
                          <span style={{textAlign:`left`,color:`black`}}>Join our members area for exclusive Colombian content!</span>
                        </div>
                      </div>
                   </div>
                 </div>
                 
              </div> 

              
              {/* Company tab */}
              {/* <Link className="navbar-item desktopView" to="/about">
                Who we are
              </Link> */}

              <Link className="navbar-item desktopView" to="/purchase/purchase" style={{width:`100px`, display:`flex`, justifyContent:`center`}}>
                Pricing
              </Link>
              
              <div className="tooltip desktopView" style={{display:`flex`, flexDirection:`row`,alignItems:`center`,justifyContent:`center`}}>
              <span style={{width:`100px`}}>Company <FontAwesomeIcon style={{height:`20px`, marginBottom:`5px`, marginLeft:`3px`}}  icon={faSortDown} /></span>
                <div className="tooltiptext box" style={{display:`flex`,flexDirection:`column`, width:`200px`,height:`110px`,marginLeft:`-100px`}}>
                    <div style={{display:`flex`,flexDirection:`column`,width:`100%`, height:`100px`}}>
                      <Link to="/about" style={{height:`50px`,display:`flex`, alignItems:`center`,justifyContent:`center`}}>
                        Who we are
                      </Link>
                      <Link to="/contact/" style={{height:`60px`,display:`flex`, alignItems:`center`,justifyContent:`center`}}>
                        Contact Us
                      </Link>
                   </div>
                 </div>
                 
              </div> 
              <Link className="navbar-item desktopView" to="/blog" style={{width:`100px`, display:`flex`, justifyContent:`center`}}>
                Blog
              </Link>
              </div>
    )
  }
}

export default NavbarDropDown
