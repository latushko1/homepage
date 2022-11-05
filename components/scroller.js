import React from 'react';
import Marquee from 'react-fast-marquee';

function Scroller({ text }) {
	return (
		<section className='min-w-full'>
			<Marquee
				gradient={false}
				pauseOnHover={false}
				speed={30}
				className='my-4 bg-primary font-extrabold uppercase  border-secondary py-2 text-[10px] md:text-2xl text-secondary'
			>
				{text}
			</Marquee>
		</section>
	);
}

export default Scroller;
