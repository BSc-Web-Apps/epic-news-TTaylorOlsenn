import siteLogo from '#app/assets/png/epic-news-logo.png'
import { getArticleImgSrc } from '~/utils/misc.tsx'

interface ArticleCardProps {
	title: string
	category?: string
	objectKey?: string
}

export default function ArticleCard({
	title,
	category,
	objectKey,
}: ArticleCardProps) {
	const imageSrc = objectKey ? getArticleImgSrc(objectKey) : siteLogo
	return (
		<div className="cursor-pointer transition-all duration-150 hover:scale-105">
			<div>
				<img
					src={imageSrc}
					alt={title}
					className="h-48 w-full rounded-xl object-cover"
				/>
			</div>
			<div className="line-clamp-3 flex h-60 flex-col justify-between gap-4 rounded-xl bg-red-900 p-4 hover:bg-red-800">
				<h3>{title}</h3>
				<p>{category || 'General News'}</p>
			</div>
		</div>
	)
}
