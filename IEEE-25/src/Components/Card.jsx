import React from 'react'

function Card(data) {
  return (
    <>
       <div className="border-2 border-[#215685] rounded-2xl relative">
        <img src={data.img} alt="cardImage" className="rounded-2xl"/>
        <h3 className="text-white text-3xl uppercase text-[28px] font-bold mt-5 absolute top-5 left-3">{data.name}</h3>
        <div className="absolute bottom-5 flex justify-around w-full">
            <button className="bg-white rounded-2xl w-[40%] inline-block h-[40px] cursor-pointer">Details</button>
            <button disabled className="bg-white rounded-2xl w-[40%] inline-block disabled:bg-gray-400 disabled:cursor-not-allowed">Register</button>
        </div>
       </div>
        
    </>
  )
}

export default Card