/*
See ./SvelteStateManagementStrategies.md for different ways to manage state in Svelte.
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

export const psTopicsChem = ['Chemistry_PS', 'Matter_PS', 'Gas_Laws_PS']
export const psTopicsPhy = [
	'Physics_PS',
	'Kinematics_PS',
	'Dynamics_PS',
	'Energy_PS',
	'Waves_PS',
	'Electricity_PS',
]

let newArray = psTopicsChem
psTopicsPhy.forEach((topic) => {
	newArray.push(topic)
})
export const psTopics = newArray

export const psFormulas = [
	'Density_PS',
	'Pressure_PS',
	'Boyles_Law_PS',
	'Charles_Law_PS',
	'Gay-Lussacs_Law_PS',
	'Specific_Heat_PS',
	'Speed_PS',
	'Velocity_PS',
	'Acceleration_PS',
	'Momentum_PS',
	'Work_PS',
	'Power_PS',
	'Gravitational_Potential_Energy_PS',
	'Kinetic_Energy_PS',
	'Wave_Speed_PS',
	'Ohms_Law_PS',
]

let topicsTogglesState = $state([
	{
		id: 'Boyles_Law_PS',
		name: "Boyle's Law",
		checkedState: true,
		tags: ['PS', 'Chemistry', 'GasLaws', 'Boyle'],
	},
	{
		id: 'PhysicalScience',
		name: 'Physical Science',
		checkedState: false,
		tags: ['PS'],
	},
	{
		id: 'Chemistry_PS',
		name: 'All Chemistry',
		checkedState: false,
		tags: ['PS', 'Chemistry'],
	},
	{
		id: 'Matter_PS',
		name: 'Matter',
		checkedState: false,
		tags: ['PS', 'Chemistry', 'Matter'],
	},
	{
		id: 'Density_PS',
		name: 'Density',
		checkedState: true,
		tags: ['PS', 'Chemistry', 'Matter', 'Density'],
	},
	{
		id: 'Pressure_PS',
		name: 'Pressure',
		checkedState: true,
		tags: ['PS', 'Chemistry', 'Matter', 'Pressure'],
	},
	{
		id: 'Specific_Heat_PS',
		name: 'Specific Heat',
		checkedState: true,
		tags: ['PS', 'Chemistry', 'Matter', 'SpecificHeat'],
	},
	{
		id: 'Gas_Laws_PS',
		name: 'Gas Laws',
		checkedState: false,
		tags: ['PS', 'Chemistry', 'GasLaws'],
	},
	{
		id: 'Charles_Law_PS',
		name: "Charles' Law",
		checkedState: true,
		tags: ['PS', 'Chemistry', 'GasLaws', 'Charles'],
	},
	{
		id: 'Gay-Lussacs_Law_PS',
		name: "Gay-Lussac's Law",
		checkedState: true,
		tags: ['PS', 'Chemistry', 'GasLaws', 'GayLussac'],
	},
	{
		id: 'Physics_PS_PS',
		name: 'Physics_PS',
		checkedState: true,
		tags: ['PS', 'Physics'],
	},
	{
		id: 'Kinematics_PS',
		name: 'Kinematics',
		checkedState: true,
		tags: ['PS', 'Physics', 'Kinematics'],
	},
	{
		id: 'Speed_PS',
		name: 'Speed',
		checkedState: true,
		tags: ['PS', 'Physics', 'Kinematics', 'Speed'],
	},
	{
		id: 'Velocity_PS',
		name: 'Velocity',
		checkedState: true,
		tags: ['PS', 'Physics', 'Kinematics', 'Velocity'],
	},
	{
		id: 'Acceleration_PS',
		name: 'Acceleration',
		checkedState: true,
		tags: ['PS', 'Physics', 'Kinematics', 'Acceleration'],
	},
	{
		id: 'Momentum_PS',
		name: 'Momentum',
		checkedState: true,
		tags: ['PS', 'Physics', 'Kinematics', 'Momentum'],
	},
	{
		id: 'Dynamics_PS',
		name: 'Force',
		checkedState: true,
		tags: ['PS', 'Physics', 'Dynamics'],
	},
	{
		id: 'Energy_PS',
		name: 'Work, Power and Energy',
		checkedState: true,
		tags: ['PS', 'Physics', 'Energy'],
	},
	{
		id: 'Work_PS',
		name: 'Work',
		checkedState: true,
		tags: ['PS', 'Physics', 'Energy', 'Work'],
	},
	{
		id: 'Power_PS',
		name: 'Power',
		checkedState: true,
		tags: ['PS', 'Physics', 'Energy', 'Power'],
	},
	{
		id: 'Gravitational_Potential_Energy_PS',
		name: 'Gravitational Potential Energy',
		checkedState: true,
		tags: ['PS', 'Physics', 'Energy', 'GravitationalPotential'],
	},
	{
		id: 'Kinetic_Energy_PS',
		name: 'Kinetic Energy',
		checkedState: true,
		tags: ['PS', 'Physics', 'Energy', 'Kinetic'],
	},
	{
		id: 'Wave_Speed_PS',
		name: 'Wave Speed',
		checkedState: true,
		tags: ['PS', 'Physics', 'Waves', 'WaveSpeed'],
	},
	{
		id: 'Ohms_Law_PS',
		name: "Ohm's Law",
		checkedState: true,
		tags: ['PS', 'Physics', 'Electricity', 'OhmsLaw'],
	},
])

export let topicsToggles = {
	state: () => topicsTogglesState,
	setState: (newTopicsToggles: typeof topicsTogglesState) => {
		topicsTogglesState === newTopicsToggles
	},
}
