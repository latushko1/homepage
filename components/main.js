import React from 'react';
import Scroller from './scroller';
import Link from 'next/link';
import Example from './tabs';
import Tabs from './tabs';

function Main() {
	return (
		<div
			id='about'
			className='pt-[60px] grid text-right place-items-center text-primary dark:text-secondary min-h-screen  gap-10'
		>
			{/* <div className='text-right flex flex-col container'>
            <h1 className='font-extrabold text-4xl text-center'>
                
            </h1>

            <h4 className='text-xl font-semibold text-center py-4'>
                
            </h4>

            <p className='text-base font-bold text-center'>
                <             
            </p>
            <p className='text-base font-bold text-center'>
            <Link href='https://www.academia-x.com/'>
                    <a>
                        ACADEMIA X
                    </a>
                </Link>                
            </p>
            <p className='text-base font-bold text-center'>
            AND 
                <Link href='https://www.theodinproject.com/'>
                    <a>
                        THEODINPROJECT
                    </a>
                </Link>                
            </p>
        </div>

        <Scroller text='My stack : Html /Css / Scss / TailwindCss / React / NextJs.'/> */}

			<Tabs />
		</div>
	);
}

export default Main;
