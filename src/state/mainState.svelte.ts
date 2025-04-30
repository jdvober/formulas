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

export let blankUnitInfo = {
	value: {
		long: '',
		short: '',
	},
	color: '',
	units: {
		long: '',
		short: '',
	},
	example: '',
	description: '',
}

let unitInfo = $state(blankUnitInfo)
export let getUnitInfo = () => {
	return unitInfo
}
export let setUnitInfo = (newUnitInfo: TermType) => {
	unitInfo = newUnitInfo
}
