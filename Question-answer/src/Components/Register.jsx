import React from 'react'
import { Link } from 'react-router-dom'
Link
function Register() {
  return (
    <div>
        <div className="container">
        <div className="main_container">
            <div className="login-box">
                <div className="left_login_box">
                    <img className="register-img" src="/src/assets/im.jpg" alt=""/>
                </div>
                <div className="right_login_box">
                    <h3 className="login_title">Sign Up</h3>

                    <form action="" method="POST">
                           

                        <input type="text" name="fullname" id="" placeholder="Enter Full Name"/> 
                        <span className="material-symbols-outlined">
                            person
                            </span><br/>                        
                        <input type="text" name="username" id="" placeholder="Enter User Name"/> 
                        <span className="material-symbols-outlined">
                            account_circle
                            </span><br/>
                        <input type="email" name="email" id="" placeholder="Enter Email Address"/>
                        <span className="material-symbols-outlined">
                            mail
                            </span>
                        <br/>
                        <input type="password" name="password" id="" placeholder="Enter Password"/> 
                        <span className="material-symbols-outlined">
                            lock
                            </span>
                            
                        <br/>
                        
                        <input type="checkbox" name="" id="" className="check-box" /><span>I read and agree to <span> <b>  Term & Condition</b> </span></span><br/>
                    
                        
                        <br/>
                        <input type="submit" value="Register"/>
                        <br/>
                        <span className='forget_a'>Already Have Account? <span> <b> 
                        <Link to = "/login" className="a_login">Login</Link>
                          </b> </span></span>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register