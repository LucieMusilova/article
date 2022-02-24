import React, { useState, Suspense } from 'react';
import Article from "./../Article";
import articles from "./../../articles.js";
import comments from "./../../comments.js";

//delay in rendering comments
const Comments = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 2 * 1000)).then(
    () => import("./../Comment"));
});

const Application = () => {
//showing more comments or less
  const [next, setNext] = useState(true);

//sorting comments by date
  let sorted = comments.sort((a,b) => {
    return new Date(a.date).getTime() - 
        new Date(b.date).getTime()
  }).reverse();


//getting right format of date
  function getDate(a) {
    let date = new Date(a);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();
    let hour = date.getHours() - 1;
    let min = date.getMinutes();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    if (hour === -1) {
      hour = 23;
    }
    if (min < 10) {
      min = '0' + min;
    }

    return (
      dt + '. ' + month + '. '+ year + ', ' + hour + ':' + min
    );
  }

  
  return (
    <>
      <Article articles={articles} date={getDate(articles.date)}/>

      <Suspense fallback="Načítám komentáře...">

      { next ?
        sorted.slice(0,3).map(
          (item, index) => <Comments key={index} author={item.author} text={item.text} date={getDate(item.date)}/>
        ) :
        sorted.map(
          (item, index) => <Comments key={index} author={item.author} text={item.text} date={getDate(item.date)}/>
        )
      }
      
  
      <button className={next ? 'application__btn' : 'application__btn--hide'} onClick={()=>setNext(!next)}>Další komentáře</button>
      <button className={next ? 'application__btn--hide' : 'application__btn'} onClick={()=>setNext(!next)}>Méně komentářů</button>

      </Suspense>
    </>
  )
}

export default Application;