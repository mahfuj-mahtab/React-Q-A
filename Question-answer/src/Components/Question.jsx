import React, { useCallback ,useEffect,useState} from 'react'
import questionService from '../Appwrite/Questions'
function Question() {
  const [questions, setquestions] = useState([])
  useEffect(
    () => {
      questionService.showAllQuestions().then((posts)=>{
        if(posts){
          // console.log(posts);
          setquestions(posts.documents);
        }
      })
    },
    [],
  )
  
  return (
    <div>
      {questions.map((question)=>(
        <div className="question" key={question.id}>
        <a href="/profile/user/{{ value.user }}" className="logo_a">
        <div className="logo_section">
        <img className="logo_img" src="/media/{{ value.img }}" alt=""/>
    </div></a>
    <div className="rest">
        <a className="title_a" href="/answer/{{ value.id }}"><h3 className="question_title">{question.Title}</h3></a>
        <div className="category_section">
            <a href="/category/{{ value.cat_name }}" className="cat">{question.Category}</a>
           
        
        </div>
        <p className="time">{question.Date ? question.Date: 'No Date'}</p>
        <p className="total_ans"><b>11 Answered</b></p> 

    </div>
    </div>
))}

    </div>
  )
}

export default Question