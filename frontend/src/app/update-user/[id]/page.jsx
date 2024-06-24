'use client';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const UpdateUser = () => {

  
  const { id } = useParams();

  const [userData, setUserData] = useState(null); // to store user data

  const fetchUserData = () => {
    axios.get(`http://localhost:5000/user/getbyid/` + id)
      .then((result) => {
        console.log(result.status);
        console.log(result.data);

        setUserData(result.data); //

      }).catch((err) => {
        console.log(err);

      });

  }
  useEffect(() => {
    fetchUserData();

  }, [])


  const submitForm = (values) => {
    console.log(values);

    axios.put(`http://localhost:5000/user/update/` + id , values)
    .then((result) => {
      if(result.status ===200){
        toast.success('user updated successfully')
      }
      
    }).catch((err) => {
      toast.error('Failed to update User');
      console.log(err);
      
    });
  }

  return (

    <div className=' max-w-2xl mx-auto py-5'>
      <h1 className=' text-3xl text-center font-bold'>Update User</h1>

      <div className=' border-2 rounded-xl p-6 mt-10'>

        {userData !== null?

      <Formik initialValues={userData} onSubmit={submitForm}>
        {
          (updateForm) => {
            return  <form onSubmit={updateForm.handleSubmit}>                                                           
            <label htmlFor="name">Name</label>
            <input id='name'
             onChange={updateForm.handleChange}
             value={updateForm.values.name}
              type="text"
              className=' border-2 border-black bold w-full mt-1 mc-3 py-2 px-3 rounded-md outline-none' />
  
            <label htmlFor="email">Email Address</label>
            <input id='email'
            onChange={updateForm.handleChange}
            value={updateForm.values.email}
              type="email"
              className=' border-2 border-black bold w-full mt-1 mc-3 py-2 px-3 rounded-md outline-none' />
  
  
            <label htmlFor="password">Password</label>
            <input id='password'
             onChange={updateForm.handleChange}
             value={updateForm.values.password}
              type="password"
              className=' border-2 border-black bold w-full mt-1 mc-3 py-2 px-3 rounded-md outline-none' />
  
  
            <label htmlFor="city">City</label>
            <input id='city'
             onChange={updateForm.handleChange}
             value={updateForm.values.city}
              type="text"
              className=' border-2 border-black bold w-full mt-1 mc-3 py-2 px-3 rounded-md outline-none' />
  
  
              <button type='submit' className=' my-5 py-3 px-5 bg-blue-500 text-white rounded-lg'>Submit</button>
          </form>
          }
        }
      </Formik>
       

        : <p>Loading...</p>}   
      </div>

    </div>

  )
}

export default UpdateUser;