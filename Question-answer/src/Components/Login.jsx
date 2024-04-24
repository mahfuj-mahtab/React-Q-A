import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <div className="container">
        <div className="main_container">

            <div className="login-box">
                <div className="left_login_box">
                    <img className="register-img" src="/src/assets/im.jpg" alt=""/>
                </div>
                <div className="right_login_box">
                    <h3 className="login_title">Login </h3>

                    <form action="" method="POST">
          
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
                        <span className='forget_a' >Forget Password? <span> <b>  <a className="a_forget" href="/recover/"> Recover Password </a></b> </span></span>
                        <br/>
               
                        
                        <br/>
                        <input type="submit" value="Login"/>
                        <br/>
                        <span className='forget_a' >Don't Have Account? <span > <b> 
                        <Link to = "/signup" className="a_login">Login</Link>
                            </b> </span></span>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login