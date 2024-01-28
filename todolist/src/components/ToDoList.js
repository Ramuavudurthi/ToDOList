import React from 'react'

function ToDoList(props) {
  return (
        <div className='flex items-center justify-start gap-2 ml-4'>
            <button onClick={()=>{
                props.onselect(props.id);
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor" class="w-7 h-7 bg-blue-400 rounded-full text-white p-1 hover:bg-red-500 duration-300 ease-in-out">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

            </button>
      <li className='text-2xl font-semibold text-blue-300'>{props.text}</li>
      </div>
  )
}

export default ToDoList
