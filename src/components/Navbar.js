import React from 'react'
import { Link } from 'gatsby'
import flatLogo from '../img/logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { faFilePowerpoint } from '@fortawesome/free-solid-svg-icons'
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import { faPassport } from '@fortawesome/free-solid-svg-icons'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'

import NavbarDropDown from '../components/NavbarDropDown'
import NavbarMobile from '../components/NavbarMobileView'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      dropDownsActive: true,
      navBarDropDownActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
        // disableDropDowns: !this.state.disableDropDowns,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })

          //   this.state.dropDownsActive
          // ? this.setState({
          //   navBarDropDownActiveClass: '',
          //   })
          // : this.setState({
          //   navBarDropDownActiveClass: 'is-active',
          //   })
      }
    )
  }

  

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={flatLogo} alt="Enjoy. Safe. Travel. Colombia." style={{ width: '280px', height: '40px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
            style={{fontSize:`1.2rem`}}
          >
              <NavbarDropDown/>
              {/* <div on={() => this.toggleHamburger()}> */}
              <NavbarMobile/>
              {/* </div> */}
            {/* <div className="navbar-start has-text-centered"> */}
              {/* This is for Spanish Lesson purchases */}
              
              {/* <Link className="navbar-item" to="/">
                Home
              </Link> */}
              
              {/* <Link className="navbar-item" to="/about">
                Is it Safe in Colombia?
              </Link> */}
              {/* <Link className="navbar-item" to="/travelsafely">
                Travel Safely
              </Link> */}
            
            {/* {(this.state.active != 1)  &&
              <NavbarDropDown/>
            } */}
              {/* {(this.state.active == 1) &&
              <div><NavbarDropDown/>
              <div className="navBarActiveDropDown" style={{display:`flex`,flexWrap:`wrap`,width:`10%`, height:`56px`}}>
              <Link to="/travelSafely/#customizedPresentation" style={{width:`50%`, height:`125px`}}>
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
              <Link to="/learnSpanish" style={{width:`50%`, height:`125px`}}>
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
              <Link to="/travelSafely" style={{width:`50%`, height:`125px`}}>
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
              {/* // <div className="navbar-item" >
              // <Link className="navbar-item hide" to="/travelsafely">
              //   Travel Safely
              // </Link>
              // <Link className="navbar-item" to="/learnspanish">
              //   Learn Spanish with us
              // </Link>
              // </div> 
              </div>
              } */}
             {/* <Link className="navbar-item" to="/learnspanish">
                Learn Spanish with us
              </Link> */}
              {/* <Link className="navbar-item" to="/products">
                Services
              </Link> */}
              {/* <Link className="navbar-item" to="/purchase/purchase">
                Pricing
              </Link>
              <Link className="navbar-item" to="/about">
                Who we are
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link> */}
            {/* </div> */}
            {/* <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Members area</button>
                 <span className="icon">
                  <img src={github} alt="Github" />
                </span> *
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
