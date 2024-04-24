import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>

    
  <div className="header">
      <div className="main_header">
          <h3 className="logo"><Link to="/" className="first_logo"> ASK.COM </Link></h3>
          <form action="/search" method="GET">
              <input type="text" className="search" name="search" id="search" placeholder="Search Your Question"/>
              <input type="submit" value="Search" className="search_btn"/>
          </form>
         
            {/* <a href="/profile" className="profile_picture_a"><img src="/media/{{my_users.img }}" alt="" className="profile_picture"/></a>
            <a className="register-btn" href="/logout">Log out</a> */}
          

          
          {/* <a  href="/signup">Login</a> */}
          <Link to = "login" className="register-btn">Login</Link>
          
          
      </div>
     
  </div>

    </div>
  )
}

export default Header