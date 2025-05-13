export let getNameById = (obj: any, targetId: string) => {
	let returnValue = 'None'
	//console.log(obj)
	const [key, value] = Object.entries(obj)[0]
	// console.log(key)
	// console.log(value)
	// console.log(`\n`)
	if (typeof value === 'object' && value !== null) {
		const entries = Object.entries(value)
		entries.forEach((entry) => {
			let found = false
			let k = entry[0]
			let v = entry[1]
			if (k === 'id') {
				if (v === targetId) {
					returnValue = v
					found = true
				}
			}
			if (k === 'formulas') {
			}
			if (k !== 'name' && k !== 'checkedState' && k !== 'id') {
			}
		})
	} else {
		console.error('Value is not an object:', value)
	}
	console.log(`\n\n\n\n`)
	return returnValue
}
