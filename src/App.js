import React from 'react'
import classes from './App.module.css'
import Header from './Components/Header/Header'
import Navigation from './Components/Navigation/Navigation'
import ProfileContainer from './Components/Profile/ProfileContainer'
import PostfieldContainer from './Components/Postfield/PostfieldContainer'
import DialogContainer from './Components/Dialog/DialogContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UsersContainer from './Components/Users/UsersContainer'
import AdminConsole from './Components/Admin/AdminContainer'
import ProgramBarContainer from './Components/Programs/ProgramBarContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={classes.app_background}>
        <div className={classes.app_wrapper}>
          <Header />
          <Navigation />
          <ProfileContainer />
          <div className={classes.app_content}>
            <Routes>
              <Route path='/posts/*' element={<PostfieldContainer />} />
              <Route path='/messages/*' element={<DialogContainer />} />
              <Route path='/programs/*' element={<ProgramBarContainer />} />
              <Route path='/users/*' element={<UsersContainer />} />
              <Route path='/admin/*' element={<AdminConsole />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
