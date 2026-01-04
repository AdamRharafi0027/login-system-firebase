import React from 'react'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className=' bg-radial-[at_50%_75%] from-purple-400 via-purple-600 to-purple-900 to-90%'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App