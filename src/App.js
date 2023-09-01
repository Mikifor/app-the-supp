import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Navigation from './Components/Navigation/Navigation'
import ProfileContainer from './Components/Profile/Profile'
import PostfieldContainer from './Components/Postfield/PostfieldContainer'
import DialogContainer from './Components/Dialog/DialogContainer'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Programs from './Components/Programs/Programs'

const App = (props) => {
  
  return (   
    
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        {<ProfileContainer/>}
        <div className="app-content">
          <Routes>
            {<Route path='/posts/*' element={<PostfieldContainer/> } />}
            <Route path='/messages/*' element={<DialogContainer/>} />
            <Route path='/programs/*' element={<Programs/>} />
          </Routes>
          
        </div>
      </div>
    </BrowserRouter> 
  )
}
export default App;
