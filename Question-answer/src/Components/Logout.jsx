import React,{useEffect} from 'react'
import authService from '../Appwrite/auth'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../store/authSlice'
function Logout() {
    const navigate = useNavigate()
    const authStatus = useSelector((state)=>state.auth.status)
    const dispatch = useDispatch()
    useEffect(() => {
        if(authStatus){
            authService.logOut().then(()=>{
                dispatch(logOut())
                navigate('/')
            })
        }
        else{
            navigate('/')

        }

    }, [])
    
  return (
    <div>Hi</div>
  )
}

export default Logout