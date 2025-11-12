import React from 'react'
import List from '../assets/List.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
function Freebook() {
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
    const filterData = List.filter((item) => item.category === 'free');
    

  return (
    <>
     <div className="freebook freebook-horizontal freebook-center bg-base-150 text-base-content rounded p-10">
     <h1 className='font-semibold text-xl pb-2'>Free offered courses</h1>
     <p>The Free Book Course offers readers access to a collection of educational and inspirational books at no cost. It’s designed to help learners explore new subjects, improve their knowledge, and enjoy reading without any financial barrier. This course encourages a love for learning by providing easy access to quality reading materials for everyone </p>
      </div >
      <div>
       <Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}

      </Slider> 
        </div>  
</>
  );
        
    
  
}

export default Freebook
  
