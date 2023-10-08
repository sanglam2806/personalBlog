import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, {useState, useEffect} from 'react'


const Pagination = ({totalPage}) => {
    const searchParams = useSearchParams();
    const [pageNumbers, setPageNumber] = useState([]);
    const page = searchParams?.get('page') ? searchParams?.get('page') : 1;

    useEffect(() => {
        if (totalPage <= 1) return;

        if (totalPage <= 5) {
            const newArray = Array.from(Array(Number(totalPage)), (_, i) => i + 1);
            return setPageNumber(newArray);
        }

        if (totalPage > 5) {
            const newArray = Array.from(Array(Number(totalPage)), (_, i) => i + 1);
            return setPageNumber(newArray);
        }
    },[totalPage]);

    return (
        <div className='pagination'>
            { page > 1 ? (
                <Link href={{pathname: '/post',query: { page: Number(page - 1) }}} className='prev-next'>
                    <i className='fa-solid fa-arrow-left'/>Prev
                </Link>
             ) : (
                 <Link href='/' />
            ) }

            <ul className='numbers'>
                {
                    pageNumbers.map( num => (
                        <Link href={{pathname: '/post',query: { page: Number(num) }}} key={num}>
                            <li className={page == num ? 'active' : ''}>{num}</li>
                        </Link>
                    ))
                }
            </ul>

            { page < totalPage ? (
                <Link href={{pathname: '/post',query: { page: Number(page) + 1}}}  className='prev-next'>
                    Next<i className='fa-solid fa-arrow-right'/>
                </Link>
            ) : (
                <Link href='/' />
            )}
        </div>
    )
}

export default Pagination