import React from 'react'
import Image from "next/image"
import "../style/hero.css"

export default function Hero() {
  return (
    <div className=" main_container1">
        <div className="child_container ">
          <div className="hero_content ">
            <h1 className="heading ">Welcome To Our Website</h1>
            <p className="para ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard.
               </p>
            <button className="button">
              Contact US
            </button>
          </div>
          <div className="image_container">
            <div>
              <Image src="/images/blue.jpeg" alt="Banner Image" width={350} height={350} className="image "/>
            </div>
          </div>
        </div>
     
    </div>
  )
}
