import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <div className='loginScreen'>
      <div className="loginScreen_background">
        <img className='LoginScreen_logo' src="https://th.bing.com/th/id/R.715e69176d3cec74504b3ae00f2676c6?rik=vGDJl%2bfFL64qmw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fNetflix-Logo-HD.png&ehk=aWIF5J5TR6tD4IrfNFhXE0dNVq%2f6n%2f6OViRGEsRS%2bNg%3d&risl=&pid=ImgRaw&r=0" alt="" />
      </div>
      <button className='loginscreen_button'>Sign In</button>
      <div className="loginscreen_gradient"/>
      <div className="loginScreen_body">
        <>
          <h1>Unlimited films , Tv programmes and more</h1>
        </>
      </div>
    </div>
  )
}

export default Login
