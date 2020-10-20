import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/gabriel-porras-5w80e_wanvi-unsplash.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              //boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          //backgroundColor: '#f40',
          backgroundColor: 'white',
          //color: 'white',
          color: '#f40',
          padding: '1rem',
          opacity: '.9',
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
