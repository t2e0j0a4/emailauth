import React from 'react'
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-[#232323]">
      <div className="flip-scale-down-diag-1 w-[300px] h-[300px] rounded-[6px] bg-gray-50 flex flex-col justify-center items-center gap-y-3">
        <span className='text-[28px] w-[100%] text-center mx-auto'>Page Not Found</span>
        <span className='w-[100%] text-center text-[21px] font-thin'> Go To <Link className="font-bold underline text-[#232323] hover:text-gray-400" to="/">Login</Link> Page.</span>
      </div>
    </div>
  );
}
