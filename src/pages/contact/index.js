import React from 'react'
import Layout from '../../components/Layout'

import ContactForm from '../../components/ContactForm'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
        <ContactForm formName="contactPageTravelSafe"></ContactForm>
        </section>
      </Layout>
    )
  }
}
