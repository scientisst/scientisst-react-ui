module.exports = {
	extends: [
		"next/core-web-vitals",
		"plugin:@typescript-eslint/recommended",
		"plugin:jsdoc/recommended",
		"prettier"
	],
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint",
		"react",
		"react-hooks",
		"jsx-a11y",
		"import",
		"jsdoc",
		"prettier"
	],
	rules: {
		"prettier/prettier": "error"
	}
}
