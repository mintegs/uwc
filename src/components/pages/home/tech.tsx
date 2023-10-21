'use client'
import { motion } from 'framer-motion'
import { FaCss3, FaHtml5, FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import {
  SiJavascript,
  SiJest,
  SiPrisma,
  SiRedis,
  SiTypescript,
} from 'react-icons/si'
import {
  TbBrandDocker,
  TbBrandFramerMotion,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandSolidjs,
  TbBrandTailwind,
} from 'react-icons/tb'

export default function Tech() {
  const list = [
    {
      name: 'html',
      icon: (
        <FaHtml5 className='w-16 h-16 md:w-32 md:h-32 rounded-full text-orange-500' />
      ),
      color: 'bg-orange-700',
      percent: 100,
    },
    {
      name: 'css',
      icon: (
        <FaCss3 className='w-16 h-16 md:w-32 md:h-32 rounded-full text-cyan-500' />
      ),
      color: 'bg-cyan-700',
      percent: 80,
    },
    {
      name: 'javascript',
      icon: (
        <SiJavascript className='w-16 h-16 md:w-32 md:h-32 rounded-full text-yellow-500' />
      ),
      color: 'bg-yellow-700',
      percent: 98,
    },
    {
      name: 'typescript',
      icon: (
        <SiTypescript className='w-16 h-16 md:w-32 md:h-32 rounded-full text-blue-500' />
      ),
      color: 'bg-blue-700',
      percent: 90,
    },
    {
      name: 'react js',
      icon: (
        <FaReact className='w-16 h-16 md:w-32 md:h-32 rounded-full text-sky-500' />
      ),
      color: 'bg-sky-700',
      percent: 95,
    },
    {
      name: 'node js',
      icon: (
        <FaNodeJs className='w-16 h-16 md:w-32 md:h-32 rounded-full text-green-500' />
      ),
      color: 'bg-green-700',
      percent: 98.9,
    },
    {
      name: 'sass',
      icon: (
        <FaSass className='w-16 h-16 md:w-32 md:h-32 rounded-full text-purple-500' />
      ),
      color: 'bg-purple-700',
      percent: 96,
    },
    {
      name: 'next js',
      icon: (
        <TbBrandNextjs className='w-16 h-16 md:w-32 md:h-32 rounded-full text-indigo-500' />
      ),
      color: 'bg-indigo-700',
      percent: 90,
    },
    {
      name: 'mongodb',
      icon: (
        <TbBrandMongodb className='w-16 h-16 md:w-32 md:h-32 rounded-full text-emerald-500' />
      ),
      color: 'bg-emerald-700',
      percent: 92,
    },
    {
      name: 'tailwind css',
      icon: (
        <TbBrandTailwind className='w-16 h-16 md:w-32 md:h-32 rounded-full text-sky-500' />
      ),
      color: 'bg-sky-700',
      percent: 100,
    },
    {
      name: 'redis',
      icon: (
        <SiRedis className='w-16 h-16 md:w-32 md:h-32 rounded-full text-red-500' />
      ),
      color: 'bg-red-700',
      percent: 87,
    },
    {
      name: 'framer motion',
      icon: (
        <TbBrandFramerMotion className='w-16 h-16 md:w-32 md:h-32 rounded-full text-pink-500' />
      ),
      color: 'bg-pink-700',
      percent: 70,
    },
    {
      name: 'docker',
      icon: (
        <TbBrandDocker className='w-16 h-16 md:w-32 md:h-32 rounded-full text-blue-600' />
      ),
      color: 'bg-blue-800',
      percent: 50,
    },
    {
      name: 'jest',
      icon: (
        <SiJest className='w-16 h-16 md:w-32 md:h-32 rounded-full text-amber-600' />
      ),
      color: 'bg-amber-700',
      percent: 99,
    },
    {
      name: 'solid js',
      icon: (
        <TbBrandSolidjs className='w-20 h-16 md:w-32 md:h-32 rounded-full text-blue-300' />
      ),
      color: 'bg-blue-400',
      percent: 90,
    },
    {
      name: 'prisma',
      icon: (
        <SiPrisma className='w-20 h-16 md:w-32 md:h-32 rounded-full text-white' />
      ),
      color: 'bg-gray-700',
      percent: 89,
    },
  ]

  return (
    <div
      className='section'
      id='skills'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className='my-5 text-center'
      >
        <span className='text-lg md:text-2xl font-bold text-indigo-400'>
          من در چه چیزی متخصص هستم؟
        </span>
        <h1 className='text-[1.3rem] md:text-[3rem] leading-6 md:leading-[4rem] capitalize'>
          تکنولوژی‌ها و فریمورک‌ها
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className='grid grid-cols-3 md:grid-cols-4 mx-auto max-w-3xl gap-y-8 gap-x-2 md:gap-y-16 justify-center bg-slate-400 rounded-md bg-opacity-20 p-5'
      >
        {list.map((item) => {
          return (
            <div
              key={item.name}
              className='flex justify-center relative'
            >
              {item.icon}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={`${item.color} rounded-full bg-opacity-80 cursor-pointer items-center flex absolute w-full h-full gap-6 left-0 top-0 z-[5] justify-center`}
              >
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  transition={{ duration: 0.3 }}
                  className='text-sm md:text-lg font-bold text-center capitalize'
                >
                  <h3>{item.name}</h3>
                  {item.percent}%
                </motion.div>
              </motion.div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
