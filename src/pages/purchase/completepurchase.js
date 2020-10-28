import React from 'react'
import Layout from '../../components/Layout'

import ContactForm from '../../components/ContactForm_Payment'


export default class Index extends React.Component {


  

  constructor(props) {
    super(props);
    this.state = { 
      itemPurchased: '' ,
      amount_total: '',
      currency: '',
    };
  }
  
  componentDidMount() {
  
  let sessionID = window.location.search.substring(12,400)

  if(sessionID) {
  const url = "https://api.stripe.com/v1/checkout/sessions/" + sessionID + "/line_items?limit=1";
  fetch(url, {
      method: 'GET',
      headers: {
        Authorization : 'Bearer ' + process.env.GATSBY_STRIPE_SECRET_KEY,
      },
  })
  .then(res => res.json())
      .then(
        (result) => {
          this.setState({itemPurchased: result.data[0].description})
        },
        (error) => {
          console.log(error)
        }
      )
    
      const url2 = "https://api.stripe.com/v1/checkout/sessions/" + sessionID;
  fetch(url2, {
      method: 'GET',
      headers: {
        Authorization : 'Bearer ' + process.env.GATSBY_STRIPE_SECRET_KEY,
      },
  })
  .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({amount_total: result.amount_total, currency: result.currency})
        },
        (error) => {
          console.log(error)
        }
      )
    
    }

  }
  
  render() {
    
    const formatPrice = (amount, currency) => {
      let price = (amount / 100).toFixed(2)
      let numberFormat = new Intl.NumberFormat(["en-US"], {
        style: "currency",
        currency: currency,
        currencyDisplay: "symbol",
      })
      return numberFormat.format(price)
    }
    
    

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Thank you for purchasing {this.state.itemPurchased}, which cost {formatPrice(this.state.amount_total, 'usd')}.</h1>
              <p>We will be contacting you with further details!</p>
            </div>
            <ContactForm></ContactForm>
          </div>
        </section>
      </Layout>
    )
  }
}
