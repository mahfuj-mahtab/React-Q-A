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
import Logout from './Components/Logout.jsx'
import SearchAndCatWiseShow from './Components/SearchAndCatWiseShow.jsx'
import Ask from './Components/Ask.jsx'
import { store } from './store/store.js'
import {Provider} from 'react-redux'
import Search_wise from './Components/Search_wise.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    children:[
      {
        path: "",
        'element' : <App/>
      },
      {
        path: "signup",
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
      {
        path: "category/:cat",
        'element' : <SearchAndCatWiseShow/>
      },
      {
        path: "search/:q",
        'element' : <Search_wise/>
      },
      {
        path: "ask_question",
        'element' : <Ask/>
      },
      {
        path: "logout",
        'element' : <Logout/>
      },

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store} >
     <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>,
)
