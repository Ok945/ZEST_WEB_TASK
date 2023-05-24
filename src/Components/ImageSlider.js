import React, { useState, useEffect } from 'react';

import '../Styles/ImageSlider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'

const ImageSlider = ({ images }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });


    }, []);

    const [className1, setClassName1] = useState('active')
    const [className2, setClassName2] = useState('next')
    const [className3, setClassName3] = useState('prev')

    const toNext = () => {

        if (className1 == 'active') {
            setClassName1('prev')
            setClassName2('active')
            setClassName3('next')
        }
        if (className2 == 'active') {
            setClassName2('prev')
            setClassName3('active')
            setClassName1('next')
        }
        if (className3 == 'active') {
            setClassName3('prev')
            setClassName1('active')
            setClassName2('next')
        }
    }
    const toPrev = () => {

        if (className1 == 'active') {
            setClassName2('prev')
            setClassName3('active')
            setClassName1('next')
        }
        if (className2 == 'active') {
            setClassName3('prev')
            setClassName1('active')
            setClassName2('next')
        }
        if (className3 == 'active') {
            setClassName1('prev')
            setClassName2('active')
            setClassName3('next')
        }
    }

    const temp = { images }


    return (
        <div className="container" data-aos='zoom-in'>
            <div className={`slide ${className1}`}>
                <img src={temp.images[0]} alt={`Slide `} />
            </div>
            <div className={`slide ${className2}`}>
                <img src={temp.images[1]} />
            </div>


            <div className={`slide ${className3}`}>
                <img src={temp.images[2]} />
            </div>
            <div className="button-container">
                <button id="left" onClick={toPrev}><FontAwesomeIcon icon={faArrowLeft} /></button>
                <button id="right" onClick={toNext} > <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    )
}

export default ImageSlider
