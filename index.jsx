import 'dotenv/config'
import * as fs from 'node:fs'
import sourceMapSupport from 'source-map-support'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById("root"))

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function Page () {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	)
}

root.render(
	<Page />
)

sourceMapSupport.install({
	retrieveSourceMap: function (source) {
		// get source file without the `file://` prefix or `?t=...` suffix
		const match = source.match(/^file:\/\/(.*)\?t=[.\d]+$/)
		if (match) {
			return {
				url: source,
				map: fs.readFileSync(`${match[1]}.map`, 'utf8'),
			}
		}
		return null
	},
})

if (process.env.MOCKS === 'true') {
	await import('./tests/mocks/index.ts')
}

if (process.env.NODE_ENV === 'production') {
	await import('./server-build/index.js')
} else {
	await import('./server/index.ts')
}
