'use client';
import React from 'react'

const EventHandling = () => {
  return (
    <div className=' px-64  border border-red-500'
     onMouseMove={ (e) => { console.log(e.clientX, e.clientY);}}>
        <h1 className="text-center my-4 text-4xl  font-bold">Event Handling</h1>
        <button
             onClick={ () => { alert('Button was  clicked')}} 
              className=' p-4  bg-violet-500 text-white rounded-md'
              > Click me </button>

              <input onChange={ (event) => { console.log(event.target.value)}} className=' block mt-4 border-2 border-violet-600 p-3 w-full' type="text" />
              <input onChange={ (event) => { document.body.style.backgroundColor = event.target.value}} className=' mt-5' type="color" />

              <input type="file" onClick={ (e) => { console.log(e.target.files);}} />
              <input type="file" multiple onClick={ (e) => { console.log(e.target.files);}} />
    </div>
  )
}

export default EventHandling;