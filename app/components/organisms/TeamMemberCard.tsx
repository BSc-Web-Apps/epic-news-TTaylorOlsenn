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
        <div className="py-8 px-10 rounded-xl bg-gray-700 w-68 h-90">
            <img
                className="w-40 h-40 rounded-full mx-auto border-4"
                src={image}
                alt={`A photo of ${name}`}
            />
            <div className="p-6 text-center">
                <h2 className="text-xl">{name}</h2>
                <p className="text-gray-400 font-semibold mt-2">{description}</p>
            </div>
        </div>
    )
}

export default TeamMemberCard