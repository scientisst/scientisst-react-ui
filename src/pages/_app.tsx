import type { AppProps } from "next/app"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

import "../styles/global.css"

config.autoAddCss = false

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			{/* TODO: locally accessible Lexend font */}
			<style jsx global>{`
				@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600&display=swap");
				@font-face {
					font-family: "Imagine";
					src: url("/imagine.otf") format("opentype");
				}
			`}</style>
			<Component {...pageProps} />
		</>
	)
}
