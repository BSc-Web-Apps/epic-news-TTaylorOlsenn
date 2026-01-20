interface TeamMemberCardProps {
	image: string
	name: string
	description: string
}

const TeamMemberCard = ({ image, name, description }: TeamMemberCardProps) => {
	return (
		<div className="cursor-pointer transition-all duration-150 hover:scale-105">
			<div className="h-90 w-68 rounded-xl bg-gray-700 px-10 py-8">
				<img
					className="mx-auto h-40 w-40 rounded-full border-4"
					src={image}
					alt={`A photo of ${name}`}
				/>
				<div className="p-6 text-center">
					<h2 className="text-xl">{name}</h2>
					<p className="mt-2 font-semibold text-gray-400">{description}</p>
				</div>
			</div>
		</div>
	)
}

export default TeamMemberCard
