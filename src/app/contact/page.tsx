import React from 'react'
import "../../style/contact.css";
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className='main_dev '>
    <section className="section ">
<div className="section_dev  ">
  <div className="childDev_1 ">
    <h1 className="section_heading">
      Contact Us
    </h1>
    <p className="section_para ">
    Feel free to share your thoughts, and let is make your vision a
    reality!
    </p>
  </div>
  <div className="form_maindev">
    <div className="form_childdev">
      <div className="form_dev ">
        <div className="form_devChild">
          <label  htmlFor="name" className="form_devChild_label ">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form_devChild_input"
          />
        </div>
      </div>
      <div className="form_dev">
        <div className="form_devChild ">
          <label htmlFor="email" className="form_devChild_label ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form_devChild_input"
          />
        </div>
      </div>
      <div className="form_dev ">
        <div className="form_devChild ">
          <label
            htmlFor="message"
            className="form_devChild_label"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form_devChild_input "
            defaultValue={""}
          />
        </div>
      </div>
      <div className="form_dev p-2 w-full">
        <button className="contact_button ">
          Button
        </button>
      </div>
      <div className="main_icondev ">
        <Link href="" className="link_tag text-white">example@email.com</Link>
        <p className="section_para ">
          49 Smith St.
          <br />
          Saint Cloud, MN 56301
        </p>
        <span className="icons ">
          <Link
            target="_blank"
            href={"https://www.facebook.com/innocent.princes.581/"}
            className="iconsLink "
          >
            <FaFacebook className="social" />
          </Link>

          <Link
            target="_blank"
            href={"https://www.instagram.com/jawed_hadi/"}
            className="iconsLink "
          >
            <FaInstagram className="social" />
          </Link>

          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/asma-jawaid-92b94628b/"}
            className="iconsLink text-white p-2"
          >
            <FaLinkedin className="social " />
          </Link>

          <Link
            target="_blank"
            href={"https://github.com/asmajawaid"}
            className="iconsLink "
          >
            <FaGithub className="social " />
          </Link>
        </span>
      </div>
    </div>
  </div>
</div>
</section>

  </div>
  )}