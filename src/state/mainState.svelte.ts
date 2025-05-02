/*
Export functions, but never export variables that declare state with $state()
Example:


let useLongValues = $state(false)
export let getUseLongValues = () => {
	return useLongValues
}
export let setLongValues = (newUseLongValue: boolean) => {
	useLongValues = newUseLongValue
}
*/

let useLongValues = $state(true)
export let getUseLongValues = () => {
	return useLongValues
}
export let setLongValues = (newUseLongValue: boolean) => {
	useLongValues = newUseLongValue
}

export let blankUnitInfo: TermType = {
	value: {
		long: '',
		short: '',
	},
	color: '',
	units: {
		type: 'SIMPLE',
		long: { value1: '', value2: '' },
		short: { value1: '', value2: '' },
	},
	exampleValue: '',
	description: '',
}

let unitInfo: TermType = $state(blankUnitInfo)
export let getUnitInfo = () => {
	return unitInfo
}
export let setUnitInfo = (newUnitInfo: TermType) => {
	unitInfo = newUnitInfo
}
