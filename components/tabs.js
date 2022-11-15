import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Link from 'next/link';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Tabs() {
	let [categories] = useState({
		About: [
			{
				id: 1,
				title: `I am a third year student in information security at the Technological College of Omsk. I'm also self-taught, I'm very interested in frontend and backend development. I'm very interested in creating things related to technology and art.`,
			},
		],
		Stack: [
			{
				id: 2,
				title: 'Html',
			},
			{
				id: 3,
				title: 'Css',
			},
			{
				id: 4,
				title: 'Scss',
			},
			{
				id: 5,
				title: 'TailwindCss',
			},
			{
				id: 6,
				title: 'React',
			},
			{
				id: 7,
				title: 'Next',
			},
		],
	});

	return (
		<div className='w-full max-w-md px-2 py-16 sm:px-0'>
			<Tab.Group>
				<Tab.List className='flex space-x-1 rounded-xl bg-primary dark:bg-secondary p-1'>
					{Object.keys(categories).map((category) => (
						<Tab
							key={category}
							className={({ selected }) =>
								classNames(
									'w-full rounded-lg py-2.5 text-xl font-medium leading-5 text-secondary dark:text-primary ',
									'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2',
									selected
										? 'bg-white shadow'
										: 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
								)
							}
						>
							{category}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className='mt-2 bg-secondary dark:bg-primary'>
					{Object.values(categories).map((posts, idx) => (
						<Tab.Panel
							key={idx}
							className={classNames(
								'rounded-xl bg-primary dark:bg-secondary p-3  min-h-[320px] grid place-items-center'
							)}
						>
							<ul className='text-center'>
								{posts.map((post) => (
									<li key={post.id} className='relative rounded-md p-3'>
										<h3 className='text-sm font-semibold leading-5 text-secondary dark:text-primary'>
											{post.title}
										</h3>

										<ul className='mt-1 flex space-x-1 text-xs font-bold leading-4 text-secondary dark:text-primary'>
											<li>{post.date}</li>
										</ul>
									</li>
								))}
							</ul>
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}
