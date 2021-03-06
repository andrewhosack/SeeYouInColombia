import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import FeaturesIndex from '../components/FeaturesIndex'
import BlogRoll from '../components/BlogRoll'

import ContactForm from '../components/ContactForm'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `right 35% bottom 45%`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            //boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          //backgroundColor: '#f40',
          backgroundColor: 'white',
          //color: 'white',
          color: '#f40',
          padding: '.25em',
          opacity: '.9',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            //boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          //backgroundColor: '#f40',
          backgroundColor: 'white',
          //color: 'white',
          color: '#f40',
          padding: '.25em',
          opacity: '.9',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient" style={{paddingTop:`3rem !important`, paddingBottom:`3rem !important`, paddingLeft:`.75rem`, paddingRight:`.75rem`}}>
      <div className="container">
        <div className="section" style={{paddingTop:`3rem !important`, paddingBottom:`3rem !important`, paddingLeft:`.75rem`, paddingRight:`.75rem`}}>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    {/* <h3 className="subtitle">{mainpitch.description}</h3> */}
                    <h3 className="subtitle">Whether you take advantage of one of our in-depth{" "}
                    <Link to="/travelsafely/#customizedPresentation" style={{textDecoration:`underline`}}>Q&A presentations</Link>,{" "}
                    <Link to="/learnspanish/"  style={{textDecoration:`underline`}}>learn Colombian Spanish and phrases with us</Link>,{" "}or{" "}
                    <Link to="/travelsafely/#travelConsulting/"  style={{textDecoration:`underline`}}>you want 24/7 support while you plan or travel Colombia</Link>,  you're going to find a new friend and partner in Enjoy Safe Travels Colombia.</h3>
                  </div>
                </div>
                {/* <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div> */}
                <FeaturesIndex gridItems={intro.blurbs} />
                {/* <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div> */}
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                  <div style={{marginTop:'50px'}}>
                    <ContactForm formName="contactFormTravelSafe"></ContactForm>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            sectionID
            title
            text
            findOutMoreLink
          }
          heading
          description
        }
      }
    }
  }
`
