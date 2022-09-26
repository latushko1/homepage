import React from 'react'
import Link from 'next/link'

function Links() {
  return (
    <div id='links'>
        <div className='pt-[60px] grid place-items-center text-right text-primary uppercase dark:text-secondary min-h-screen '>
        <h1 className=' font-extrabold text-4xl leading-10'>
            links
        </h1>

        <ul>
                <li className='font-medium text-xl text-left text-primary dark:text-secondary'>
                    <Link href='https://www.instagram.com/latushko1/'>
                        <a className='text-xl uppercase font-bold hover:underline'>
                            instagram
                        </a>
                    </Link>
                    
                   <li className='font-medium text-xl text-left text-primary dark:text-secondary'>
                    <Link href='https://vk.com/latushko1'>
                            <a className='text-xl uppercase font-bold hover:underline'>
                                vk
                            </a>
                        </Link>
                   </li>

                   <li className='font-medium text-xl text-left text-primary dark:text-secondary'>
                    <Link href='https://github.com/latushko1/'>
                            <a className='text-xl uppercase font-bold hover:underline'>
                                github
                            </a>
                        </Link>
                   </li>
                </li>
            </ul>
    </div>

    
    </div>
  )
}

export default Links