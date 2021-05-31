import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./TestSlider.css"

export default function TestSlider() {
  return (
    <div >
      <Carousel fade>
        <Carousel.Item onClick={()=>console.log("Hello")}>
          <img 
            className="d-block w-100 slider-img"
            src="http://2.bp.blogspot.com/-e5tO5vpVsk4/VmmyesKMN3I/AAAAAAAAw6s/ktkh9g4bMHc/s640/Cat%2527s-Eye-Nebula-Wallpaper-HD-03.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100 slider-img"
            src="https://petapixel.com/assets/uploads/2021/04/New-Photo-of-the-Veil-Nebula-Shows-Incredible-Detail-800x420.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100 slider-img"
            src="https://mk0astronomynow9oh6g.kinstacdn.com/wp-content/uploads/2018/12/122918_helix2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
