import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Container from './Components/Container'
import authService from './Appwrite/auth'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // account.create(ID.unique(), 'mohot1@gmail.com', 'password', 'Mahfuj mahtab');
  
    // authService
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
