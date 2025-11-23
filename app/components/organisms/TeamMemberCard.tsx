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
        <div>
            <img
                className="w-32 h-32 rounded-full"
                src={image}
                alt={`A photo of ${name}`}
            />
            <div className="p-6 text-center">
                <h2 className="text-x1">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default TeamMemberCard