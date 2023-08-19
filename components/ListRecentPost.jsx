"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { graphqlCMS, QUERY_TOP4_POST } from '@services/graphql/Queries';

import PostCardRecent from "@components/PostCardRecent";

const ListRecentPost = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      graphqlCMS.request(QUERY_TOP4_POST).then(res => setPosts(res.posts))
    }, []);
  return (
    <div className="bg-white bg-opacity-60 shadow-lg rounded-lg">
      <div className='text-center justify-center pt-4 text-lg text-gray-500 font-normal'>新着記事</div>
      <div className="lg:col-span-9 col-span-1 grid lg:grid-cols-2 lg:gap-4 lg:px-8">
            {posts?.map( (post) => (
              <div key={post?.slug}>
                <PostCardRecent post={post} key={post?.slug}/> 
              </div>
            ))}
      </div>
      <div className='transistion duration-400 hover:text-blue-600 hover:font-semibold text-right pr-16 pb-4 text-sm text-gray-500 font-normal'>
        <Link href={`/post/`}>
          新着記事をもっと見る...
        </Link>  
      </div>
    </div>
  )
}

export default ListRecentPost