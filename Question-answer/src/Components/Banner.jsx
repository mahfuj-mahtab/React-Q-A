import React from 'react'
import { Link } from 'react-router-dom'
function Banner() {
  return (
    <div>
        <div className="banner">
    <div className="main_banner">
        <h2>Welcome To ASK.COM</h2>
        <p>Ask Any Question And <br/> Get Answered</p>
        <Link to="/ask_question"  className="ask_question">Ask  Question</Link>
    </div>
        
</div>
    </div>
  )
}

export default Banner