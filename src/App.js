import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Profile from './Components/Profile/Profile';
import Postfield from './Components/Postfield/Postfield';
import Dialogs from './Components/Dialog/Dialog';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Programs from './Components/Programs/Programs'



const App = (props) => {

  return (   
    
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <Profile info={props.store._state.Profile.privateInfo} />
        <div className="app-content">
          <Routes>
            {<Route path='/posts/*' element={<Postfield store={props.store} state={props.store.getState()}/> } />}
            <Route path='/messages/*' element={<Dialogs store={props.store} state={props.store.getState()}/>} />
            <Route path='/programs/*' element={<Programs/>} />
          </Routes>
          
        </div>
      </div>
    </BrowserRouter> 
  );
}
export default App;
