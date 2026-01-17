import { CloudSun, Github } from 'lucide-react';

export const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 bg-blue-50 backdrop-blur-md border-b border-white/10">

			{/* Logo */}
			<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
				<div className="bg-gradiant-to-tr from-blue-400 to-cyan-300 h-6 w-6 rounded-full p-1">
					<CloudSun className="w-6 h-6" />
				</div>
				<span className="text-blue-500 fond-bold text-lg tracking-wider">Weather</span>
			</div>

			<div className="flex items-center gap-2">
				<button className="p-2 text-blue-500 hover:text-blue-500 hover:bg-blue-50/10 rounded-full transition-all">
					<Github className="w-6 h-6" />
				</button>
			</div>
		</header>
	)
}