import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import "./TestSlider.css"

export default function TestSlider() {

  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get("http://kmemon.pythonanywhere.com/api/homepage/sliders/")
      .then((res) => {
        setdata(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err, "===Error");
      })
  }, [])

  return (
    <div >
      <Carousel fade>
        {
          data.map((data, index) => {
            return (
              <Carousel.Item key={index} interval={1000}>
                <img
                  className="d-block w-100 slider-img"
                  src={data.image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{data.title}</h3>
                  <p>{data.text}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
        }
        {/* <Carousel.Item interval={1000}>
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
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 slider-img"
            src="https://mk0astronomynow9oh6g.kinstacdn.com/wp-content/uploads/2018/12/122918_helix2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  )
}
