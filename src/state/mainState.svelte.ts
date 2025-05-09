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


snippet stateUseGetSet for a template of getters/setters
*/

let useLongValues = $state(true)
export let getUseLongValues = () => {
	return useLongValues
}
export let setLongValues = (newUseLongValue: typeof useLongValues) => {
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

export const psTopics = [
	'Density',
	'Pressure',
	"Boyle's Law",
	"Charles' Law",
	"Gay-Lussac's Law",
	'Specific Heat',
	'Speed_PS',
	'Velocity_PS',
	'Acceleration_PS',
	'Momentum_PS',
	'Work',
	'Power',
	'Gravitational Potential Energy_PS',
	'Kinetic Energy_PS',
	'Wave Speed_PS',
	"Ohm's Law_PS",
]
let topicsToggleStates = $state({
	PS: {
		id: '',
		name: 'Physical Science',
		checkedState: true,
		formulas: {
			chemistry: {
				id: 'Chemistry_PS',
				name: 'Chemistry',
				checkedState: true,
				formulas: {
					density: {
						id: 'Density',
						name: 'Density',
						checkedState: true,
					},
					pressure: {
						id: 'Pressure',
						name: 'Pressure',
						checkedState: true,
					},
					gasLaws: {
						id: 'Gas Laws',
						name: 'Gas Laws',
						checkedState: true,
						formulas: {
							checkedState: true,
							boyles: {
								id: "Boyle's Law",
								name: "Boyle's Law",
								checkedState: true,
							},
							charles: {
								id: "Charles' Law",
								name: "Charles' Law",
								checkedState: true,
							},
							gls: {
								id: "Gay-Lussac's Law",
								name: "Gay-Lussac's Law",
								checkedState: true,
							},
						},
					},
					specificHeat: {
						id: 'specific Heat',
						name: 'Specific Heat',
						checkedState: true,
					},
				},
			},
			physics: {
				id: 'physicsPS',
				name: 'Physics',
				checkedState: true,
				formulas: {
					kinematics: {
						id: 'kinematicsPS',
						name: 'Kinematics',
						checkedState: true,
						formulas: {
							speed: {
								id: 'Speed_PS',
								name: 'Speed',
								checkedState: true,
							},

							velocity: {
								id: 'Velocity_PS',
								name: 'Velocity',
								checkedState: true,
							},
							acceleration: {
								id: 'Acceleration_PS',
								name: 'Acceleration',
								checkedState: true,
							},
						},
					},
					momentum: {
						id: 'Momentum_PS',
						name: 'Momentum',
						checkedState: true,
					},
					force: {
						id: 'Force_PS',
						name: 'Force',
						checkedState: true,
					},
					energy: {
						id: 'Energy_PS',
						name: 'Work, Power and Energy',
						checkedState: true,
						formuals: {
							work: {
								id: 'Work',
								name: 'Work',
								checkedState: true,
							},
							power: {
								id: 'Power',
								name: 'Power',
								checkedState: true,
							},
							gpe: {
								id: 'Gravitational Potential Energy_PS',
								name: 'Gravitational Potential Energy',
								checkedState: true,
							},
							ke: {
								id: 'Kinetic Energy_PS',
								name: 'Kinetic Energy',
								checkedState: true,
							},
						},
					},
					waveSpeed: {
						is: 'Wave Speed_PS',
						name: 'Wave Speed',
						checkedState: true,
					},
					ohmsLaw: {
						id: "Ohm's Law_PS",
						name: "Ohm's Law",
						checkedState: true,
					},
				},
			},
		},
	},
})

export let getTopicsToggleStates = () => {
	return topicsToggleStates
}

export let setTopicsToggleStates = (
	newTopicsToggleStates: typeof topicsToggleStates
) => {
	topicsToggleStates = newTopicsToggleStates
}
