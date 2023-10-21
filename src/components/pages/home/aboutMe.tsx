'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaPaperPlane, FaTelegram } from 'react-icons/fa'

export default function AboutMe() {
  const information = [
    {
      icon: <FaTelegram />,
      key: 'تلگرام',
      value: 'moonsjs',
    },
    {
      icon: <FaPaperPlane />,
      key: 'ایمیل',
      value: 'mohamadresaaa@gmail.com',
    },
  ]

  return (
    <div
      className='section'
      id='about'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className='my-5 text-center'
      >
        <span className='text-lg md:text-2xl font-bold text-indigo-400'>
          من کی هستم؟
        </span>
        <h1 className='text-[1rem] md:text-[3rem]'>درباره من</h1>
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-[repeat(2,1fr)] place-items-center relative'>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{
            x: [250, 0],
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className='md:max-w-[350px] md:h-[350px] justify-self-center shadow-[0_0_20px_#6366f1] rounded-[5px] bg-gradient-to-r from-indigo-600 to-pink-700'
        >
          {/* <motion.img
            src='https://images.unsplash.com/photo-1697727634899-e04433a2560d?auto=format&fit=crop&q=80&w=2208&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='mohamadresa'
            className='object-cover w-full h-full saturate-100'
            whileHover={{
              y: -48,
              x: 55,
            }}
            transition={{ duration: 0.3 }}
          /> */}
          <motion.div
            whileHover={{
              y: -48,
              x: 55,
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src='https://images.unsplash.com/photo-1697727634899-e04433a2560d?auto=format&fit=crop&q=80&w=2208&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='mohamadresa'
              className='object-cover w-[263px] h-full saturate-100 cursor-pointer'
              width={263}
              height={250}
              quality={50}
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcswcAAhoBagTA+zMAAAAASUVORK5CYII='
            />
          </motion.div>
        </motion.div>
        <motion.div
          className='text-white bg-slate-400 rounded-md bg-opacity-20 flex flex-col px-6 py-4 md:p-4 mt-8'
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ y: [70, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className='md:text-base text-sm max-w-[450px] mb-4'>
            داستان برنامه نویسی من از اونجایی شروع شد که با asp .net web form
            آشنا شدم و چند سال بعدش مهاجرت کردم به asp .net core و حدودا سال ۹۴
            یا ۹۵ بود علاقه خاصی به javascript پیدا کردم و باعث شد به طور
            حرفه‌ای وارد حوزه javascript و nodejs بشم
          </p>
          {information.map((bio, index) => {
            return (
              <div
                className='flex text-[1rem] max-w-[300px] mb-2 last:mb-0'
                key={index}
              >
                <span
                  className={`ml-5 md:ml-12 flex items-center font-medium gap-2`}
                >
                  {bio.icon}
                  {bio.key}
                </span>
                {bio.key === 'تلگرام' ? (
                  <Link
                    href={`https://t.me/${bio.value}`}
                    className='hover:text-indigo-400'
                    target='_blank'
                  >
                    {bio.value}
                  </Link>
                ) : (
                  <span>{bio.value}</span>
                )}
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
