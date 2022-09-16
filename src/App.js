import React, {useState } from 'react';
import {Link, Route, Routes, BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Auth from './components/Auth';
import DisplayDay from './components/DisplayDay';
import UpdateEvent from './components/UpdateEvent';




export default function App() {
  const [shoCard, setShoCard] = useState(false);

  function standCardUp(e){
    setShoCard(prevState=>!prevState)
  };

  return (
    <BrowserRouter>
    <NavBar 
      className="App"
      onClick={(e)=>{
        if (e.target.classList.contains(
            "react-calendar__month-view__days__day")) 
             {standCardUp()}
      }}
    >
          <Link to='./components/Home'>Home</Link>
          <Link to='/'>Log in</Link>
        <Routes>
          <Route path="/components/Home" element={<Home shoCard={shoCard} />} />
          <Route path="/" element={<Auth />} />
          <Route path="/components/DisplayDay" element={<DisplayDay />} />
          <Route path="/components/UpdateEvent" element={<UpdateEvent />} />
        </Routes>
    </NavBar>
    </BrowserRouter>
  )
}

const NavBar = styled.div`
text-align: center;
/* The image used */
background-image: url(/background.jpeg);
/* Center and scale the image nicely */
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

