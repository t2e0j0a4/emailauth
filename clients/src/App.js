import React from 'react'

// React Router Dom
import {BrowserRouter as MyRouter, Route, Routes } from "react-router-dom"

// Pages Import
import {Register, Login, Profile, PasswordRecovery, PasswordReset, PageNotFound} from "./Pages";

const App = () => {
  return (
    <MyRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/recovery' element={<PasswordRecovery/>}/>
        <Route path='/reset' element={<PasswordReset/>}/>
        <Route path='/pageerror' element={<PageNotFound/>}/>
      </Routes>
    </MyRouter>
  )
}

export default App