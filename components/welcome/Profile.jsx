"use client"
import React from 'react'
import { getAuthor } from '@services';
import { useState, useEffect } from 'react';

const Profile = () => {
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        getAuthor().then((result) => setAuthor(result));
    }, [])

  return (
    <div className='mt-2 mb-8 grid grid-cols-12 lg:h-[42vw] md:h-[46vw] sm:h-[49vw]' 
        style={{backgroundImage: 'linear-gradient(rgba(153, 255, 255, 0),rgba(153, 255, 255, 0.1))'}}>
        <div className='flex items-stretch md:items-center relative overflow-hidden col-span-6 sm:mt-6'>
            <img
                alt='profile'
                src={author?.photo?.url}
                className='absolute lg:ml-16 md:ml-8 ml-1 mt-6 align-middle lg:h-[40vw] lg:w-[40vw] p-4 rounded-full'
            />
        </div>
        <div className='flex items-center ml-2 col-span-6 sm:mr-1'>
            <div>
                <p className='block pb-4 text-shadow text-2xl md:text-4xl lg:text-7xl font-medium'>{author?.name}</p>
                <p className='block ml-1 text-xs md:text-base lg:text-2xl'>僕の世界へよろこそ！ミツルと言います</p>
                <p className='block ml-1 text-xs md:text-base lg:text-2xl'>日本にいる撮影が好きのベトナム人です</p>
                <p className='block ml-1 text-xs md:text-base lg:text-2xl'>ここに来た所、出会った人などについて</p>
                <p className='block ml-1 text-xs md:text-base lg:text-2xl'>写真で自分の日本の生活を語ります</p>
                <p className='block ml-1 text-xs md:text-base lg:text-2xl'>観てくださる方の心が、少しでも温かくなるような嬉しいです</p>
            </div>
        </div>
    </div>
  )
}

export default Profile