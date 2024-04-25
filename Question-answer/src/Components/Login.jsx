import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import authService from '../Appwrite/auth'
import {useDispatch} from 'react-redux'
import {login} from '../store/authSlice'
function  Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    const  Login = (data)=>{
   authService.login(data).then((session)=>{
        if(session){
            console.log(session,'session');
            authService.getCurrentUser().then((userData)=>{

                console.log(userData,'is userdata');
                dispatch(login(userData))
                navigate('/')
            })
           
        }
    })
   
    }
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

                    <form onSubmit={handleSubmit(Login)}>
          
                        <input type="email" name="email" id="" placeholder="Enter Email Address" {...register("email")} />
                        <span className="material-symbols-outlined">
                            mail
                            </span>
                        <br/>
                        <input type="password" name="password" id="" placeholder="Enter Password" {...register("password")}/> 
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
                        <Link to = "/signup" className="a_login">Register</Link>
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