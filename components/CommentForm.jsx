"use client"
import React, {useRef, useState, useEffect} from 'react'

import { submitComment } from '../services';

const CommentForm = ({slug}) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEf = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEf.current.value = window.localStorage.getItem('email');
  }, [])

  const handelCommentSubmission = () => {
    setError(false);

    const {value: comment} = commentEl.current;
    const {value: name} = nameEl.current;
    const {value: email} = emailEf.current;
    const {checked: storeData} = storeDataEl.current;

    if(!comment || !name|| !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if(storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name');
      window.localStorage.removeItem('email');
    }

    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      })

  }

  return (
    <div className='bg-white bg-opacity-60 shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h1 className='text-xl mb-8 font-semibold border-b pb-4'>考え方をシェアさせてくれませんか？</h1>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea 
          ref={commentEl}
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='コメント'
          name='comment'
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input
          type='text'
          ref={nameEl}
          className='p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='名前'
          name='name'
        />
        <input
            type='text'
            ref={emailEf}
            className='p-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            placeholder='メール'
            name='email'
          />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div>
          <input ref={storeDataEl} type='checkbox' id='storeData' name='storeData'/>
          <label className='ml-2 text-gray-500 cursor-pointer' htmlFor='storeData'>今後からこの名前とメールを使えますか？</label>
        </div>
      </div>
      {error && <p className='p-2 text-xs text-red-500'>必須項目を入力してください!</p>}
      <div>
        <button
          type='button'
          onClick={handelCommentSubmission}
          className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-blue-500 text-lg rounded-full text-white px-8 py-3 cursor-pointer'
        >
          コメント
        </button>
        {showSuccessMessage && <span className='text-md float-right font-semibold mt-3 text-green-500'>コメントしてくれて、ありがとうございました</span>}
      </div>
    </div>
  )
}

export default CommentForm