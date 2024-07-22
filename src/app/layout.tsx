import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Container from '@/components/container';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'My Posts',
	description: 'Posts app powered by: Typescript, React, Next.js, SQL & Prisma',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-zinc-200 text-zinc-800`}>
				<Container>
					<Header />
					{children}
					<Footer />
				</Container>
			</body>
		</html>
	);
}
