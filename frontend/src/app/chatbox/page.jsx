import React from 'react'

const Chatbox = () => {
    return (
        <div className=' m-52 '>
            <h1 className=' text-3xl font-bold text-center my-5'>ChatBox</h1>
            <div className='border-2 shadow-lg rounded-lg p-5 '>
                <input className=' w-full border border-blue-400 rounded-md p-3' type="text" placeholder='write here...' />
                <div className=' p-4'>
                    <button className='bg-blue-500 text-white p-2 rounded-md'>Send</button>

                </div>


            </div>
        </div>
    )
}

export default Chatbox;