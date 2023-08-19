"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import { graphqlCMS, QUERY_POSTS_BY_CATEGORY, QUERY_POSTS_BY_PAGE } from '@services/graphql/Queries';

import PostCard from "@components/PostCard";

const ListPost = (category) => {
    const [posts, setPosts] = useState([]);
    const categorySlug  = category.slug;

    useEffect(() => {
        category.slug? graphqlCMS.request(QUERY_POSTS_BY_CATEGORY,{ categorySlug }).then((result) => setPosts(result.posts)) 
                      : graphqlCMS.request(QUERY_POSTS_BY_PAGE).then((result) => setPosts(result.posts));

    }, []);
  return (
    <div className="lg:col-span-9 col-span-1">
          {posts?.map( (post) => <PostCard post={post} key={post?.title} />)}
    </div>
  )
}

export default ListPost