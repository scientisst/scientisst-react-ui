import { Head, Html, Main, NextScript } from "next/document"

import { DarkThemeScript } from "../dark-theme"

export default function Document() {
	return (
		<Html>
			<Head></Head>
			<body>
				<DarkThemeScript />
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
