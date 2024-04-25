import React,{useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../Appwrite/auth'
import { login } from '../store/authSlice'
function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const signup = (data)=>{
        try {
            const userData = authService.createAccount(data)
            if(userData){
                navigate('/login')
          
            
            }
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(() => {
      
    
   
    }, [])
    
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

                    <form onSubmit={handleSubmit(signup)}>
                           

                        <input type="text" name="fullname" id="" placeholder="Enter Full Name" required   {...register('name',{
                    required : true
                })}/> 
                        <span className="material-symbols-outlined">
                            person
                            </span><br/>                        
                        {/* <input type="text" name="username" id="" placeholder="Enter User Name"   {...register('username',{
                    required : true
                })}/> 
                        <span className="material-symbols-outlined">
                            account_circle
                            </span><br/> */}
                        <input type="email" name="email" id="" placeholder="Enter Email Address"   {...register('email',{
                    required : true
                })}/>
                        <span className="material-symbols-outlined">
                            mail
                            </span>
                        <br/>
                        <input type="password" name="password" id="" placeholder="Enter Password"   {...register('password',{
                    required : true
                })}/> 
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