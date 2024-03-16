import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import MainPage from './pages/MainPage'
import Navbar from './components/navbar/Navbar'



export class App extends Component {
  render() {
    return (
      <body>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/home' element={<MainPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </body>
    )
  }
}

export default App
