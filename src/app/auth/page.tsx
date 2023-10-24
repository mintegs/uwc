import SignInForm from '@/components/forms/signInForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ورود به مینتگس',
  description: 'فرم ورود به وبسایت مینتگس',
}
export default function Auth() {
  return (
    <div className='min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-slate-400 bg-opacity-20 py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          {/* <img
            className='mx-auto w-12 h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
            alt='Workflow'
          /> */}
          <h2 className='mt-6 text-center text-3xl tracking-tight font-bold text-gray-100'>
            ورد به مینتگس
          </h2>
          <SignInForm />
        </div>
      </div>
    </div>
  )
}
