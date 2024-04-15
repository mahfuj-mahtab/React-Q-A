import React from 'react'
import RightContainer from './RightContainer'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'

function Answer() {
  return (
    <div>
        <Header/>
        <Banner/>
            <div class="container">
        <div class="main_container">
            <div class="left_main_container">

                <div class="answer_details">
                    <div class="answer_details_top">
                        <div class="answer_details_top_left">
                            <img src="/media/ " alt="" class="question_profile"/>
                        </div>
                        <div class="answer_details_top_right">
                            <h3 class="q_title">djfsasw</h3>
                     
                            <a href="/category/{{ question.cat_name }}" class="answer_category">12</a>
                            
                            <span class="time">1717</span>
                            <span class="views"><b>View : 32</b></span>
                        </div>
                       
                        
                    </div>
                    <div class="answer">
                        <p>detrails</p>
                    </div>
                    <div class="likedislike">
                        
                    </div>
                </div>


                <div class="answer_section">
                    <h1>Answer Section</h1>
               
                    <div class="answer_details2">
                        <div class="answer_details_top2">
                            <div class="answer_details_top_left2">
                               <a href="/profile/user/{{ value.user}}"> <img src="/media/" alt="" class="question_profile2"/></a>
                            </div>
                            <div class="answer_details_top_right2">
                                <h3 class="q_title2">hgh</h3>
                         
                                
                             
                            </div>
                           
                            
                        </div>
                        
                        <div class="answer">
                            <p>56</p>
                        </div>
                        <div class="likedislikepart"> 
                            <form action="/like/answer/{{value.ans_id}}" method="POST">
                           
                                <button>
                                    <span class="num">23</span>
                        <span class="material-symbols-outlined">
                               thumb_up
                            </span>
                        </button>
                        </form>
                        <form action="/dislike/answer/{{value.ans_id}}" method="POST">
                        
                            <button>
                                <span class="num">  34 </span>
                            <span class="material-symbols-outlined">
                                thumb_down
                                </span>
                                </button>
                                </form>
                            </div>
                    </div>
                   

                    <div class="ansreply">
                        
                    </div>


                </div>
                

                <div class="answerformsection">
                  
                    <form action="" method="post">
                        
                        <textarea name="answer" id="" cols="90" rows="10" placeholder="Please Enter Your Answer"></textarea>
                        <input class="answer-btn" type="submit" value="Answer"/>
                    </form>
                   
                        <h1 class="war">You need to login to answer</h1>
                    
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