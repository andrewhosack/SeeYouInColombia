import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Link } from 'gatsby'

//import remark from 'remark'
//import remarkHTML from 'remark-html'



// const toHTML = value => remark()
//                     .use(remarkHTML)
//                     .processSync(value)
//                     .toString()

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
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p><span style={{fontWeight:`bold`}}>Description: </span>{item.text}</p>
          <p><span style={{fontWeight:`bold`}}>Pricing: </span>{item.pricing}</p>
        </section>
        <section className="section" style={{display:`flex`, width:`100%`}}>
        <div style={{width:`50%`, display:`flex`, justifyContent:`center`}}>
                    <Link className="btn" to="/travelsafe/#contactForm">
                      Contact Us For Full Details
                    </Link>
          </div>
          <div style={{width:`50%`, display:`flex`, justifyContent:`center`}}>
                    {/* <Link className="btn" to="/products">
                      Schedule a call with us
                    </Link> */}
                    <a className="btn" href="https://calendly.com/enjoysafetravelscolombia/30-minute-colombia-consultation" target="_blank">Schedule a call with us</a>
          </div>
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
    })
  ),
}

export default FeatureGrid
