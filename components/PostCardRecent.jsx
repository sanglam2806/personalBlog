import React from 'react'
import moment from 'moment';
import 'moment/locale/ja'
import Link from 'next/link';
moment.locale('ja')
const PostCardRecent = ({ post }) => {
  return (
    <div className='shadow-lg rounded-lg p-0 lg:p-4 m-8'>
        <div className='relative overflow-hidden shadow-md lg:pb-[21vw] md:pb-[26vw] pb-[45vw] px-[1vw] rounded-lg mb-6' key={post?.title}>
          <img
            src={post?.featureImage?.url}
            alt={post?.title}
            className='object-center absolute lg:h-[20vw] md:h-[25vw] h-[44vw] w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
          />
        </div>
        <h1 className='transition duration-100 text-center lg:mb-8 mb-2 cursor-pointer hover:text-pink-600 text-base md:text-xl lg:text-3xl font-semibold'>
          <Link href={`/post/${post?.slug}`}>
            {post?.title}
          </Link>
        </h1>
        <div className='lg:flex text-center items-center justify-center mb-8 w-full'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-[5px]'>
            <img
              alt={post?.author?.name}
              height='30px'
              width='30px'
              className='align-middle rounded-full'
              src={post?.author?.photo?.url}
            />
            <p className='inline align-middle text-gray-700 ml-2 text-md'>{post?.author?.name}</p>
          </div>
          <div className='block font-medium text-xs text-gray-700'>
            <span className='block'> {moment(post?.createdAt).format('LL')}</span>
          </div>
        </div>
        <p className='text-center text-sm text-gray-700 font-normal px-4 lg:px-20 mb-8'>{post?.excerpt}</p>
        <div className='text-center pb-1'>
          <Link href={`/post/${post?.slug}`}>
            <span className='transistion duration-500 transform hover:-translate-y-1 inline-block bg-blue-500 md:text-sm lg:text-lg font-medium rounded-full text-white px-2 md:px-4 lg:px-8 py-3 cursor-pointer'>
              もっとみる
            </span>
          </Link>
        </div>
    </div>
  )
}

export default PostCardRecent