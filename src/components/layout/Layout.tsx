import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
	return (
		<div className="flex min-h-screen">
			<Header />

			<main className="flex-1 w-full pt-16">
				<Outlet />
			</main>
		</div>
	)
}
