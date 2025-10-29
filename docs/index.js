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
	'ignorant',
	'irrelevant',
	'gullible'
]

const list2= [
	'college dropout',
	'backup dancer',
	'brainrotted',
	'less popular',
	'illegitimate',
	'idiot',
	'moron',
	'poorly constructed',
	'aftermarket',
	'rusted out',
	'antique',
	'scumbag',
	'jerry-rigged',
	'dumpster-diving'
]

document.onreadystatechange = () => {
	if (document.readyState === 'interactive') {
		const word1 = list1[Math.floor(Math.random() * list1.length)]
		const word2 = list2[Math.floor(Math.random() * list2.length)]
		document.getElementById('space1').innerHTML = word1
		document.getElementById('space2').innerHTML = word2
	}
}