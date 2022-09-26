import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {portfolioData} from '../data'

function Works() {
  return (
    <div id='works'>

        <div className='pt-[60px] grid text-right place-items-center text-primary dark:text-secondary gap-10'>
                <div className='text-right flex flex-col container'>
                    <h1 className='font-extrabold text-4xl text-center uppercase'>
                        Works
                    </h1>

                    
                </div>
        </div>
        
        <div className='container text-primary dark:text-secondary'>
            <ul id='style-2' className='relative  text-secondary min-h-screen border-secondary flex  overflow-x-scroll gap-4 snap-x snap-mandatory'>
                {portfolioData.map((item,i)=>(
                    <li key={i}  className='shrink-0 text-center w-screen snap-center flex justify-center items-center flex-col'>
                        <div className='max-w-[65%] rounded-xl'>
                            <Image className='rounded-xl' src={item.thumbnail} size='3rem'/>
                        </div>
                        <h3 className='font-bold text-xl text-primary dark:text-secondary '>{item.title}</h3>
                        <p className='text-primary dark:text-secondary '>{item.des1}</p>
                        <p className='text-primary dark:text-secondary '>{item.des2}</p>
                        <Link href={item.link}>
                            <a className='font-extrabold text-primary dark:text-secondary  '>
                                visit
                            </a>
                        </Link>                        
                    </li>
                ))}   
            </ul>
        </div>
    </div>
  )
}

export default Works