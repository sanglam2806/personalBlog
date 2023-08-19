"use client"
import {useState, useEffect} from 'react'
import Link from 'next/link'
import { graphqlCMS, QUERY_SLUG_CATEGORIES } from '@services/graphql/Queries'

import React from 'react'

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        graphqlCMS.request(QUERY_SLUG_CATEGORIES).then(res => setCategories(res.categories));
    }, [])

  return (
    <div className="mx-auto lg:px-8">
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-4xl text-blue-400'>
                        Tim Mitsuru
                    </span>
                </Link>
            </div>
            <div className='md:float-left md:contents'>
                {categories?.map((category) => (
                    <Link href={`/category/${category?.slug}`} key={category?.slug}>
                        <span className='md:float-right mt-2 align-middle lg:text-blue-400 text-blue-800 lg:ml-4 ml-2 font-semibold cursor-pointer'>
                            {category?.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header