import React from 'react'

const Intro = () => {
  return (
    <div className='h-[30vw]'>
      <div className='flex justify-center w-full'>
        <img
            alt='intro'
            src='notebg.jpg'
            className=' text-center align-middle h-[30vw] w-[80vw]'
        />
        <div className='absolute lg:pt-32 pt-16'>
        Cảm ơn đã đến đây
      </div>
      </div>
    </div>
  )
}

export default Intro