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

    </div>
  )
}

export default CommentsForm