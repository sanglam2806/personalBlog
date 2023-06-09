"use client"
import React from 'react'
import Categories from "@components/Categories";
import Postwidget from "@components/PostWidget";
import ListPost from "@components/ListPost";

const AllPosts = ({slug}) => {
  return (
    <div className="lg:px-32 md:px-16 px-4 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <ListPost/>
        <div className="lg:col-span-3 col-span-1">
            <div className="lg:sticky relative top-8">
              <Categories/>
              {slug?<Postwidget/>: <></>}
            </div>
        </div>
      </div>
    </div>
  )
}

export default AllPosts