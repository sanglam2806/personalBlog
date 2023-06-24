"use client"
import React from 'react'
import { useState, useEffect } from 'react';

import { getPostDetail } from '../../../services';
import Categories from "@components/Categories";
import Postwidget from "@components/PostWidget";
import Author from "@components/Author";
import Comments from "@components/Comments";
import CommentForm from "@components/CommentForm";
import PostDetail from "@components/PostDetail";
import localFont from 'next/font/local'

const myFont = localFont({ src: '../../../public/fonts/A-OTF-Kyoukasho-ICA-Pro-M.otf' })

const PostDetails = ({ params }) => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        getPostDetail(params.slug).then((result) => setPost(result));
    }, [])

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='col-span-1 lg:col-span-9'>
                    <div className={myFont.className}>
                        <PostDetail post={post}/>
                        <Author author={post.author}/>
                        <CommentForm slug={post.slug}/>
                        <Comments slug={post.slug}/>
                    </div>
                </div>
                <div className='col-span-1 lg:col-span-3'>
                    <div className='relative lg:sticky top-8'>
                        <Postwidget slug={post.slug} categories={post.categories?.map((category) => category.slug)}/>
                        <Categories/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails