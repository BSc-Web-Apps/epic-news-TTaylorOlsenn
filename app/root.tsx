import { useLoaderData } from 'react-router'
import { type Route } from './+types/root.ts'
import { type loader } from './__root.server.tsx'
import { GeneralErrorBoundary } from './components/error-boundary.tsx'
import Document from './components/shared-layout/Document.tsx'
import { useNonce } from './utils/nonce-provider.ts'
import rootLinkElements from './utils/providers/rootLinkElements.ts'
import HeaderWithSearch from './components/organisms/HeaderWithSearch/index.tsx'
import FooterMenuRight from './components/organisms/Footer/FooterMenuRight.tsx'
import HeroCallToAction from '~/components/organisms/Hero/HeroCallToAction.tsx'
import heroImage from '~/assets/jpg/sample-hero.jpg'
import TeamMemberCard from '#app/components/organisms/TeamMemberCard.tsx'
import portrait1 from '#app/assets/jpg/portrait-01.jpg'
import portrait2 from '#app/assets/jpg/portrait-02.jpg'
import portrait3 from '#app/assets/jpg/portrait-03.jpg'
import { text } from 'node:stream/consumers'
import React from 'react'
import { ThemeSwitch, useTheme } from './routes/resources+/theme-switch.tsx'

export const links: Route.LinksFunction = () => {
	return rootLinkElements
}
export { meta } from './__root.client.tsx'
export { headers, loader } from './__root.server.tsx'

export default function App() {
	const data = useLoaderData<typeof loader | null>()
	const nonce = useNonce()
	const theme = useTheme()

	return (
		<Document theme={theme} nonce={nonce} honeyProps={data?.honeyProps}>
			<div className="flex h-screen flex-col justify-between">
				<HeaderWithSearch />

				<div className="flex-1 bg-blue-500">
					<main className="grid h-full place-items-center">
						<h1 className="p-8 text-mega">Epic News</h1>
						<div className="p-8 place-items-center">
							<h3 className="text-h3 mb-2">Meet our team</h3>
							<p className="text-gray-900">We're a dynamic group of individuals who are passionate about what we do.</p>
						</div>
						<div>
							<div className="flex justify-center space-x-12">
							<TeamMemberCard image={portrait1} name={`Vasiliy Alyosha`} description={`Senior Designer`}>
							</TeamMemberCard>
							<TeamMemberCard image={portrait2} name={`Byron Darrell`} description={`Principal Designer`}>
							</TeamMemberCard>
							<TeamMemberCard image={portrait3} name={`Brittani Windsor`} description={`VP, User Experience`}>
							</TeamMemberCard>
							</div>
						</div>
						<div className="w-full py-16">
							<HeroCallToAction image={heroImage} imageRight={true} hasBackgroundColour={true}>
							<div className="flex flex-col gap-8 px-8">
								<h2 className="text-h2">Welcome to Epic News</h2>
								<p className="text-lg">Keep up to date with the latest tech news.</p>
							</div>
						</HeroCallToAction>
						</div>
							<p className="text-base text-gray-600 md:text-lg lg:text-xl">
								Welcome to Epic News, where the latest developments in tech are found.
							</p>
							<button className="bg-blue-900 p-4 rounded-lg shadow-2xl">
								Learn More
							</button>
					</main>
				</div>
				<FooterMenuRight />
				<div className="container flex justify-between pb-5">
          			<ThemeSwitch userPreference={data?.requestInfo.userPrefs.theme} />
        		</div>
			</div>
		</Document>
	)
}

export const ErrorBoundary = GeneralErrorBoundary
