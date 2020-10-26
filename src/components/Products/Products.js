import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductCard from "./ProductCard"

const containerStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  padding: "1rem 0 1rem 0",
}
const Products = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query ProductPrices {
          prices: allStripePrice(
            filter: { active: { eq: true } }
            sort: { fields: [unit_amount] }
          ) {
            edges {
              node {
                id
                active
                currency
                unit_amount
                product {
                  id
                  name
                  images
                }
              }
            }
          }
        }
      `}
      render={({ prices }) => {
        // Group prices by product
        const products = {}
        for (const { node: price } of prices.edges) {
          const product = price.product
          if (!products[product.id]) {
            products[product.id] = product
            products[product.id].prices = []
          }
          products[product.id].prices.push(price)
        }
        
        let productsToDisplay = Object.values(products).filter(product => {
          if(product.name.indexOf(props.productsToDisplay) >= 0) {
            return product.name
          }
          
          //return product.name === props.productsToDisplay;     
          //console.log(products)                                       
        })

        if(props.productsToDisplay === "All") {
          productsToDisplay = products;
        }

        return (
          <div style={containerStyles}>
            {Object.keys(productsToDisplay).map(key => (
                <ProductCard key={productsToDisplay[key].id} product={productsToDisplay[key]} />
            ))}
          </div>
        )
      }}
    />
  )
}
export default Products