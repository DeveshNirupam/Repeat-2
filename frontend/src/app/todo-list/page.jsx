'use client';   
import React,{ useState } from 'react'

const Todolist = () => {


    const [taskList, setTaskList] = useState([
        { task: 'learn Html', isCompleted: false },  
        { task: 'learn Css', isCompleted: false },  
        { task: 'learn Javascript', isCompleted: false },  
        { task: 'learn React', isCompleted: false },

    ]);


    let num = 2345;





    const addNewTodo = (e) => {

       if(e.key === 'Enter') {
            console.log(e.target.value);

            e.target.value = '';
        }

    }



  return (
    <div className=' mx-64 '>
        <h1 className=' text-3xl font-bold text-center my-5'>Todo-List</h1>

        <div className=' border-2 shadow-lg rounded-lg p-5'>

            <input onKeyDown={addNewTodo} type="text" className=' w-full border border-blue-500 px-5 py-2 rounded-md ' placeholder=' Add a new Todo' />


            <div className=' p-4'>
                
                {
                    taskList.map( ( obj, index) =>{ 
                        return <div key={index} className=' p-4 mb-3 border-2 cursor-pointer hover:bg-gray-300' >
                            <div className=' flex gap-4'>
                                <input type="checkbox" />
                                <p>{obj.task}</p>
                            </div>
                        </div>
                    })
                }
                
            </div>
            

        </div>

    </div>
  )
}

export default Todolist;