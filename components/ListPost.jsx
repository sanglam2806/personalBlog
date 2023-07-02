"use client"
import React from 'react'
import { getAllPost, getPostsByCategory } from "../services"
import { useEffect, useState } from 'react';

import PostCard from "@components/PostCard";

const ListPost = (category) => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      (async () => {
        category.slug? getPostsByCategory(category.slug).then((result) => setPosts(result)) : getAllPost().then((result) => setPosts(result));
      })();
    }, []);
  return (
    <div className="lg:col-span-9 col-span-1">
          {posts?.map( (post) => <PostCard post={post?.node} key={post?.title} />)}
    </div>
  )
}

export default ListPost