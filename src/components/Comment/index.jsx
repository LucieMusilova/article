import React from 'react';

const Comment = ({author, date, text}) => {
  
  return (
    <div className='comment'>
      <div className='comment__about'>
        <p className='comment__author'>{author}</p>
        <p className='comment__date'>{date}</p>
      </div>  
      <p className='comment__text'>{text}</p>
    </div>
  )
}

export default Comment;