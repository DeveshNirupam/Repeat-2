import React from 'react';
import logo from './vercel.svg';
import { Button } from '@mantine/core';

const Home = () => {
  return (
    <div>
      <h1 style={ { textAlign: 'center', fontSize: 56, color: 'blue' }}>Home Page</h1>
      <input type="text" className='border-2 border-black'/>

      <button className="my-btn">submit</button>

      <img src="/next.svg" alt="" />

      <img src={logo.src} alt="" />

      <Button>Hello Mantine!</Button>



    </div>
  )
}

export default Home