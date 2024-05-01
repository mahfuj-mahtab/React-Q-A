import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import { useForm } from 'react-hook-form'
import questionService from '../Appwrite/Questions'
import { Navigate, useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Ask() {
    const authStatus = useSelector((state)=>state.auth.status)
    const navigate = useNavigate()
    const userData = useSelector(state=>state.auth.userData)
    // console.log(userData)
    const { register,
        handleSubmit,
        watch,
        formState: { errors }} = useForm()
        const AskQuestion = (data)=>{
            const ask = questionService.createQuestion({...data,user : userData.$id})
            if(ask){
                toast('Question Is Posted.')
                setTimeout(() => {
                    
                    navigate('/')
                }, 3000);
            }
        }
        useEffect(() => {
        // console.log(userData);
        if(!authStatus){
            navigate('/login')

        }
    
   
    }, [])
    
  return (
    <div>
        <Header/>
        <Banner/>
        <div className="container bg">
    <div className="main_container ">
        <div className="ask_section">
            <div className="ask_section_main">
                <form onSubmit={handleSubmit(AskQuestion)}>
                  
                    <input type="text" name="title" id="" className="ask_input" placeholder="Please Enter Question Title" {...register("Title")} required/><br/>
                    <textarea name="details" id="" cols="80" rows="25" className="ask_textarea" placeholder="Please Enter Question Details" {...register("Content")} required></textarea><br/>
                    <select name="category" id="" className="ask_input_select" {...register("Category")} required>
                        <option value="None">None</option>
                        
                        <option value="Hacking">Hacking</option>
                        <option value="Programming">Programming</option>
                        <option value="Health">Health</option>
                        
                       
                    </select>
                    <br/>
                    <input type="submit" value="Submit" className="ask_btn"/>
                </form>
                <ToastContainer />

            </div>
        </div>
    </div>
</div>
<Footer/>
    </div>
  )
}

export default Ask