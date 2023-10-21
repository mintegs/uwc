'use client'
import ArticleCard from '@/components/cards/articleCard'
import { textVariant } from '@/lib/motion'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MdOutlineChevronLeft } from 'react-icons/md'

export default function Articles() {
  return (
    <div
      className='section'
      id='articles'
    >
      <div className={`mt-12 bg-black-100 rounded-t-md`}>
        <div
          className={`bg-slate-400 bg-opacity-20 rounded-t-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[200px]`}
        >
          <motion.div variants={textVariant()}>
            <Link
              href='/articles'
              className='text-white font-black text-2xl capitalize flex items-center hover:text-gray-300'
            >
              مقالات بیشتر
              <MdOutlineChevronLeft className='w-10 h-10' />
            </Link>
          </motion.div>
        </div>
        <div
          className={`-mt-48 md:-mt-20 py-14 sm:px-16 px-6 flex flex-wrap gap-7 bg-neutral-900 rounded-b-md`}
        >
          {[1, 2, 3].map((item, index) => (
            <ArticleCard
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
