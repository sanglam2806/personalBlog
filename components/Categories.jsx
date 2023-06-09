"use client"
import React from 'react'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, [])


  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
          Categories
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