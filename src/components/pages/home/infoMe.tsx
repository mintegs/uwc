'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function InfoMe() {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  }

  return (
    <motion.div
      className='section'
      id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className='w-[150px] h-[150px]'>
        <Image
          width={240}
          height={240}
          className='w-full h-full object-cover rounded-[50%]'
          src='https://avatars.githubusercontent.com/u/41260098?v=4'
          alt='mohamadresaaa'
        />
      </div>
      <div className='flex flex-col items-center relative mt-4'>
        <h3 className='text-white text-base md:text-[2rem] capitalize'>
          سلام من
          <span className='text-indigo-400 font-medium'>
            {' محمدرضا '}
          </span>{' '}
          هستم
        </h3>
        <span className='text-[1.3rem] leading-[1.8] md:text-[2.5rem] md:leading-[1.3] text-white text-center lg:text-[5rem] mt-8'>
          علاقه‌مند
          <br /> به ساخت محصولات <br />
          نوآورانه وب
        </span>
        <motion.div
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate='animation'
          className='absolute capitalize hidden md:block text-gray-300 font-bold text-[0.85rem] cursor-pointer px-4 py-[0.35rem] rounded-[25px] bg-gradient-to-r from-indigo-500 to-pink-500 right-[-1rem] top-14'
        >
          بک‌اند
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate='animation'
          className='absolute capitalize hidden md:block text-gray-300 font-bold text-[0.85rem] cursor-pointer px-4 py-[0.35rem] rounded-[25px] bg-gradient-to-r from-indigo-500 to-pink-500 lg:left-5 md:-left-5 lg:top-12 md:top-14'
        >
          فرانت
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate='animation'
          className='absolute capitalize hidden md:block text-gray-300 font-bold text-[0.85rem] cursor-pointer px-4 py-[0.35rem] rounded-[25px] bg-gradient-to-r from-indigo-500 to-pink-500 left-0 -bottom-10'
        >
          فریلنسر
        </motion.div>
      </div>
    </motion.div>
  )
}
