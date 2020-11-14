import React from "react"

const cardStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: ".5rem",
  margin: "5px",
  boxShadow: "2px 2px 10px 0 rgba(46,61,73,.2)",
  backgroundColor: "#ffff88",
  borderRadius: "6px",
  // maxWidth: "125px",
  fontSize:"1.1em",
}

const ProductCard = (props) => {
 return (
    <div style={cardStyles}>
      {props.topic}
    </div>
  )
}
export default ProductCard