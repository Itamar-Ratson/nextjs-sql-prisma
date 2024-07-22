'use client';

import { randomUUID } from 'crypto';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
	{
		href: '/',
		label: 'Home',
	},
	{
		href: '/posts',
		label: 'Posts',
	},
];

export default function Header() {
	const pathname = usePathname();

	return (
		<header className='flex justify-between items-center py-4 px-7 border-b-[1px] border-zinc-300'>
			<Link href='/'>
				<Image
					src='https://bytegrad.com/course-assets/youtube/example-logo.png'
					alt='Logo'
					className='w-[35px] h--[35px]'
					width='35'
					height='35'
				/>
			</Link>
			<ul className='flex gap-x-5 text-[14px]'>
				{navLinks.map((l) => (
					<li key={l.href}>
						<Link className={pathname === l.href ? 'text-zinc-800' : 'text-zinc-400'} href={l.href}>
							{l.label}
						</Link>
					</li>
				))}
			</ul>
		</header>
	);
}
