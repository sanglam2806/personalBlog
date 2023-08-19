"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Categories from "@components/Categories";
import Postwidget from "@components/PostWidget";
import Author from "@components/Author";
import Comments from "@components/Comments";
import CommentForm from "@components/CommentForm";
import PostDetail from "@components/PostDetail";
import localFont from 'next/font/local';
import { graphqlCMS, QUERY_POST_DETAIL } from '@services/graphql/Queries';

const japaneseFont = localFont({ src: '../../../public/fonts/A-OTF-Kyoukasho-ICA-Pro-M.otf' })
const vietnameseFont = localFont({ src: '../../../public/fonts/Roboto-Light.ttf' })

const PostDetails = ({ params }) => {
    const [post, setPost] = useState([]);
    const [isCommentSubmit, setCommentSubmit] = useState(false);
    const slug = params.slug;

    const handleStateChange = (newValue) => {
        setCommentSubmit(newValue);
      };

    useEffect(() => {
        graphqlCMS.request(QUERY_POST_DETAIL, { slug }).then(result => setPost(result.post));
    }, [slug])

    return (
        <div className='container mx-auto lg:px-10 px-4 mb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='col-span-1 lg:col-span-9'>
                    <div className={post?.isJapanese ? japaneseFont.className : vietnameseFont.className}>
                        <PostDetail post={post} />
                        <Author author={post?.author} />
                        <Comments slug={post?.slug} sharedState={isCommentSubmit} />
                        <CommentForm slug={post?.slug} sharedState={isCommentSubmit} onChange={handleStateChange} />
                    </div>
                </div>
                <div className='col-span-1 lg:col-span-3'>
                    <div className='relative lg:sticky top-8'>
                        <Postwidget slug={post?.slug} categories={post?.categories?.map((category) => category.slug)} />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails