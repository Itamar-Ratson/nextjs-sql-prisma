'use client';
import { createPost } from '@/actions/actions';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';

export default function Page() {
	return (
		<main className='text-center pt-16'>
			<h1 className='text-4xl md:text-5xl font-bold mb-5'>Create post</h1>
			<form className='h-10 space-x-2 mt-10' action={createPost}>
				<input
					type='text'
					name='title'
					placeholder='Title for new post'
					className='border rounded px-3 h-full'
					required
				/>
				<button className='h-full bg-blue-500 px-5 rounded text-white'>Submit</button>
			</form>
			<LogoutLink>Logout</LogoutLink>
		</main>
	);
}