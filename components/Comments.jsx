"use client"
import React, { useState, useEffect} from 'react'
import moment from 'moment';
import 'moment/locale/ja';
import parse from 'html-react-parser';
import { getComments } from '../services'

moment().locale('ja');
const Comments = ({slug}) => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, [slug]);

  return (
    <>
      {comments?.length > 0 && (
        <div className='bg-white bg-opacity-60 shadow-lg rounded-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            コメント（
              {comments?.length}
            {'）'}
          </h3>
          {comments.map((comment) => (
            <div key={comment.updatedAt} className='border-b border-gray-100 mb-4 pb-4'>
              <p className='mb-4'>
                <span className='text-lg font-semibold'>{comment.name}</span>
                {' '}
                <span className='text-xs'> 
                  {' '}
                  {moment(comment.updatedAt).format('LL')}
                </span>
              </p>
              <p className='whitespace-pre-line text-gray-600 w-full'>{parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )
      }
    </>
  )
}

export default Comments