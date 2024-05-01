import React from 'react'
import Question from './Question'
import RightContainer from './RightContainer'
import Footer from './Footer'

function Container() {
  return (
    <div>
            <div className="container bg">
        
        <div className="main_container">
            
         <div className="left_main_container">

            

            <Question/>


    

         </div>
        <RightContainer/>
        </div>
        
        <div className="pagination_section">
            <div className="main_pagination_section">

                <a href="" className="page_link">1</a>
                <a href="" className="page_link">1</a>
                <a href="" className="page_link">1</a>
                <a href="" className="page_link">1</a>
                <a href="" className="page_link">1</a>
                <a href="" className="page_link">1</a>
                <a href="" className="page_link">1</a> 
            </div>

        </div>
      
      
        
       <Footer/>   
             
</div>
    </div>
  )
}

export default Container