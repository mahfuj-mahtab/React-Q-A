import React, { useEffect,useState } from 'react'
import RightContainer from './RightContainer'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'
import questionService from '../Appwrite/Questions'
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'

function Answer() {
    const {id} = useParams()
    const [question, setQuestion] = useState({})
    const authStatus = useSelector((state)=>state.auth.status)
    useEffect(() => {
      
        questionService.showQuestionAnswer(id).then((post)=>{
            setQuestion(post)
          
        })
        // console.log(post);
        // if(post){
            
        // }
     
    }, [])
    
  return (
    <div>
        <Header/>
        <Banner/>
            <div className="container">
        <div className="main_container">
            <div className="left_main_container">

                <div className="answer_details">
                    <div className="answer_details_top">
                        <div className="answer_details_top_left">
                            <img src="/media/ " alt="" className="question_profile"/>
                        </div>
                        <div className="answer_details_top_right">
                            <h3 className="q_title">{question.Title}</h3>
                     
                            <a href="/category/{{ question.cat_name }}" className="answer_category">{question.Category}</a>
                            
                            <span className="time">{question.Date}</span>
                            <span className="views"><b>View : 32</b></span>
                        </div>
                       
                        
                    </div>
                    <div className="answer">
                        <p>{question.Content}</p>
                    </div>
                    <div className="likedislike">
                        
                    </div>
                </div>


                <div className="answer_section">
                    <h1>Answer Section</h1>
               
                    <div className="answer_details2">
                        <div className="answer_details_top2">
                            <div className="answer_details_top_left2">
                               <a href="/profile/user/{{ value.user}}"> <img src="/media/" alt="" className="question_profile2"/></a>
                            </div>
                            <div className="answer_details_top_right2">
                                <h3 className="q_title2">hgh</h3>
                         
                                
                             
                            </div>
                           
                            
                        </div>
                        
                        <div className="answer">
                            <p>56</p>
                        </div>
                        <div className="likedislikepart"> 
                            <form action="/like/answer/{{value.ans_id}}" method="POST">
                           
                                <button>
                                    <span className="num">23</span>
                        <span className="material-symbols-outlined">
                               thumb_up
                            </span>
                        </button>
                        </form>
                        <form action="/dislike/answer/{{value.ans_id}}" method="POST">
                        
                            <button>
                                <span className="num">  34 </span>
                            <span className="material-symbols-outlined">
                                thumb_down
                                </span>
                                </button>
                                </form>
                            </div>
                    </div>
                   

                    <div className="ansreply">
                        
                    </div>


                </div>
                <div className="answerformsection">
                {authStatus?(

      
                        
        <form action="" method="post">
            
            <textarea name="answer" id="" cols="90" rows="10" placeholder="Please Enter Your Answer"></textarea>
            <input className="answer-btn" type="submit" value="Answer"/>
        </form>

           

       
                ):(
                    <h1 className="war">You need to login to answer</h1>
                )}

                </div>

            </div>
           <RightContainer/>
        </div>
    </div>
<Footer/>
    </div>
  )
}

export default Answer