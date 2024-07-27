import React from 'react'

function SkeletonProductInfo() {
  return (
    <div className='flex flex-col gap-5' >
      <div className=' h-[20px] w-[320px] bg-slate-200 animate-pulse ' />
      <div className=' h-[20px] w-[150px] bg-slate-200 animate-pulse ' />
      <div className=' h-[20px] w-[300px] bg-slate-200 animate-pulse ' />
      <div className=' h-[20px] w-[200px] bg-slate-200 animate-pulse ' />
      <div className=' h-[20px] w-[150px] bg-slate-200 animate-pulse ' />
      <div className=' h-[20px] w-[180px] bg-slate-200 animate-pulse ' />
    </div>
  )
}

export default SkeletonProductInfo