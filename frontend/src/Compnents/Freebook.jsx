import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
function Freebook() {

  const[books,setBooks]=useState([])
  useEffect(()=>{
   const getBooks=async()=>{
    try {
     
    const res = await axios.get("http://localhost:4001/books");
    const data=res.data.filter((item) => item.category === 'free')
    setBooks(data);
     console.log(res.data);
    } catch (error) {
      console.log("Error while fetching books",error)
    }
    }
    getBooks();
  },[])

    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    
    

  return (
    <>
     <div className="freebook freebook-horizontal freebook-center bg-base-150 text-base-content rounded p-10">
     <h1 className='font-semibold text-xl pb-2'>Free offered courses</h1>
     <p>The Free Book Course offers readers access to a collection of educational and inspirational books at no cost. It’s designed to help learners explore new subjects, improve their knowledge, and enjoy reading without any financial barrier. This course encourages a love for learning by providing easy access to quality reading materials for everyone </p>
      </div >
      <div>
       <Slider {...settings}>
        {books.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}

      </Slider> 
        </div>  
</>
  );
        
    
  
}

export default Freebook
  
