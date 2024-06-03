import React from 'react';
import logo from './vercel.svg';

const Home = () => {
  return (
    <div>
      <h1 style={ { textAlign: 'center', fontSize: 56, color: 'blue' }}>Home Page</h1>
      <input type="text" className='border-2 border-black'/>

      <button className="my-btn">submit</button>

      <img src="/next.svg" alt="" />

      <img src={logo.src} alt="" />



    </div>
  )
}

export default Home