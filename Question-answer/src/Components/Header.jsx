import React from 'react'

function Header() {
  return (
    <div>

    
  <div className="header">
      <div className="main_header">
          <h3 className="logo"><a href="/" className="first_logo"> ASK.COM </a></h3>
          <form action="/search" method="GET">
              <input type="text" className="search" name="search" id="search" placeholder="Search Your Question"/>
              <input type="submit" value="Search" className="search_btn"/>
          </form>
         
            {/* <a href="/profile" className="profile_picture_a"><img src="/media/{{my_users.img }}" alt="" className="profile_picture"/></a>
            <a className="register-btn" href="/logout">Log out</a> */}
          

          
          <a className="register-btn" href="/signup">Login</a>
          
          
      </div>
     
  </div>

    </div>
  )
}

export default Header