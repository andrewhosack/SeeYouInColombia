import React from 'react'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  
  render() {
    return (
      <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you for your purchase!</h1>
          <p>We will be contacting you with further details!</p>
        </div>
      </div>
    </section>
  </Layout>
    )
  }
}
