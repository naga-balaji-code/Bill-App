import React from 'react'
import {RouterProvider} from 'react-router-dom'
import { Routes } from 'react-router-dom'
import './App.css'
// import routes from './routes/Routes'
import Register from './components/user/Register'
const App = () => {
  return (
    <div>
      {/* <RouterProvider router={routes}></RouterProvider> */}
      <Register></Register>
    </div>
  )
}

export default App