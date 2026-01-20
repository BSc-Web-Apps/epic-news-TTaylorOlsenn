import portrait1 from '#app/assets/jpg/portrait-01.jpg'
import portrait2 from '#app/assets/jpg/portrait-02.jpg'
import portrait3 from '#app/assets/jpg/portrait-03.jpg'
import TeamMemberCard from '#app/components/organisms/TeamMemberCard.tsx'

export default function AboutUsRoute() {
	return (
		<main className="container py-16">
			<h1 className="text-mega">About Us</h1>
			<div className="place-items-center p-8">
				<h3 className="text-h3 mb-2">Meet our team</h3>
				<p className="text-base md:text-lg lg:text-xl">
					Welcome to Epic News, where the latest developments in tech are found.
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
			<div className="place-items-center p-8">
				<h3 className="text-h3 mb-2">What is Epic News?</h3>
				<p className="m-4 text-base md:text-lg lg:text-xl">
					We're a dynamic group of individuals who are passionate about what we
					do.
				</p>
				<p className="m-4 text-base md:text-lg lg:text-xl">
					Our goal is to provide independent, unbiased news happening around the
					world.
				</p>
				<p className="m-12 text-base md:text-lg lg:text-xl">
					Want to join our team? Click the button below to find out more!
				</p>
				<div className="flex flex-col flex-nowrap items-center justify-start gap-4 p-8">
					<button className="rounded-lg bg-blue-900 p-4 shadow-2xl">
						Learn More
					</button>
				</div>
			</div>
		</main>
	)
}
