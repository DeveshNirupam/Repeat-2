'use client';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Todolist = () => {


    const [taskList, setTaskList] = useState([ ]);


    let num = 2345;





    const addNewTodo = (e) => {

        if (e.key === 'Enter') {
            if (!e.target.value) {
                
                return toast.error('Please enter a task');
            }
            console.log(e.target.value);

            const newTask = {
                task: e.target.value, isCompleted: false

            }

            setTaskList([newTask, ...taskList]);   // add new task to the list ,
            toast.success('Task added successfully'); 

            e.target.value = '';
        }

    }

    const deleteTask = (index) => {
        console.log(index);
        const temp = taskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
        toast.error('Task deleted successfully');
    }

    const updateStatus = (index, value) =>{
        //console.log(index, value);
        const temp = taskList;
        temp[index].isCompleted = value;
        setTaskList([...temp]);
        toast.success('Task status updated successfully');
      
    }



    return (
        <div className=' mx-64 '>
            <h1 className=' text-3xl font-bold text-center my-5'>Todo-List</h1>

            <div className=' border-2 shadow-lg rounded-lg p-5'>

                <input onKeyDown={addNewTodo} type="text" className=' w-full border border-blue-500 px-5 py-2 rounded-md ' placeholder=' Add a new Todo' />


                <div className=' p-4 h-[50vh]  overflow-auto'>

                    {
                        taskList.map((obj, index) => {
                            return <div key={index} className=' grid grid-cols-2 p-4 mb-3 border-2 cursor-pointer hover:bg-gray-300' >
                                <div className=' flex gap-4 items-center'>
                                    <input type="checkbox" checked={ obj.completed} onChange={(e) =>{ updateStatus(index, e.target.checked)}
                                    } />
                                    <p className={ obj.isCompleted && 'line-through text-gray-400'}>{obj.task}</p>
                                </div>
                                <button onClick={ () => {deleteTask(index)}} className='w-fit ml-auto p-2 bg-red-500 text-white rounded-lg'>Delete</button>
                            </div>
                        })
                    }

                </div>


            </div>

        </div>
    )
}

export default Todolist;