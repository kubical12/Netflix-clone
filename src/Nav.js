import React, { useEffect, useState } from 'react'
import avatar from "./images/avatar.jpeg"
import "./Nav.css"
const Nav = () => {
  const[show, setShow]= useState(false);
  const transitionNav = () =>{
    if(window.scrollY > 100){
      setShow(true)
    } else{
      setShow(false);
    }
  }

  useEffect(() =>{
    window.addEventListener("scroll" , transitionNav);
    return () =>window.removeEventListener("scroll", transitionNav)
  } , [])
  return (
    <div className={`nav ${show &&  'nav-black'}`}>
        <div className="nav_content">
        <div className="nav_logo">
            <img src="https://th.bing.com/th/id/R.715e69176d3cec74504b3ae00f2676c6?rik=vGDJl%2bfFL64qmw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fNetflix-Logo-HD.png&ehk=aWIF5J5TR6tD4IrfNFhXE0dNVq%2f6n%2f6OViRGEsRS%2bNg%3d&risl=&pid=ImgRaw&r=0" alt="" height={40}/>
        </div>
        <div className="nav_avatar">
            <img src="https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0" alt="" height={45} />
        </div>
        </div> 
    </div>
  )
}

export default Nav
