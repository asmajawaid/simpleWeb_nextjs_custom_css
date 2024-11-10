import React from 'react'
import Image from 'next/image'
import "../../style/about.css"


export default function About() {
  return (
    <div className=" main_container0">
        <div className="child_container0 ">
        <div className="image_container0">
            <div>
              <Image src="/images/price1.jpeg" alt="Banner Image" width={350} height={350} className="image0"/>
            </div>
          </div>
          <div className="hero_content0 ">
            <h1 className="heading0 ">ABOUT US</h1>
            <p className="para0 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard.
               </p>
            <button className="button0">
              Contact US
            </button>
          </div>
          
        </div>
     
    </div>
  )
}
