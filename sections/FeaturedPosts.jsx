'use client'

import React, { useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-grid-carousel';
import FeaturedPostCard from '@components/FeaturedPostCard';
import { getFeaturedPosts } from '../services'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
  };

const FeaturedPosts = () => {
    const [featuredPosts, setFeaturedPosts] = useState ([]);
    const [dataLoad, setDataLoad] = useState(true);

    useEffect(() => {
        getFeaturedPosts().then((results) => {
            setFeaturedPosts(results);
            setDataLoad(true);
        });
    }, []);

    const customLeftArrow = (
        <div className='absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 text-white w-full' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10 19l-7-7m0 0l7-7m-7 7h18' />
          </svg>
        </div>
      );
    
      const customRightArrow = (
        <div className='absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 text-white w-full' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14 5l7 7m0 0l-7 7m7-7H3' />
          </svg>
        </div>
      );

    return (
        <div className= 'mb-8'>
            {/* <Carousel infinite responsive={responsive} itemClass='px-4'>
                {dataLoad && featuredPosts.map((post) => (
                    <FeaturedPostCard post={post}/>
                ))}
            </Carousel> */}
            <Carousel cols={4} rows={1} gap={10}>
                {dataLoad && featuredPosts.map((post) => (
                    <Carousel.Item>
                        <FeaturedPostCard post={post}/>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default FeaturedPosts