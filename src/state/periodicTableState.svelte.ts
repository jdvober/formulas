/*
Export functions/objects with getters/setters, but never export variables that declare state with $state()
Example:



// Option 1

export let value = $state({
	val: {
		//data
	},
	getVal: () => {return value.val}
	setVal: (newVal typeof value.val) => {value.val = newVal}
})


// Option 2

let val = $state(false)
export let getVal = () => {
	return val
}
export let setVal = (newVal: boolean) => {
	val = newVal
}

// Option 3

let val = $state(false)
export let value = {
	getState: () => val,
	setState: (newValue: typeof val) => {
		val = newValue
	},
}

snippet stateUseGetSet for a template of getters/setters
*/

import { blankElementInfo } from '../components/PeriodicTable/ElementInfo.svelte'

export let infoBox = $state({
	info: blankElementInfo,
	get: () => {
		return infoBox.info
	},
	set: (newInfoBoxInfo: typeof infoBox.info) => {
		infoBox.info = newInfoBoxInfo
	},
})
