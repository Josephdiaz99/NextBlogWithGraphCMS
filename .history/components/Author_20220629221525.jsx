import React from 'react'

const Author = ({author}) => {
  return (
    <div>
    <img
        alt={author.name}
        height='100px' 
        width='100px' 
    />
    </div>
  )
}

export default Author