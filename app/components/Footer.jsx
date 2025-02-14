import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-2"/>

        <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={assets.mail_icon} alt="mail icon" className="w-6"/>
        attheofficialmukami@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>@ 2025 Iddah Mukami. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-o'>
            <li>
                <a target='_blank' href="https://github.com/Camy4Mukami">Github</a>
            </li>
            <li>
                <a target='_blank' href="https://www.linkedin.com/in/iddah-murithi/">LinkedIn</a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
