import React, { useState } from "react"
import getStripe from "../../utils/stripejs"
import { Link } from 'gatsby'

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: "1rem",
  marginBottom: "1rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  maxWidth: "300px",
  borderTop: `1.5px solid red`, 
  padding: `10px`,
  borderTopRightRadius: `12px`,
  borderTopLeftRadius: `12px`,
}
const buttonStyles = {
  display: "block",
  fontSize: "13px",
  textAlign: "center",
  color: "#000",
  padding: "12px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
  marginTop: "5px",
  cursor: "pointer",
}
const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}
const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}


const handleQuantitySelect = (event, product) => {
  
  //Setting the price on the product card depending on the quantity
  document.getElementById(product.name).querySelector("#priceSpan").innerHTML = formatPrice((product.prices[0].unit_amount * event), product.prices[0].currency)
 
  //Setting the quantity on the product card after quantity has been selected
  if( event < 3) {
    document.getElementById(product.name).querySelector("#quantitySpan").innerHTML = `${event} sessions`
  }
  else if(event >=3 && event <= 5) {
    //event++;
    document.getElementById(product.name).querySelector("#quantitySpan").innerHTML = `${event} sessions (+1 bonus)`
  }
  else if(event >=6 && event <= 8) {
    //event = Number(event) + 2;
    document.getElementById(product.name).querySelector("#quantitySpan").innerHTML = `${event} sessions (+2 bonus)`
  }
  else if(event >=9) {
    //event = Number(event) + 3;
    document.getElementById(product.name).querySelector("#quantitySpan").innerHTML = `${event} sessions (+3 bonus)`
  }
  

}

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false)
  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    const price = new FormData(event.target).get("priceSelect")

    let quantitySelected = new FormData(event.target).get("quantitySelect")

    if (!quantitySelected) {
      quantitySelected = 1
    }

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price, quantity: Number(quantitySelected) }],
      successUrl: `${window.location.origin}/purchase/completepurchase?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/purchase/purchase`,
    })
    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <div style={cardStyles}>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ border: "none" }}>
          <legend>
            <h4>{product.name}</h4>
          </legend>
          <img src={product.images} alt="product description"/>

          {product.name.indexOf("1 hour - Colombia Presentation") >= 0  &&
          <div>
            You will choose up to 3 of the topics to focus on during your presentation.
            <Link to="../../travelsafely/#customizedPresentation" style={{minWidth:`230px`, margin:`5px`}}>
              Read More...
            </Link>
          </div>
          }
          {product.name.indexOf("Full Colombia Presentation") >= 0  &&
          <div>
            All encompassing presentation and discussion about Colombia!
            <Link to="../../travelsafely/#customizedPresentation" style={{minWidth:`230px`, margin:`5px`}}>
              Read More...
            </Link>
          </div>
          }
          {product.name.indexOf("Group Spanish Lessons") >= 0  &&
          <div>
            Join together with family or friends to learn Spanish as a Group!
            <Link to="../../learnspanish/#customizedSpanishLessons" style={{minWidth:`230px`, margin:`5px`}}>
              Read More...
            </Link>
          </div>
          }
          {product.name.indexOf("Private Spanish Lessons") >= 0  &&
          <div>
            If you prefer one on one learning, this is a great option.
            <Link  to="../../learnspanish/#customizedSpanishLessons" style={{minWidth:`230px`, margin:`5px`}}>
              Read More...
            </Link>
          </div>
          }
          {product.name.indexOf("3 Class Full Curriculum") >= 0  &&
          <div>
            A 3 class Spanish package to prepare you for a trip to Colombia.
            <Link to="../../learnspanish/#FullCurriculum" style={{minWidth:`230px`, margin:`5px`}}>
              Read More...
            </Link>
          </div>
          }
          {product.name.indexOf("5 Class Full Curriculum") >= 0  &&
          <div>
            A 5 class Spanish package to help you dive a bit deeper into the Spanish language.
            <Link to="../../learnspanish/#FullCurriculum" style={{minWidth:`230px`, margin:`5px`}}>
              Read More...
            </Link>
          </div>
          }
          {product.name.indexOf("10 Class Full Curriculum") >= 0  &&
          <div>
            A 10 class Spanish package for those who want to show off their skills upon arrival to Colombia.
            <Link to="../../learnspanish/#FullCurriculum" style={{minWidth:`230px`, margin:`5px`}}>
              Read More...
            </Link>
          </div>
          }

          <div style={{display:"flex", justifyContent: "space-between", margin:"3px"}}>
            <label className="hidden">
            Price: {" "}
            <select name="priceSelect" >
              {product.prices.map(price => (
                <option key={price.id} value={price.id}>
                  {formatPrice(price.unit_amount, price.currency)}
                </option>
              ))}
            </select>
            </label>

            <label>
            Price: {" "}
            <span>
              {formatPrice((product.prices[0].unit_amount), product.prices[0].currency)}
            </span>
            </label>

            {product.name.indexOf("Lessons") >= 0  &&
            <label>
            Quantity:{" "}
            <select name="quantitySelect" id="quantitySelect" onChange={(event) => handleQuantitySelect(event.target.value, product)} style={{cursor: "pointer"}}>
              <option key="1" value="1">1 session</option>
              <option key="2" value="2">2 sessions</option>
              <option key="3" value="3">3 sessions</option>
              <option key="4" value="4">4 sessions</option>
              <option key="5" value="5">5 sessions</option>
              <option key="6" value="6">6 sessions</option>
              <option key="7" value="7">7 sessions</option>
              <option key="8" value="8">8 sessions</option>
              <option key="9" value="9">9 sessions</option>
              <option key="10" value="10">10 sessions</option>
            </select>
            </label>
            }
          </div>
        </fieldset>
        
        <div>

        {product.name.indexOf("Lessons") >= 0  &&
          <div id={product.name}>
            <div id="totalPriceDiv">
              {/* Total Price: {formatPrice((product.prices[0].unit_amount * document.getElementById("quantitySelect").value), product.prices[0].currency)} */}
              Total Price: <span id="priceSpan" style={{fontWeight:`bold`}}>{formatPrice((product.prices[0].unit_amount), product.prices[0].currency)}</span>
            </div>
            <div id="totalClassDiv">
              Total Classes: <span id="quantitySpan" style={{fontWeight:`bold`}}>1</span>
            </div>
          </div>
          }

          <div style={{width:`100%`, display:`flex`, justifyContent:`flex-end`}}>
          <button
            disabled={loading}
            style={
              loading
                ? { ...buttonStyles, ...buttonDisabledStyles }
                : buttonStyles
            }
          >
            BUY ME
          </button>
          </div>
          
          {(product.name.indexOf("Lessons") >= 0  || product.name.indexOf("Curriculum") >= 0) &&
          <div style={{width:'100%', display:'flex', justifyContent:'flex-start', marginTop:`10px`}}>           
              {/* <ul style={{listStyleType:`square`, color:`red`}}> */}
              <p><span style={{fontWeight:`bold`}}>Instructions: </span>Schedule the evaluation call via Calendly after the purchase is complete</p>
              {/* </ul> */}
            </div>
          }
          {product.name.indexOf("Presentation") >= 0  &&
          <div style={{width:'100%', display:'flex', justifyContent:'flex-start', marginTop:`10px`}}>           
              {/* <ul style={{listStyleType:`square`, color:`red`}}> */}
                <p><span style={{fontWeight:`bold`}}>Instructions: </span>Schedule the presentation via Calendly after the purchase is complete</p>
              {/* </ul> */}
            </div>
          }
          

        </div>
      </form>
    </div>
  )
}
export default ProductCard