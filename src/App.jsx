import { useState } from 'react'
import Home from './Page/Home'
import Navbar from "./component/Navbar"
import SearchPage from "./Page/SearchPage"
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {


  return (
    <>




      <Router forceRefresh={true}> 



        < Navbar />

        <Routes>


          <Route exact path="/" element={<Home />} />

          <Route path="/search/:query" render= {(props)=>window.location.reload()} element={<SearchPage />} />





        </Routes>



      </Router >


    </>
  )
}

export default App
