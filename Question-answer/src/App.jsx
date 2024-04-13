import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Container from './Components/Container'

function App() {
  const [count, setCount] = useState(0)

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
