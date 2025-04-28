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

let unitInfo = $state({
	value: {
		long: '',
		short: '',
	},
	color: '',
	units: {
		long: '',
		short: '',
	},
	description: '',
})
export let getUnitInfo = () => {
	return unitInfo
}
export let setUnitInfo = (newUnitInfo: TermType) => {
	unitInfo = newUnitInfo
}
