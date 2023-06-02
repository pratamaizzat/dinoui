module.exports = {
	'**/*.{js,ts,cjs,tsx}': [() => 'pnpm -r check', 'eslint'],
}
