import { type MetaFunction } from 'react-router'
import portrait1 from '#app/assets/jpg/portrait-01.jpg'
import portrait2 from '#app/assets/jpg/portrait-02.jpg'
import portrait3 from '#app/assets/jpg/portrait-03.jpg'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'
import TeamMemberCard from '#app/components/organisms/TeamMemberCard.tsx'
import heroImage from '~/assets/jpg/sample-hero.jpg'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export default function Index() {
	return (
		<main className="grid h-full place-items-center">
			<h1 className="text-mega p-8">Epic News</h1>
			<div className="w-full py-16">
				<HeroCallToAction
					image={heroImage}
					imageRight={true}
					hasBackgroundColour={true}
				>
					<div className="flex flex-col gap-8 px-8">
						<h2 className="text-h2">Welcome to Epic News</h2>
						<p className="text-lg">
							Keep up to date with the latest tech news.
						</p>
					</div>
				</HeroCallToAction>
			</div>
			<div className="place-items-center p-8">
				<h3 className="text-h3 mb-2">Meet our team</h3>
				<p className="">
					We're a dynamic group of individuals who are passionate about what we
					do.
				</p>
			</div>
			<div>
				<div className="flex justify-center space-x-12">
					<TeamMemberCard
						image={portrait1}
						name={`Vasiliy Alyosha`}
						description={`Senior Designer`}
					></TeamMemberCard>
					<TeamMemberCard
						image={portrait2}
						name={`Byron Darrell`}
						description={`Principal Designer`}
					></TeamMemberCard>
					<TeamMemberCard
						image={portrait3}
						name={`Brittani Windsor`}
						description={`VP, User Experience`}
					></TeamMemberCard>
				</div>
			</div>
			<div className="flex flex-col flex-nowrap items-center justify-start gap-4 p-8">
				<p className="text-base md:text-lg lg:text-xl">
					Welcome to Epic News, where the latest developments in tech are found.
				</p>
				<button className="rounded-lg bg-blue-900 p-4 shadow-2xl">
					Learn More
				</button>
			</div>
		</main>
	)
}
