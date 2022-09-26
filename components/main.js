import React from 'react'
import Scroller from './scroller'

function Main() {
  return (
    <div id='about' className='pt-[60px] grid text-right place-items-center text-primary dark:text-secondary min-h-screen  gap-10'>
        <div className='text-right flex flex-col container'>
            <h1 className='font-extrabold text-4xl text-center'>
                ABOUT ME
            </h1>

            <h4 className='text-xl font-semibold text-center py-4'>
                I am a third year student in information security at the Technological College of Omsk. I&apos;m also self-taught, I&apos;m very interested in frontend and backend development. I&apos;m very interested in creating things related to technology and art. I enjoy learning on platforms that help me improve my skills, such as:
            </h4>

            <p className='text-base font-bold text-center'>
                FREECODECAMP ACADEMIA X AND THEODINPROJECT
            </p>
        </div>

        <Scroller text='My stack : Html /Css / Scss / TailwindCss / React / NextJs.'/>
    </div>
  )
}

export default Main