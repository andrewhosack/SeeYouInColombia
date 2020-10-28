import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Link } from 'gatsby'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline" style={{flexDirection:`column`}}>
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6" id={item.sectionID}  style={{width:`100%`}}>
        <section  className="section" style={{display:`flex`, width:`100%`, justifyContent:`center`}}>

        <h2 className="has-text-weight-semibold is-size-2" style={{textAlign:`center`}}>
                {item.title}
              </h2>
        
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
          <p style={{marginTop:'20px'}}><span style={{fontWeight:`bold`}}>Description: </span>{item.text}</p>
          <p><span style={{fontWeight:`bold`}}>Pricing: </span>{item.pricing}</p>
        </section>
          <section className="section" style={{display:`flex`, width:`100%`, flexWrap:`wrap`, justifyContent:`space-evenly`}}>
        
                    <Link className="btn" to="../#contactForm" style={{minWidth:`230px`, margin:`5px`}}>
                      Contact us with questions
                    </Link>

                    <Link className="btn" to={item.button2Link} style={{minWidth:`230px`, margin:`5px`}}>
                      {item.button2Text}
                    </Link>
                    
                    {/* <a className="btn"  style={{minWidth:`230px`, margin:`5px`}} href="https://calendly.com/enjoysafetravelscolombia/30-minute-colombia-consultation" target="_blank">Schedule a call with us</a> */}
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
      pricing: PropTypes.string,
      sectionID: PropTypes.string,
      button2Text: PropTypes.string,
      button2Link: PropTypes.string,
    })
  ),
}

export default FeatureGrid
