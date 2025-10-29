const list1 = [
	'dumb',
	'sucky',
	'doofus',
	'foolish',
	'simpleminded',
	'lazy',
	'dull',
	'surly',
	'lame',
	'underclocked',
	'rickety',
	'ignorant'
]

const list2= [
	'college dropout',
	'backup dancer',
	'brainrotted',
	'less popular',
	'illegitimate',
	'idiotic',
	'moronic',
	'poorly constructed',
	'aftermarket',
	'rusted out',
	'antique',
	'scumbag'
]

document.onreadystatechange = () => {
	if (document.readyState === "interactive") {
		const word1 = list1[Math.floor(Math.random() * list1.length)]
		const word2 = list2[Math.floor(Math.random() * list2.length)]
		document.getElementById('space1').innerHTML = word1
		document.getElementById('space2').innerHTML = word2
	}
}