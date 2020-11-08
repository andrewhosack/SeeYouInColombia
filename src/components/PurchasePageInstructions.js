import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { fa } from '@fortawesome/free-solid-svg-icons'



const cardStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: ".5rem",
  margin: "5px",
  // boxShadow: "2px 2px 10px 0 rgba(46,61,73,.2)",
  // backgroundColor: "#ffff88",
  borderRadius: "6px",
}

const PurchasePageInstructions = (props) => {
 return (
  <div style={{width:'100%', display:'flex', justifyContent:'flex-start', marginBottom: '20px'}}>
    <div style={{display:'flex', justifyContent:'flex-start', flexDirection:`column`}}>              
      <ul style={{listStyleType:`square`, color:`red`}}>
        <li>Step 1: {props.step1}</li>
        <li>Step 2: {props.step2}</li>
      </ul>
    
    </div>
  </div>
  )
}
export default PurchasePageInstructions