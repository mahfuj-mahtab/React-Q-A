import React from 'react'

function RightContainer() {
  return (
    <div>
         <div className="right_main_container">
            
            <div className="overview">
                <p className="p1">10<br/>  Questions</p>
                <p className="p1">20<br/>Answered</p>
                <p className="p1">22%<br/>Answered</p>

            </div>
            
            <div className="top_user">
                <h3>Top Users</h3>
              
                <div className="user">
                    <a href="/profile/user/{{ value.user }}"><img src="/media/{{ value.img }}"  alt="" className="top_user_logo"/></a>
                    <h4 className="name">Mahfuj Mahtab Mohot</h4>
                </div>
               
               
            </div>
         </div>
    </div>
  )
}

export default RightContainer