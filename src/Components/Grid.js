import React, { useEffect, useState } from 'react';
// import { useIntersection } from 'react-use';
import Box from './Box';
import './Grid.css';

// import gsap from "gsap";

import AOS from 'aos';
import 'aos/dist/aos.css'







const Grid = () => {


    // const sectionRef = useRef('grid');

    // console.log(sectionRef)


    // const rootElement = document.getElementById("grid")
    // const inersection = useIntersection(sectionRef, {
    //     root: rootElement,
    //     rootMargin: "0px",
    //     threshold: 1,
    // }
    // );

    // console.log('-----------------------')
    // console.log(rootElement)

    // // Animaation

    // const fadeIn = element => {

    //     gsap.to(element, 1, {
    //         opacity: 1,
    //         y: -60,
    //         ease: "power4.out",
    //         stagger: {
    //             amount: 0.3
    //         }
    //     });
    // };

    // const fadeOut = element => {

    //     gsap.to(element, 1, {
    //         opacity: 0,
    //         y: -20,
    //         ease: "power4.out"
    //     });
    // }


    // // // // checking to see when the veiwport is visible to user

    // inersection && inersection.inersectionRatio < 1
    //     ? fadeOut(".fadeIn")
    //     : fadeIn(".fadeIn");



    const [scrollDirection, setScrollDirection] = useState('down');

    useEffect(() => {
        AOS.init();

        let previousScrollPos = window.pageYOffset;
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingDown = currentScrollPos > (previousScrollPos  || 0);

            if (isScrollingDown && scrollDirection === 'up') {
                setScrollDirection('down');
            } else if (!isScrollingDown && scrollDirection === 'down') {
                setScrollDirection('up');
            }

            previousScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollDirection]);







    const gridItems = [];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 2; col++) {

            if ((col % 2) == 0) {

                gridItems.push(
                    <div
                        key={`${row}-${col}`}
                        className="box"

                        data-aos="fade-right"
                        data-aos-duration="500"
                        data-aos-direction={scrollDirection === 'down' ? 'normal' : 'reverse'}
                    >
                        <Box />
                    </div>
                );
            }
            else {
                gridItems.push(
                    <div
                        key={`${row}-${col}`}
                        className="box"

                        data-aos="fade-left"
                        data-aos-duration="500"
                        data-aos-direction={scrollDirection === 'down' ? 'normal' : 'reverse'}
                    >
                        <Box />
                    </div>
                );


            }

            // gridItems.push(
            //     <div
            //         key={`${row}-${col}`}
            //         className="box"
            //         // style={{ animationDelay: `${(row * 2 + col) * 0.1}s` }}
            //         data-aos="zoom-in"
            //     >
            //         <Box />
            //     </div>
            // );
        }
    }

    return (
        <div className='gridContainer'>
            <div className="gridTitle">
                    EVENTS
                </div>
            <div className="grid" id='grid'>
                
                {gridItems}

            </div>


        </div>
    );
};

export default Grid;