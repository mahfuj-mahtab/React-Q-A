import React, { useEffect,useState } from 'react'
import RightContainer from './RightContainer'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'
import questionService from '../Appwrite/Questions'
import { useNavigate, useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useForm } from "react-hook-form"

function Answer() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    const {id} = useParams()
    const [question, setQuestion] = useState({})
    const [answers, setAnswer] = useState([])
    const authStatus = useSelector((state)=>state.auth.status)
    const userData = useSelector((state)=>state.auth.userData)
    useEffect(() => {
    //   console.log('id type is ',typeof id);
    //   console.log('answers : ',answers);
        questionService.showQuestionAnswer(id).then((post)=>{
            setQuestion(post)
          
        })
        questionService.showQuestionAllAnswer(id).then((answer)=>{
            // const answer_document = {
            // }
            // const answers_document = []
            // answer.documents.map((ans,key)=>{
            //     answer_document['Title'] = ans.title

            //     answer_document['user'] = ans.title
            //     answers_document.push(answer_document)
            // })
            // console.log('answer in hook ',answers_document);
            setAnswer(answer.documents)
            // setAnswer(answers_document)
            // console.log('answer in hook 2',answers);
        })

     
    }, [])
    const answerSubmit = (data)=>{
        questionService.createQuestionAnswer({...data, q_id : id,user : userData.$id}).then((
            navigate('/')
        ))
    }
    
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
                    {/* <div className="likedislike">
                        
                    </div> */}
                </div>


                <div className="answer_section">
                    <h1>Answer Section</h1>
                    
               {answers.map((ans,key)=>(

                    <div className="answer_details2" >
                        <div className="answer_details_top2">
                            <div className="answer_details_top_left2">
                               <a href="/profile/user/{{ value.user}}"> <img src="/media/" alt="" className="question_profile2"/></a>
                            </div>
                            <div className="answer_details_top_right2">
                                <h3 className="q_title2">Full Name</h3>
                         
                                
                             
                            </div>
                           
                            
                        </div>
                        
                        <div className="answer">
                            <p>{ans.title}</p>
                        </div>
                  
                    </div>
                ))} 
                   

                    <div className="ansreply">
                        
                    </div>


                </div>
                <div className="answerformsection">
                {authStatus?(

      
                        
        <form onSubmit={handleSubmit(answerSubmit)}>
            
            <textarea name="answer" id="" cols="90" rows="10" placeholder="Please Enter Your Answer" {...register("title")}></textarea>
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
{/* <Footer/> */}
    </div>
  )
}

export default Answer