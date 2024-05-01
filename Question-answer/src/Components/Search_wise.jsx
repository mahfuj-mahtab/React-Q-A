import React, { useCallback ,useEffect,useState} from 'react'
import questionService from '../Appwrite/Questions'
import { Link } from 'react-router-dom'
import authService from '../Appwrite/auth'
import RightContainer from './RightContainer'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import Header from './Header'
import Banner from './Banner'
import { useNavigate } from 'react-router-dom'
function Search_wise() {
  
    const {q} = useParams()
    const [questions, setquestions] = useState([])

    useEffect(
      () => {
        // console.log(typeof cat);
        // console.log(authService.getCurrentUser(),'current user');
        questionService.showSearchWiseQuestions(q).then((posts)=>{
          if(posts){
            // console.log(posts);
            // console.log('posts is : ', posts);
            setquestions(posts.documents);
          }
        })
      },
      [],
    )
  return (
    <div>
            <Header/>
    <Banner/>
            <div className="container bg">
        
        <div className="main_container">
            
         <div className="left_main_container">

            

         {questions.map((question)=>(
        <div className="question" key={question.id}>
        <a href="/profile/user/{{ value.user }}" className="logo_a">
        <div className="logo_section">
        <img className="logo_img" src="/media/{{ value.img }}" alt=""/>
    </div></a>
    <div className="rest">
        <Link className="title_a" to={`/answer/${question.$id}`}><h3 className="question_title">{question.Title}</h3></Link>
        <div className="category_section">
            <Link to={`/category/${question.Category}`} className="cat">{question.Category}</Link>
           
        
        </div>
        <p className="time">{question.Date ? question.Date: 'No Date'}</p>
        <p className="total_ans"><b>11 Answered</b></p> 

    </div>
    </div>
))}



    

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

export default Search_wise