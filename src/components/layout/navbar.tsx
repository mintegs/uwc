'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { HiMenuAlt4, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [scroll, setScroll] = useState(false)
  const [toggle, setToggle] = useState(false)
  const pathName = usePathname()

  // const navLinks = ['home', 'about', 'skills', 'articles']
  const navLinks = [
    {
      name: 'خانه',
      forHome: '/',
      forOther: '/',
    },
    {
      name: 'درباره من',
      forHome: '#about',
      forOther: '/#about',
    },
    {
      name: 'تخصص',
      forHome: '#skills',
      forOther: '/#skills',
    },
    {
      name: 'مقالات',
      forHome: '#articles',
      forOther: '/articles',
    },
  ]

  const socials = [
    {
      url: 'https://instagram.com/mohamadresaaa',
      icon: (
        <FaInstagram className='cursor-pointer w-5 h-5 text-white opacity-60 transition-[0.3s] z-[5] hover:opacity-100' />
      ),
    },
    {
      url: 'https://github.com/mohamadresaaa',
      icon: (
        <FaGithub className='cursor-pointer w-5 h-5 text-white opacity-60 transition-[0.3s] z-[5] hover:opacity-100' />
      ),
    },
  ]

  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: 'tween',
        duration: 0.5,
      },
    },
  }

  const navLinkVariants = {
    hidden: {
      display: 'none',
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.7,
      },
    },
  }

  useEffect(() => {
    setScroll(window.scrollY > 20)
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 20)
    })
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={
        scroll
          ? 'fixed w-full top-0 left-0 z-10 header_active'
          : 'fixed w-full top-0 left-0 z-10'
      }
    >
      <div className='relative max-w-[1224px] flex justify-between items-center mx-auto px-8 py-[1.2rem]'>
        <Link
          href='/'
          className='logo'
        >
          <h3>M</h3>
        </Link>
        <ul className='hidden md:flex'>
          {navLinks.map((navlink, index) => {
            return (
              <li
                className='ml-4 text-lg text-gray-400 hover:text-white capitalize'
                key={index}
              >
                <Link
                  href={pathName === '/' ? navlink.forHome : navlink.forOther}
                >
                  {navlink.name}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className='flex'>
          {/* {socials.map((item, index) => {
            return (
              <Link
                href={item.url}
                className='ml-4 last:ml-0'
                key={index}
              >
                {item.icon}
              </Link>
            )
          })} */}
          <Link
            href='/auth'
            className='ml-4 py-1 px-3 last:ml-0 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 transition delay-150 duration-300 ease-in-out'
          >
            ورود
          </Link>
        </div>
        <div className='relative flex items-center justify-center md:hidden cursor-pointer rounded-[50%]'>
          <HiMenuAlt4
            className='w-10 h-10'
            onClick={() => {
              setToggle(true)
            }}
          />
        </div>
        <motion.div
          className='left-0 w-16 h-16 fixed rounded-[50%] top-0 bg-slate-800'
          variants={menuVariants}
          initial='hidden'
          animate={toggle ? 'visible' : 'hidden'}
        ></motion.div>

        <motion.div
          variants={navLinkVariants}
          animate={toggle ? 'visible' : 'hidden'}
          className={`text-white fixed w-full flex items-center justify-center flex-col h-screen left-0 top-8`}
        >
          <HiX
            className={`${
              toggle ? 'flex' : 'hidden'
            } left-10 cursor-pointer w-10 h-10 absolute top-8`}
            onClick={() => setToggle(false)}
          />

          {navLinks.map((navlink, index) => {
            return (
              <li
                className='mt-4 list-none'
                key={index}
              >
                <Link
                  className={`${
                    toggle ? 'flex' : 'hidden'
                  } no-underline uppercase text-white text-2xl opacity-60 transition-all duration-[0.3s] ease-[ease] hover:opacity-100`}
                  href={pathName === '/' ? navlink.forHome : navlink.forOther}
                  onClick={() => setToggle(false)}
                >
                  {navlink.name}
                </Link>
              </li>
            )
          })}
        </motion.div>
      </div>
    </motion.div>
  )
}
