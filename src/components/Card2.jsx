import React from 'react'

function Card2({h1, span, h3, h2, p}) {
  return (
    <div className='card2d flex flex-col items-center gap-[20px] pt-[100px] px-[31px]'>
      <h1 className='text-[85px]'>{h1}<span className='text-[50px]'>{span}</span></h1>
      <h3 className='px-[50px] text-center'>{h3}</h3>
      <p className='pb-[64px] text-center'>{p}</p>
    </div>
  )
}

export default Card2
