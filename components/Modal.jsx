"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Modal = ({ children, bg }) => {
    const pathname = usePathname();
    const finalSlashIndex = pathname.lastIndexOf('/');
   
    if (pathname.slice(1).indexOf('/') == pathname.lastIndexOf('/') - 1 ){
        return null;
    }

  return (
    <div>
        <Link href={pathname.slice(0, finalSlashIndex)} className={`modal ${bg}`} scroll={false}/>
        {children}
    </div>
  )
}

export default Modal