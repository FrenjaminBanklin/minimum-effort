const list1 = [
	'Dumb',
	'Sucky',
	'Doofus',
	'Foolish',
	'Simpleminded',
	'Lazy',
	'Dull',
	'Surly',
	'Lame'
]

const list2= [
	'College Dropout',
	'Backup Dancer',
	'Brainrotted',
	'Less Popular',
	'Illegitimate',
	'Idiotic',
	'Moronic',
	'Poorly Constructed',
	'Aftermarket'
]

document.onreadystatechange = () => {
	if (document.readyState === "interactive") {
		const word1 = list1[Math.floor(Math.random() * list1.length)]
		const word2 = list2[Math.floor(Math.random() * list2.length)]
		document.getElementById('space1').innerHTML = word1
		document.getElementById('space2').innerHTML = word2
	}
}