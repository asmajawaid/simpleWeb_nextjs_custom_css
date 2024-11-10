import React from 'react'
import Link from "next/link"
import "../style/header.css"

export default function Header() {
  return (
    <div className="main_container ">
      <div className='logo_container'>ASMA</div>
      
      <div className="navbar_container ">
        <ul className='nav'>
        <Link className='linking_page' href="/"><li className="cursor-pointer">Home</li></Link>
        <Link className='linking_page' href="/about"><li className="cursor-pointer">About</li></Link>
        <Link className='linking_page' href="/services"><li className="cursor-pointer">Services</li></Link>
        <Link className='linking_page' href="/contact"><li className="cursor-pointer">ContactUs</li></Link>
        </ul>
      </div>
    </div>
  )
}