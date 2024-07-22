export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className='max-w-[1100px] mx-auto bg-white min-h-screen flex flex-col border-x-[1px] border-zinc-300'>
			{children}
		</div>
	);
}
