import {card} from '../assets'

import React from 'react'

const CardDeal = () => {
  return (
    <section className='mt-14 lg:mt-20 justify-between align-start flex flex-wrap'>
      <div className="left__section lg:w-[40%] w-full mb-10 lg:mb-0">
      <h1
          className={`text-[20px] font-semibold lg:text-[30px] text-white font-poppins`}
        >
          Find a better card deal in few easy steps.
        </h1>
        <p className="mt-5 text-dimWhite font-poppins text-[13px] sm:text-[16px] lg:text-[18px]">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className='bg-blue-gradient font-poppins py-2 mt-10 text-[12px] font-[500] px-4 rounded-md'>Get Started</button>
      </div>

      <div className="right__section w-full lg:w-[40%]">
        <img className="w-[100%] h-[100%]" src={card} alt="card" />
      </div>
    </section>
  )
}

export default CardDeal