"use client"
import React from 'react'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import { graphqlCMS, QUERY_SLUG_CATEGORIES } from '@services/graphql/Queries'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    graphqlCMS.request(QUERY_SLUG_CATEGORIES).then(res => setCategories(res.categories));
  }, [])


  return (
    <div className='bg-white bg-opacity-60 shadow-lg rounded-lg p-8 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
          カテゴリー
        </h3>
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className='transistion duration-200 hover:-translate-y-1 hover:text-blue-400 cursor-pointer border-b block pb-3 mb-3'>
              {category.name}
            </span>
          </Link>
        ))}
    </div>
  )
}

export default Categories