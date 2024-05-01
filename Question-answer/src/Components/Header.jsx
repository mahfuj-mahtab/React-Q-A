import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Header() {
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const  Search = (data)=>{
          navigate(`/search/${data.query}`)
      
       }
  useEffect(() => {
    
  // console.log(authStatus);
  
 
  }, [])
  
  return (
    <div>

    
  <div className="header">
      <div className="main_header">
          <h3 className="logo"><Link to="/" className="first_logo"> ASK.COM </Link></h3>
          <form onSubmit={handleSubmit(Search)}>
              <input type="text" className="search" name="search" id="search" placeholder="Search Your Question" {...register("query")}/>
              <input type="submit" value="Search" className="search_btn"/>
          </form>
         
            {/* <a href="/profile" className="profile_picture_a"><img src="/media/{{my_users.img }}" alt="" className="profile_picture"/></a>
            <a className="register-btn" href="/logout">Log out</a> */}
          

          
          {/* <a  href="/signup">Login</a> */}
          {authStatus == true ?(

        <Link to = "/logout" className="register-btn">Logout</Link>
          ): (
            <Link to = "/login" className="register-btn">Login</Link>
          )}
          
          
          
      </div>
     
  </div>

    </div>
  )
}

export default Header