import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Container from './Components/Container'
import authService from './Appwrite/auth'
import questionService from './Appwrite/Questions'

function App() {
  const [count, setCount] = useState({})
  const [posts, setPosts] = useState({})
  useEffect(() => {

    // const user = {
    //   email : 'two@gmail.com',
    //   password : 'passwordpassword',
    // }
    // // authService.createAccount(user)
    // const session = authService.login(user)
    // console.log(session);
    // if(session){

    //   setCount(authService.getCurrentUser())
    //   console.log(count);
    // }
    const post = {
      Title : 'this is test 2',
      Category: 'Hacking',
      Content : 'This is test 1 content',
      User : 'two@gmail.com'
    }
    

  }, [])
  
  return (
    <>
    <Header/>
    <Banner/>
    <Container/>
    <Footer/>
    </>
  )
}

export default App
