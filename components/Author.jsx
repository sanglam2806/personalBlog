import React from 'react'
import Image from 'next/image';
import { grpahCMSImageLoader } from '../util';

const Author = ({author}) => {
  return (
    <div className='text-center mt-20 mb-8 pt-12 pb-4 relative rounded-lg bg-black bg-opacity-50'>
        <div className='absolute left-0 right-2 -top-14'>
        <Image
          src={author?.photo?.url}
          loader={grpahCMSImageLoader}
          alt={author?.name}
          height={100}
          width={100}
          className="align-middle rounded-full"
          unoptimized
        />
        </div>
        <h3 className='text-white my-4 text-4xl font-bold'> {author?.name}</h3>
        <p className='text-white px-8 text-base'>{author?.bio}</p>
        <p className='text-white px-8 pb-8 text-base'>Mình là Sang - một đứa trẻ chưa lớn đang đi tìm giá trị bản thân.</p>
    </div>
  )
}

export default Author