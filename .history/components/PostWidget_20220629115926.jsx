import React, {useState,useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostWidget = ({categories,slug}) => {
    const [relatedPosts, setRelatedPosts] = useState([])

useEffect(() => {
  if(slug){
    getSimilarPosts(category, slug)
    .then((result)=>setRelatedPosts(result))
  }

  return () => {
    second
  }
}, [third])


  return (
    <div>
        PostWidget
    </div>
  )
}

export default PostWidget