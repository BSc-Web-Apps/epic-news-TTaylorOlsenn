import { useLoaderData } from 'react-router'
import { type Route } from './+types/root.ts'
import { type loader } from './__root.server.tsx'
import { GeneralErrorBoundary } from './components/error-boundary.tsx'
import Document from './components/shared-layout/Document.tsx'
import { useNonce } from './utils/nonce-provider.ts'
import rootLinkElements from './utils/providers/rootLinkElements.ts'

export const links: Route.LinksFunction = () => {
	return rootLinkElements
}
export { meta } from './__root.client.tsx'
export { headers, loader } from './__root.server.tsx'

export default function App() {
	const data = useLoaderData<typeof loader | null>()
	const nonce = useNonce()

	return (
		<Document nonce={nonce} honeyProps={data?.honeyProps}>
			<div className="flex h-screen flex-col justify-between">
				<div className="flex-1 bg-blue-500">
					<main className="grid h-full place-items-center">
						<h1 className="text-mega">Your journey begins here!</h1>
							<p className="text-base text-gray-600 md:text-lg lg:text-xl">
								Welcome to Epic News, where the latest developments in tech are found.
							</p>
							<button className="bg-blue-900 p-4 rounded-lg shadow-2xl">
								Learn More
							</button>
					</main>
				</div>
			</div>
		</Document>
	)
}

export const ErrorBoundary = GeneralErrorBoundary
