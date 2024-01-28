import React, { useState } from 'react'
import ToDoList from './ToDoList';

function Home() {
    const[input,setInput]=useState();
    const[items,setItems]=useState([]);
    const itemEvent=(event)=>{
        setInput(event.target.value)
    }
    
    const listOfItems=()=>{
        setItems((oldItems)=>{
            return[...oldItems,input];
        });
        setInput('');
    };

    const deleteItems=(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !==id;
            });
        });
    };
  return (
    <div className='flex items-center justify-center w-[100%] h-[100vh] bg-blue-400 px-4'>
    <div className='bg-white shadow-black md:w-[25%] md:h-[75vh] h-[80vh] rounded-xl text-center overflow-auto shadow-2xl'>
    <h1 className='mt-4 text-4xl font-bold text-center text-white bg-blue-500 shadow ronded'>ToDo List</h1>
    <div className='flex items-center justify-center px-2'>
    <input type="text"  placeholder='Enter an item' className='my-4 text-lg text-center border-b-4 border-blue-400 outline-none md:text-2xl' value={input} onChange={itemEvent}/>
    <button onClick={listOfItems}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor" class="md:w-10 md:h-10 w-6 h-6 text-white bg-blue-400 rounded-full p-1 hover:bg-green-400 hover:cursor-pointer duration-300 ease-in-out">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg></button>

    </div>
    <ul>
        {items.map((itemval,index)=>{
           return <ToDoList
           key={index}
           id={index}
            text={itemval}
            onselect={deleteItems}
            />
         })
         
        }
    </ul>
    </div>
    </div>
  )
}

export default Home
