interface TeamMemberCardProps {
    image: string
    name: string
    description: string
}

const TeamMemberCard = ({
    image,
    name,
    description,

}: TeamMemberCardProps) => {
    return (
        <div className="py-8 px-12 rounded-xl bg-gray-600">
            <img
                className="w-32 h-32 rounded-full mx-auto"
                src={image}
                alt={`A photo of ${name}`}
            />
            <div className="p-6 text-center">
                <h2 className="text-xl">{name}</h2>
                <p className="text-gray-800 font-semibold mt-2">{description}</p>
            </div>
        </div>
    )
}

export default TeamMemberCard