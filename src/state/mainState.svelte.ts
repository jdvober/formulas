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

let topicsToggleStates = $state({
	PS: {
		id: 'PS',
		name: 'Physical Science',
		checkedState: true,
		formulas: {
			chemistry: {
				id: 'chemistryPS',
				name: 'Chemistry',
				checkedState: true,
				formulas: {
					density: {
						id: 'density',
						name: 'Density',
						checkedState: true,
					},
					pressure: {
						id: 'pressure',
						name: 'Pressure',
						checkedState: true,
					},
					gasLaws: {
						id: 'gasLaws',
						name: 'Gas Laws',
						checkedState: true,
						formulas: {
							checkedState: true,
							boyles: {
								id: 'boyles',
								name: "Boyle's Law",
								checkedState: true,
							},
							charles: {
								id: 'charles',
								name: "Charles' Law",
								checkedState: true,
							},
							gls: {
								id: 'gls',
								name: "Gay-Lussac's Law",
								checkedState: true,
							},
						},
					},
					specificHeat: {
						id: 'specificHeat',
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
								id: 'speedPS',
								name: 'Speed',
								checkedState: true,
							},

							velocity: {
								id: 'velocityPS',
								name: 'Velocity',
								checkedState: true,
							},
							acceleration: {
								id: 'accelerationPS',
								name: 'Acceleration',
								checkedState: true,
							},
						},
					},
					momentum: {
						id: 'momentumPS',
						name: 'Momentum',
						checkedState: true,
					},
					force: { id: 'forcePS', name: 'Force', checkedState: true },
					energy: {
						id: 'energyPS',
						name: 'Work, Power and Energy',
						checkedState: true,
						formuals: {
							work: {
								id: 'work',
								name: 'Work',
								checkedState: true,
							},
							power: {
								id: 'power',
								name: 'Power',
								checkedState: true,
							},
							gpe: {
								id: 'gpePS',
								name: 'Gravitational Potential Energy',
								checkedState: true,
							},
							ke: {
								id: 'kePS',
								name: 'Kinetic Energy',
								checkedState: true,
							},
						},
					},
					waveSpeed: {
						id: 'waveSpeedPS',
						name: 'Wave Speed',
						checkedState: true,
					},
					ohmsLaw: {
						id: 'ohmsLawPS',
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
