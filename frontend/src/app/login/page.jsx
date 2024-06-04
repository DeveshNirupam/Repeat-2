import React from 'react';
import classes from './login.module.css'

const Login = () => {
  return (
    <div className=" flex justify-center items-center  mb-20" >

      <div className=" mx-auto my-6 bg-slate-100">
      
        <div className="grid grid-cols-1 border border-blue-500 shadow-lg rounded-lg " >
        <h2 className=" font-bold flex justify-center items-center mt-6 mb-6 text-4xl">Login</h2>
         <div className=" mb- p-8 ">
          
          
         <form action="" >
          
         
         <label htmlFor="" >Username</label><br />
          <input type="text" className="border border-black  mt-2 mb-4 rounded-md p-1" /><br />
          <label htmlFor="">Password</label><br />
          <input type="password" className="border border-black rounded-md mt-2 mb-2 p-1" /><br />
          <input type="checkbox" className="mt-2" /> Remember me
          <br />
          <a href="" className="text-blue-500">Forgot password?</a>

          <button className="bg-blue-500 text-white rounded-md p-2 mt-4 w-full">Login</button>

         </form>
         
         <button className="my-btn">Login button</button>
         <button className={classes.btn}>Another Button</button>

         </div>
        </div>
      </div>



    </div>
  )
}
export default Login
