import Link from 'next/link';
import React from 'react';

export default async function PostList() {
	const response = await fetch('https://dummyjson.com/posts?limit=10');
	const data = await response.json();

	return (
		<ul>
			{data.posts.map((p: any) => (
				<li key={p.id} className='mb-3'>
					<Link href={`/posts/${p.id}`} className='text-2xl font-bold'>
						{p.title}
					</Link>
				</li>
			))}
		</ul>
	);
}
