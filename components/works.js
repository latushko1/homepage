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

                    <div className='flex gap-4 justify-center items-center pt-4 flex-col text-center sm:flex-row'>
                        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z" class="stroke-primary dark:stroke-secondary"></path><path d="M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5" class="stroke-primary dark:stroke-secondary"></path></svg>
                        <h4>Scroll in the grid of images to see the expected behaviour</h4>
                    </div>
                    
                </div>
        </div>
        
        <div className='container text-primary dark:text-secondary'>
            <ul id='style-2' className='relative  text-secondary mt-10 border-secondary flex  overflow-x-scroll gap-4 snap-x snap-mandatory'>
                {portfolioData.map((item,i)=>(
                    <li key={i}  className='shrink-0 text-center w-[125vw] md:w-screen snap-center flex justify-center items-center flex-col'>
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