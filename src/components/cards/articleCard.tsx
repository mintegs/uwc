'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineClock } from 'react-icons/hi'

export default function ArticleCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: index * 0.5 }}
    >
      <div className='bg-slate-400 bg-opacity-20 p-5 rounded-xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px] rounded-2xl overflow-hidden'>
          <Image
            src='https://static.roocket.ir/images/cover/2023/4/27/hXg0cdfl2faxHSsmh0JLMC1PFLHnR4fZ1RlcK6CS.png'
            alt='project_image'
            className='w-full h-full object-cover transform transition duration-200 hover:scale-110'
            width={230}
            height={230}
          />
        </div>

        <div className='mt-5'>
          <Link
            href='/articles/1'
            className=''
          >
            <h3 className='text-white hover:text-indigo-400 font-bold text-[24px]'>
              title
            </h3>
          </Link>
        </div>

        <div className='mt-4 flex justify-between'>
          {/* <span className='bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded dark:bg-green-900 dark:text-green-300'>
            javascript
          </span>
          <span className='bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300'>
            Yellow
          </span>
          <span className='bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300'>
            Indigo
          </span> */}
          <Link
            href='/categories/javascript'
            className='cursor-pointer flex items-center group
          text-white bg-indigo-500 text-sm font-medium px-3 py-1 rounded transition
          duration-200 hover:bg-transparent hover:text-indigo-400 border
          border-indigo-500'
          >
            <span>javascript</span>
          </Link>
          {/*  */}
          <span className='flex justify-center items-center text-sm font-medium px-3 py-1 text-gray-300'>
            5 min ago
            <HiOutlineClock className='h-5 w-5 mr-2' />
          </span>
        </div>
      </div>
    </motion.div>
  )
}
