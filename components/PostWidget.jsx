"use client"
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/locale/ja'
import Link from 'next/link'
import { graphqlCMS, QUERY_TOP4_POST, QUERY_SIMILAR_POSTS } from '@services/graphql/Queries'

moment.locale('ja')
const PostWidget = ({ categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug) {
      graphqlCMS.request(QUERY_SIMILAR_POSTS, { slug, categories }).then(res => setRelatedPosts(res.posts));
    } else {
      graphqlCMS.request(QUERY_TOP4_POST).then(res => setRelatedPosts(res.posts));
    }
  }, [slug])

  return (
    <div className='bg-white bg-opacity-60 shadow-lg rounded-lg p-4 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
          {slug ? '関連記事' : '新着記事'}
        </h3>
        {relatedPosts.map((post) => (
          <div key={post?.title} className='items-center w-full mb-4'>
            <div className='m-4 items-center'>
              <img
                alt={post?.title}
                src={post?.featureImage.url}
                className='align-middle h-[130px] w-[250px] object-center flex-none object-cover rounded-lg'
              />
            </div>
            <div className='flex-grow ml-4'>
              <p className='text-gray-500 font-xs'>
                {moment(post?.createdAt).format('LL')}
              </p>
              <Link href={`/post/${post?.slug}`} className='text-md' key={post?.title}>
                {post?.title}
              </Link>
            </div>
          </div>
        ))}
    </div>
  )
}

export default PostWidget