import Post from '@/components/post';
import UpvoteBtn from '@/components/upvote-btn';
import { Suspense } from 'react';

export default async function Page({ params }: { params: { id: string } }) {
	return (
		<main className='px-7 pt-24 text-center'>
			<Suspense fallback='Loading post...'>
				<Post params={params} />
				<UpvoteBtn />
			</Suspense>
		</main>
	);
}
