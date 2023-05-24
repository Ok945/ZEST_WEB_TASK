import React ,{ useEffect } from 'react'
import ImageSlider from './ImageSlider';
import './ImageContainer.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const ImageContainer = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });


  }, []);

  const cycloImages = [
    './18.jpg',
    './3.jpg',
    './10.jpg',
  ];

  const maraImages = [ 
    './4.jfif',
    './5.jfif',
    './13.jfif',
  ];

  return (
    <div className='imgContianer' data-aos='zoom-in'>
      <ImageSlider  images={cycloImages}/>
      <ImageSlider images={maraImages} />
    </div>
  )
}

export default ImageContainer
