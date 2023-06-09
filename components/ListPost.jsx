"use client"
import React from 'react'
import { getPosts } from "../services"
import { useEffect, useState } from 'react';

import PostCard from "@components/PostCard";

const ListPost = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      (async () => {
        const res = await getPosts();
        setPosts(res);
      })();
    }, []);
  return (
    <div className="lg:col-span-8 col-span-1">
          {posts?.map( (post) => <PostCard post={post?.node} key={post?.title} />)}
    </div>
  )
}

export default ListPost