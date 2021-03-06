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


  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8' >
      <h3 className='text-xl mb-8 font-semibold border-b pb-4' >
        <div className='grid grid-cols-1 gap-4 mb-4' >
          <textarea ref={commentEl} 
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus_ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Comentario'
          name='comment'
          />

        </div>
        <div className='grid grid-cols-1 gap-4 mb-4' >
          <input
           type="text" 
           ref={nameEl}
           className='py-2 outline-none w-full rounded-lg focus:ring-2 focus_ring-gray-200 bg-gray-100 text-gray-700'
           />
        </div>
        <div className='grid grid-cols-1 gap-4 mb-4' >

        </div>

      </h3>
    </div>
  )
}

export default CommentsForm