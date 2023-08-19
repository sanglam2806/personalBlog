"use client"
import React from 'react'
import Categories from "@components/Categories";
import Postwidget from "@components/PostWidget";
import ListPost from "@components/ListPost";
import localFont from 'next/font/local'

const japaneseFont = localFont({ src: '../../../public/fonts/A-OTF-Kyoukasho-ICA-Pro-M.otf' })

const PostByCategory = ({params}) => {
  return (
    <div className="lg:px-32 md:px-16 px-4 mb-8">
      <div className={japaneseFont.className}><span className='lg:text-3xl pb-2 md:text-xl font-semibold'> {params.slug} </span></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <ListPost slug={params.slug}/>
        <div className="lg:col-span-3 col-span-1">
            <div className="lg:sticky relative top-8">
                <Categories/>
              {params.slug? <Postwidget/> : <></>}
            </div>
        </div>
      </div>
    </div>
  )
}

export default PostByCategory