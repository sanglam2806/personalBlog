"use client"
import React from 'react'
import Categories from "@components/Categories";
import Postwidget from "@components/Postwidget";
import ListPost from "@components/ListPost";

const PostByCategory = ({params}) => {
  return (
    <div className="px-32 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <ListPost slug={params.slug}/>
        <div className="lg:col-span-3 col-span-1">
            <div className="lg:sticky relative top-8">
              {params.slug? <Postwidget/> : <></>}
              <Categories/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PostByCategory