"use client"
import React from 'react'

const Profile = () => {
  return (
    <div className='mt-2 mb-8 grid grid-cols-12 h-[42vw]' 
        style={{backgroundImage: 'linear-gradient(rgba(153, 255, 255, 0),rgba(153, 255, 255, 0.1))'}}>
        <div className='flex items-stretch md:items-center relative overflow-hidden col-span-6'>
            <img
                alt='profile'
                src='profile.jpg'
                className='absolute lg:ml-16 ml-8 align-middle h-[40vw] w-[40vw] p-4 rounded-full'
            />
        </div>
        <div className='flex items-center ml-2 col-span-6'>
            <div>
                <p className='block pb-4 text-shadow text-4xl lg:text-7xl font-medium'>Tim Mitsuru</p>
                <p className='block ml-1 text-xl lg:text-2xl'>僕の世界へよろこそ！ミツルと言います</p>
                <p className='block ml-1 text-xl lg:text-2xl'>日本にいる撮影が好きのベトナム人です</p>
                <p className='block ml-1 text-xl lg:text-2xl'>ここに来た所、出会った人などについて</p>
                <p className='block ml-1 text-xl lg:text-2xl'>写真で自分の日本の生活を語ります</p>
                <p className='block ml-1 text-xl lg:text-2xl'>観てくださる方の心が、少しでも温かくなるような嬉しいです</p>
            </div>
        </div>
    </div>
  )
}

export default Profile