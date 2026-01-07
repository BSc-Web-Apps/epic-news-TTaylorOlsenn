interface ArticleCardProps {
	title: string
	category?: string
}

export default function ArticleCard({ title, category }: ArticleCardProps) {
	return (
		<div className="line-clamp-3 flex h-60 flex-col justify-between gap-4 rounded-xl bg-red-900 p-4 hover:bg-red-800">
			<h3>{title}</h3>
			<p>{category || 'General News'}</p>
		</div>
	)
}
