import { invariant } from '@epic-web/invariant'
import { type LoaderFunctionArgs, data, useLoaderData } from 'react-router'
import { prisma } from '~/utils/db.server.ts'
import { getArticleImgSrc } from '~/utils/misc.tsx'
import logo from '#app/assets/png/epic-news-logo.png'

export async function loader({ params }: LoaderFunctionArgs) {
	const { articleId } = params

	invariant(typeof articleId === 'string', 'No article ID provided')

	// Fetch the article by ID
	const article = await prisma.article.findUnique({
		where: { id: articleId },
		select: {
			id: true,
			title: true,
			content: true,
			category: { select: { name: true } },
			owner: { select: { name: true } },
			images: { select: { objectKey: true } },
		},
	})

	invariant(article, 'Article not found')

	return data({ article })
}

const ArticleNotFound = () => {
	return (
		<div className="container flex h-full flex-1 flex-col items-center justify-center">
			<h2 className="text-h2 pb-8 text-center">No article found 🤔</h2>
			<p className="text-center text-xl">
				Please check the article ID in your browser and try again.
			</p>
		</div>
	)
}

export default function ArticleRoute() {
	const { article } = useLoaderData<typeof loader>()

	const imageSrc = article.images[0]?.objectKey
		? getArticleImgSrc(article.images[0].objectKey)
		: logo

	return article ? (
		<div className="container py-16">
			<h2 className="text-h2 pb-8">{article.title}</h2>
			{imageSrc && (
				<div className="mb-8">
					<img
						src={imageSrc}
						alt={article.title}
						className="max-h-[500px] w-full rounded-xl object-cover"
					/>
				</div>
			)}

			<div className="prose max-w-none text-lg">
				<p>{article.content}</p>
			</div>
		</div>
	) : (
		<ArticleNotFound />
	)
}
