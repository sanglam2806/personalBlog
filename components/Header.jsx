"use client"
import {useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

import React, { useContext } from 'react'

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((result) => setCategories(result));
    }, [])

  return (
    <div className="mx-auto px-8">
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-4xl text-blue-400'>
                        Tim Mitsuru
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link href={`/category/${category.slug}`} key={category.slug}>
                        <span className='md:float-right mt-2 align-middle text-blue-400 ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header