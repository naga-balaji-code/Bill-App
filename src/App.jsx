import React from 'react'
import { RouterProvider, Routes } from 'react-router-dom'

import "./App.css"
import { Toaster } from 'react-hot-toast'
import routes from './routes/Routes'
 
const App = () => {
  return (
    <div>
      <Toaster></Toaster>
      <RouterProvider router={routes}></RouterProvider>
      {/* <Register></Register> */}
      
    </div>
  )
}

export default App