import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

import Products from "../../components/Products/Products"

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 id="presentations">Presentation on Colombia Purchase Options:</h1>
              <p>
                Here you can choose between the two different presentation options. We 
                offer a one hour presentation where you can choose from various topics to 
                learn about. We also have a complete presentation with all topics included which lasts
                about an hour and a half. The presentation will be an open format and we welcome questions
                throughout the call!
              </p>
              <Products productsToDisplay="Presentation" />
              <h1 id="spanishLessons">Group or Individualized Spanish Lessons:</h1>
              <p>
                You can choose how many classes you'd like to purchase. There is a discount on classes the more 
                classes you purchase at once. With the Group and Individualized classes we will focus on the topics
                you find important and we'll also offer our suggestions on what you should learn and the process we'll take!
              </p>
                <Products productsToDisplay="Lessons" />
              <h1 id="spanishCurriculum">Full Colombian Spanish Curriculum Options:</h1>
              <p>
                We have created 3, 5, and 10 class curriculums to get you up to speed with Colombian Spanish. We'll provide you with
                study guides, material to work on from class to class, and all the vocabulary you will need to survive a trip
                in Colombia. The curriculum you choose will be determined by the interest you have in Spanish and how deeply you'd
                like to take your understanding.
              </p>
                <Products productsToDisplay="Curriculum" />
              {/* <ul>
                <li>
                  <Link to="/contact">Basic contact form</Link>
                </li>
                <li>
                  <Link to="/contact/file-upload/">Form with file upload</Link>
                </li>
              </ul>

              <h2>Troubleshooting</h2>
              <h3>Forms stop working after upgrading to Gatsby v2</h3>
              <p>
                This can be caused by the offline-plugin.{' '}
                <a href="https://github.com/gatsbyjs/gatsby/issues/7997#issuecomment-419749232">
                  Workaround
                </a>{' '}
                is to use <code>?no-cache=1</code> in the POST url to prevent
                the service worker from handling form submissions
              </p>
              <h3>Adding reCAPTCHA</h3>
              <p>
                If you are planning to add reCAPTCHA please go to{' '}
                <a href="https://github.com/imorente/gatsby-netlify-form-example">
                  imorente/gatsby-netlify-form-example
                </a>{' '}
                for a working example.
              </p> */}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
