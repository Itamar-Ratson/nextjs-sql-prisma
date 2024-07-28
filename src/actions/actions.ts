'use server';

import prisma from '@/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { redirect } from 'next/dist/server/api-utils';

export async function createPost(formData: FormData) {
	// auth check
	const { isAuthenticated } = getKindeServerSession();
	if (!(await isAuthenticated())) {
		redirect('/api/auth/login');
	}

	// validation check here (e.g. zod)

	const title = formData.get('title') as string;
	const body = formData.get('body') as string;

	// update DB
	await prisma.post.create({
		data: {
			title,
			body,
		},
	});

	// revalidate
	revalidatePath('/posts');
}
