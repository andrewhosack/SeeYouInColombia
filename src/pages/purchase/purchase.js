import React from 'react'
import Layout from '../../components/Layout'

import Products from "../../components/Products/Products"
import PresentationCard from "../../components/Products/PresentationCards"

import PurchasePageInstructions from "../../components/PurchasePageInstructions"

export default class Index extends React.Component {
  
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 id="presentations">Presentations on Colombia</h1>
              <p style={{textAlign:`justify`}}>
                Here you can choose between the two different presentation options. We 
                offer a one hour presentation where you can choose from various topics to 
                learn about. We also have a complete presentation with all of the topics included which lasts
                about an hour and a half. The presentation will be an open format and we welcome questions
                throughout the call! 
                {/* <span style={{fontWeight:`bold`}}>If you purchase the 1 hour presentation,
                you will select the topics you'd like to learn more about after the purchase is completed.</span> */}
              </p>
                <h2 style={{textAlign:'center'}}>
                Topics to learn about in the presentation:
              </h2>
              <div style={{width:'100%', display:'flex', justifyContent:'center', marginBottom: '20px'}}>
                <div style={{display:'flex', flexWrap:'wrap', borderStyle:'solid', maxWidth:'770px', justifyContent:'center', borderColor: `gainsboro`}}>              
                  <PresentationCard topic="The major cities and touristic towns" />
                  <PresentationCard topic="Real safety tips for travel in Colombia" />
                  <PresentationCard topic="General Travel Tips" />
                  <PresentationCard topic="Lessons about the culture in Colombia" />
                  <PresentationCard topic="What to expect from Colombia" />
                  <PresentationCard topic="Political, Social, Economic context" />
                  <PresentationCard topic="Annual events held within Colombia" />
                  <PresentationCard topic="Best times during the year to travel" />
                  <PresentationCard topic="General cost to travel" />
                </div>
              </div>
              <Products productsToDisplay="Presentation" />
              <PurchasePageInstructions step1="Purchase a presentation" step2="Schedule the presentation via Calendly after the purchase is complete"></PurchasePageInstructions>
              <h1 id="spanishLessons">Group or Individual Spanish Lessons:</h1>
              <p style={{textAlign:`justify`}}>
                You can choose how many classes you'd like to purchase. There is a discount when you purchase a higher quantity of classes.
                With the Group and Individual classes we will focus on the topics you find important and we'll also offer our suggestions about 
                what you should learn.
                <span style={{fontWeight:`bold`}}>  If you are puchasing Group Classes with a friend(s), each student will need to purchase the classes separately.</span>
              </p>
              <Products productsToDisplay="Lessons" />
              <PurchasePageInstructions step1="Purchase the Spanish Lessons you are most interested in" step2="Schedule the evaluation call via Calendly after the purchase is complete"></PurchasePageInstructions>
              <h1 id="spanishCurriculum">Full Colombian Spanish Curriculum Options:</h1>
              <p style={{textAlign:`justify`}}>
                We have created 3, 5, and 10 class Spanish curriculums to get you up to speed with Colombian Spanish. We'll provide you with
                study guides, material to work on from class to class, all the vocabulary you will need to survive a trip
                in Colombia, and much more. The curriculum you choose will be determined by the interest you have in Spanish and how deeply you'd
                like to take your understanding.
              </p>
              <Products productsToDisplay="Curriculum" />
              <PurchasePageInstructions step1="Purchase the Spanish Curriculum you are most interested in" step2="Schedule the evaluation call via Calendly after the purchase is complete"></PurchasePageInstructions>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
