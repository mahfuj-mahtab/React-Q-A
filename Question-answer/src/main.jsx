import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './register.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Question from './Components/Question.jsx';
import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx'
import Answer from './Components/Answer.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    children:[
      {
        path: "",
        'element' : <App/>
      },
      {
        path: "register",
        'element' : <Register/>
      },
      {
        path: "login",
        'element' : <Login/>
      },
      {
        path: "answer/:id",
        'element' : <Answer/>
      },

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
