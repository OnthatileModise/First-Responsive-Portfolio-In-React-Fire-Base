import 'react-slideshow-image/dist/styles.css'
import React from 'react';
import { Fade, Slide } from 'react-slideshow-image';
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'
import slide4 from '../images/slide4.jpg'
import slide5 from '../images/slide5.jpg'
import slide6 from '../images/slide6.jpg'
import slide7 from '../images/slide7.jpg'
import slide8 from '../images/slide8.jpg'
import slide9 from '../images/slide9.jpg'
import slide10 from '../images/slide10.jpg'
import slide11 from '../images/slide11.jpg'
import slide12 from '../images/slide12.jpg'
import slide13 from '../images/slide13.jpg'
import slide14 from '../images/slide14.jpg'
import slide15 from '../images/slide15.jpg'
import slide16 from '../images/slide16.jpg'
import slide17 from '../images/slide17.jpg'
import slide18 from '../images/slide18.jpg'
import slide19 from '../images/slide19.jpg'


const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }

  const slideImages = [
    {

        url: slide1
    },
    {
        url: slide2
    },
    {
        url: slide3
    },
    {
        url: slide4
    },
    {
        url: slide5
    },
    {
        url: slide6
    },
    {
        url: slide7
    },
    {
        url: slide8
    },
    {
        url: slide9
    },
    {
        url: slide10
    },
    {
        url: slide11
    },
    {
        url: slide12
    },
    {
        url: slide13
    },
    {
        url: slide14
    },
    {
        url: slide15
    },
    {
        url: slide16
    },
    {
        url: slide17
    },
    {
        url: slide18
    },
    {
        url: slide18
    }
  ]

export default function GallerySection() {
    return (
        <section className="gallery" id="gallery">
            <div className="max-width">
                <h2 className="title">Our Gallery</h2>
                    <div className="slide-container">
                        <Fade>
                        {slideImages.map((slideImage, index)=> (
                            <div key={index}>
                                <div style={{ ...divStyle}}>
                                    <img src={slideImage.url} alt={slideImage.url}/>
                                </div>
                            </div>
                            ))} 
                        </Fade>
                    </div>
            </div>
         </section>
      )

}