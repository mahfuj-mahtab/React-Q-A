import React from 'react'

function Question() {
  return (
    <div>
        <div className="question">
                <a href="/profile/user/{{ value.user }}" className="logo_a">
                <div className="logo_section">
                <img className="logo_img" src="/media/{{ value.img }}" alt=""/>
            </div></a>
            <div className="rest">
                <a className="title_a" href="/answer/{{ value.id }}"><h3 className="question_title">This is question</h3></a>
                <div className="category_section">
                    <a href="/category/{{ value.cat_name }}" className="cat">Cat</a>
                   
                
                </div>
                <p className="time">12 march 2023</p>
                <p className="total_ans"><b>11 Answered</b></p> 

            </div>
            </div>
    </div>
  )
}

export default Question