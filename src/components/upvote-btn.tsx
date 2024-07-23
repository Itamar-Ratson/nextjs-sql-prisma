'use client';
import { useState } from 'react';

export default function UpvoteBtn() {
	const [upvote, setUpvote] = useState(0);
	return (
		<button
			onClick={() => {
				setUpvote(upvote + 1);
			}}
			className='bg-blue-500 text-white p-2 mt-10'>
			👍 {upvote}
		</button>
	);
}
