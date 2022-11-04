const code = `
;(function () {
const darkTheme =
    localStorage && localStorage.getItem("darkTheme") !== null
        ? localStorage.getItem("darkTheme") === "true"
        : window.matchMedia("(prefers-color-scheme: dark)").matches

if (darkTheme) {
	document.documentElement.classList.add("dark")
} else {
	document.documentElement.classList.remove("dark")
}
})()`

const DarkThemeScript = () => {
	return <script dangerouslySetInnerHTML={{ __html: code }} />
}

export default DarkThemeScript
