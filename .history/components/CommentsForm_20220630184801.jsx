import React, {useState,useEffect} from 'react'
import { useRef } from 'react';

const CommentsForm = ({slug }) => {

  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl =useRef()
  const nameEl =useRef()
  const emailEl =useRef()
  const storeDataEl =useRef()

  const handleCommentSubmission()=>{

  }

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8' >
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Deja tu comentario </h3>
        <div className='grid grid-cols-1  gap-4 mb-4' >
          <textarea ref={commentEl} 
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus_ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Comentario'
          name='comment'
          />

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4' >
          <input
           type="text" 
           ref={nameEl}
           className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus_ring-gray-200 bg-gray-100 text-gray-700'
           placeholder='Nombre'
          name='name'
           />
        <input
           type="text" 
           ref={emailEl}
           className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus_ring-gray-200 bg-gray-100 text-gray-700'
           placeholder='Email'
          name='email'
           />
        </div>
     {error && <p className='text-xs text-red-500' >Todos los campos son obligatorios*</p>}
     <div className='mt-8' >
        <button  
           type='button'
           onClick={handleCommentSubmission}
           className='transition duration-500 ease hover:bg-indigo-900 inline-block '
           >
            Enviar cometario
        </button>
     </div>
    </div>
  )
}

export default CommentsForm