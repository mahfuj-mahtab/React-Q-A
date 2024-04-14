import React from 'react'

function Login() {
  return (
    <div>
        <div className="container">
        <div className="main_container">

            <div className="login-box">
                <div className="left_login_box">
                    <img className="register-img" src="" alt=""/>
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
                        <span >Forget Password? <span> <b>  <a className="a_forget" href="/recover/"> Recover Password </a></b> </span></span>
                        <br/>
               
                        
                        <br/>
                        <input type="submit" value="Login"/>
                        <br/>
                        <span >Don't Have Account? <span > <b>  <a className="a_login" href="/signup/"> Register </a></b> </span></span>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login