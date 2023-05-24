import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import { TweenMax, Power3 } from 'gsap'
import Container from './Components/FlagShipEvent';
import ImageContainer from './Components/ImageContainer';
import Feedbacks from './Components/Feedbacks';
import Grid from './Components/Grid'
import Navbar from './Components/Navbar';

function App() {

  // let logoItem = useRef();

  // useEffect(() => {
  //   console.log(logoItem)
  //   TweenMax.to(logoItem, 0.8, {x:20 , opacity:1, ease:Power3.easeOut})

  // }, [])












  return (
    <div className='mainbody'>
      <Navbar/>
      <Header />
      <Grid/>
      <ImageContainer />
      <Feedbacks/>
      
      
      
    </div>

  );
}

export default App;
