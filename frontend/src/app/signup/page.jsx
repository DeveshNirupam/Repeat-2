import React from 'react'

const Signup = () => {
  return (
    <div className=" flex justify-center items-center mt-5 " >

      <div className=" mx-auto my-6   bg-slate-100">
        <div className="grid grid-cols-1 border border-blue-500 shadow-lg rounded-lg  " >
        <h2 className=" font-bold flex justify-center items-center mt-6 mb-4 text-4xl">Sign Up</h2>
         <div className="  p-7 ">
          
         <form action="" >
         
         
         <label htmlFor="" >First name</label><br />
          <input type="text" className="border border-black  mt-2 mb-4 rounded-md p-1" /><br />
         <label htmlFor="" >Last name</label><br />
          <input type="text" className="border border-black  mt-2 mb-4 rounded-md p-1" /><br />
          <label htmlFor="">Email</label><br />
          <input type="email" className="border border-black rounded-md mt-2 mb-2 p-1" /><br />
          <label htmlFor="">Password</label><br />
          <input type="password" className="border border-black rounded-md mt-2 mb-2 p-1" /><br />
          <label htmlFor="">Confirm Password</label><br />
          <input type="password" className="border border-black rounded-md mt-2 mb-2 p-1" /><br />

          <h3 className=" ">Already a member?</h3>
          <a href="" className="text-blue-500 ">Log in</a>

          <button className="bg-blue-500 text-white rounded-md p-2 mt-4 w-full">Login</button>

         </form>

         </div>
        </div>
      </div>



    </div>
  )
}
export default Signup
