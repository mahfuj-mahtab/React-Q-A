import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import { useForm } from 'react-hook-form'
import questionService from '../Appwrite/Questions'
import { Navigate } from 'react-router-dom'
function Ask() {
    const { register,
        handleSubmit,
        watch,
        formState: { errors }} = useForm()
        const AskQuestion = (data)=>{
           questionService.createQuestion(data).then(()=>{

               Navigate("/")
           }
           ).catch((error)=>{
            console.log(error);
           })
        }
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
            </div>
        </div>
    </div>
</div>
<Footer/>
    </div>
  )
}

export default Ask