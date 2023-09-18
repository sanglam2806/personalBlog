"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import { graphqlCMS, QUERY_COUNT_POST, QUERY_POSTS_BY_CATEGORY, QUERY_POSTS_BY_PAGE } from '@services/graphql/Queries';

import PostCard from "@components/PostCard";
import Pagination from './Pagination';
import { useSearchParams } from 'next/navigation';

const ListPost = (category) => {
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState([]);

    const searchParams = useSearchParams();
    const page = searchParams?.get('page') ? searchParams?.get('page') : 1;
    const categorySlug  = category.slug;
    const postOnePage = 4;

    const firstCurrentPage = (page - 1) * postOnePage;

    useEffect(() => {
        category.slug? graphqlCMS.request(QUERY_POSTS_BY_CATEGORY,{ categorySlug }).then((result) => setPosts(result.posts)) 
                      : graphqlCMS.request(QUERY_POSTS_BY_PAGE, {firstCurrentPage , postOnePage}).then((result) => setPosts(result.posts));
        
        graphqlCMS.request(QUERY_COUNT_POST).then((result) => 
            setCount(Number(result.postsConnection.aggregate.count) % postOnePage === 0 ?
                Number(result.postsConnection.aggregate.count) % postOnePage :
                (Number(result.postsConnection.aggregate.count) - Number(result.postsConnection.aggregate.count) % postOnePage) / postOnePage + 1
            ));

    }, [page]);

  return (
    <div className="lg:col-span-9 col-span-1">
          {posts?.map( (post) => <PostCard post={post} key={post?.title} />)}

          {category.slug? '' : <Pagination totalPage={count}/>}
    </div>
  )
}

export default ListPost