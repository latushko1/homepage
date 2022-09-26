import React from 'react'
import Marquee from 'react-fast-marquee'

function Scroller({text}) {
  return (
    <section className='max-w-full'>
        <Marquee gradient={false} pauseOnHover={false} speed={10} className='my-4 bg-primary font-extrabold uppercase border-y-2 border-secondary py-2 text-[10px] md:text-2xl text-secondary'>
        {text}
        </Marquee>
    </section>
  )
}

export default Scroller