import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { Link } from 'gatsby'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6" id={item.sectionID}  style={{width:`100%`}}>
        <section  className="section">

        <h3 className="has-text-weight-semibold is-size-2" style={{textAlign:`center`}}>
                {item.title}
              </h3>
        
        {/* <span style={{fontWeight:`bold`, fontSize:`3em`}}>{item.title}</span> */}
       
        </section>
          <section>
          <div className="has-text-centered">
            <div
              style={{
                width: '290px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p style={{marginTop:'20px', fontSize:`1.25rem`, textAlign:`justify`}}> {/*<span style={{fontWeight:`bold`}}>Description: </span> */}{item.text}</p>
        </section>
          <section className="section" style={{display:`flex`, width:`100%`, flexWrap:`wrap`, justifyContent:`space-evenly`}}>
        
            <Link className="btn" to={item.findOutMoreLink} style={{minWidth:`230px`, margin:`5px`}}>
              More info...
            </Link>

            <Link className="btn" to="/#contactForm" style={{minWidth:`230px`, margin:`5px`}}>
              Contact Us
            </Link>
         
                    
                    {/* <a className="btn"  style={{minWidth:`230px`, margin:`5px`}} href="https://calendly.com/enjoysafetravelscolombia/20-minute-colombia-consultation" target="_blank">Schedule a call with us</a> */}
          
          </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
      findOutMoreLink: PropTypes.string,
      sectionID: PropTypes.string,
    })
  ),
}

export default FeatureGrid
