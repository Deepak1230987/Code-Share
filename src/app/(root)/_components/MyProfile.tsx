import Link from 'next/link'
import React from 'react'

const MyProfile = () => {
  return (
    <div className='relative group flex items-center '>
      <Link href="/profile" className=' gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 
                hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden'>
                    
                    <span className='text-sm font-medium relative z-10 group-hover:text-white
                 transition-colors'>
My Profile
                    </span>
                </Link>
    </div>
  )
}

export default MyProfile
