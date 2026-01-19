import { NavLink, Outlet } from 'react-router'

export default function NewsRoute() {
	return (
		<main className="container py-16">
			<div className="container">
				<h1 className="text-mega">News</h1>

				<div className="flex space-x-4 py-4">
					<NavLink
						to="technology"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500'}`
						}
					>
						Technology
					</NavLink>

					<NavLink
						to="entertainment"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500'}`
						}
					>
						Sports
					</NavLink>

					<NavLink
						to="business"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500'}`
						}
					>
						Entertainment
					</NavLink>
				</div>
			</div>

			<Outlet />
		</main>
	)
}
