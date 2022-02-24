import React from 'react';

const Article = ({articles, date}) => {
  
  return (
    <>
      <h1 className='article__title'>{articles.title}</h1>
      <div className='article__about'>
        <p className='article__author'>{articles.author}</p>
        <p className='article__date'>{date}</p>
      </div>  
      <p className='article__text'>{articles.text}</p>
    </>
  )
}

export default Article;