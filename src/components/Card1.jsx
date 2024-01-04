import React from 'react'

function Card1({img1, h2, btn, h1, p}) {
    return (
        <div className=''>
            <div className='flex items-center gap-[10px]'>
                <img src={img1} alt="" />
                <h1>{h2}</h1>
            </div>
            <div className='pt-[309px]'>
                <button className='text-[#BE7E00] bg-[#FFF9EC] rounded-[8px] py-[5px] px-[10px]'>{btn}</button>
                <h1>{h1}</h1>
                <p>{p}</p>
            </div>
        </div>
    )
}

export default Card1
