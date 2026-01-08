import { getArticleImgSrc } from '~/utils/misc.tsx'
import logo from '~/assets/png/epic-news-logo.png'
import { Link } from 'react-router'

interface ArticleCardProps {
	articleId: string
	title: string
	category?: string
	objectKey?: string
}

export default function ArticleCard({
	articleId,
	title,
	category,
	objectKey,
}: ArticleCardProps) {
	const imageSrc = objectKey ? getArticleImgSrc(objectKey) : logo
	return (
		<Link to={`/article/${articleId}`}>
			<div>
				<div>
					<img src={imageSrc} alt={title} />
				</div>
				<div className="line-clamp-3 flex h-60 flex-col justify-between gap-4 rounded-xl bg-red-900 p-4 hover:bg-red-800">
					<h3>{title}</h3>
					<p>{category || 'General News'}</p>
				</div>
			</div>
		</Link>
	)
}
