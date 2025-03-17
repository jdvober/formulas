import { match } from 'ts-pattern'

export const VariableColors: VariableColor[] = [
	//Density
	'#fe6a00',
	//Mass
	'#D1B3FB',
	// Volume
	'#07E63F',
	// Pressure
	'#997D00',
	// Force
	'#9CDEED',
	// Area
	'#FF0F97',
	// Temp
	'#073FE6',
	// Heat Energy
	'#FFCC95',
	// Specific Heat Capacity
	'#D9FD4B',
	// Speed
	'#91B402',
	// Distance
	'#6A88E2',
	// Time
	'#CCBEAB',
	// Velocity
	'#FF8604',
	// Position
	'#7D2AF3',
	// Delta
	'#E3EA9A',
	// Acceleration
	'#FF8787',
	// Voltage
	'#F40000',
	// Current
	'#F1FA8C',
	// Resistance
	'#8E7757',
	// Momentum
	'#50FA7B',
	// Friction
	'#6AE288',
	// Mu
	'#8BE9FD',
	// Work
	'#FF5555',
	// Wave Speed
	'#EC8DC3',
	// Frequency
	'#B7A48A',
	// Wavelength
	'#D7AF00',
	// Power
	'#CAFC03',
	// Energy
	'#1DD3FC',
	'#BD93F9',
	'#FFD82C',
	'#527CFA',
	'#FF79C6',
	'#FFB86C',
	'#E4F61F',
]

export const Density = {
	symbol: {
		short: 'D',
		long: 'Density',
	},
	units: [
		{
			symbol: `\\frac{g}{mL}`,
			name: '\\frac{grams}{millileter}',
		},
		{
			symbol: `\\frac{g}{cm^3}`,
			name: '\\frac{grams}{centimeters^3}',
		},
	],
	color: VariableColors[0],
	description: '',
}
export const Mass = {
	symbol: {
		short: 'm',
		long: 'Mass',
	},
	units: [
		{
			symbol: 'g',
			name: 'grams',
		},
		{
			symbol: 'kg',
			name: 'kilograms',
		},
		{
			symbol: 'mg',
			name: 'milligrams',
		},
	],
	color: VariableColors[1],
	description: '',
}
export const Volume = {
	symbol: {
		short: 'v',
		long: 'Volume',
	},
	units: [
		{
			symbol: 'mL',
			name: 'millilitres',
		},
		{
			symbol: 'cm^3',
			name: 'centimeters^3',
		},
		{
			symbol: 'L',
			name: 'litres',
		},
	],
	color: VariableColors[2],
	description: '',
}
export const Pressure = {
	symbol: {
		short: 'P',
		long: 'Pressure',
	},
	units: [
		{
			symbol: `atm`,
			name: 'atmospheres',
		},
		{
			symbol: `kpa`,
			name: 'kilopascals',
		},
	],
	color: VariableColors[3],
	description: '',
}
export const Force = {
	symbol: {
		short: 'F',
		long: 'Force',
	},
	units: [
		{
			symbol: 'N',
			name: 'Newtons',
		},
		{
			symbol: `kg \\cdot \\frac{m}{s^2}`,
			name: 'Newtons',
		},
		{
			symbol: 'lbs',
			name: 'pounds',
		},
	],
	color: VariableColors[4],
	description: '',
}
export const Weight = {
	symbol: {
		short: 'W',
		long: `Weight`,
	},
	units: [
		{
			symbol: 'N',
			name: 'Newtons',
		},
		{
			symbol: `kg \\cdot \\frac{m}{s^2}`,
			name: 'Newtons',
		},
		{
			symbol: 'lbs',
			name: 'pounds',
		},
	],
	color: VariableColors[4],
	description: '',
}
export const Area = {
	symbol: {
		short: 'A',
		long: 'Area',
	},
	units: [
		{
			symbol: 'cm^2',
			name: 'centimeters^2',
		},
		{
			symbol: 'm^2',
			name: 'meters^2',
		},
	],
	color: VariableColors[5],
	description: '',
}
export const Temperature = {
	symbol: {
		short: 'T',
		long: 'Temperature',
	},
	units: [
		{
			symbol: `\\degree C`,
			name: 'Degrees~Celcius',
		},
		{
			symbol: `\\degree F`,
			name: 'Degrees~Farenheight',
		},
		{
			symbol: `K`,
			name: 'Kelvin',
		},
	],
	color: VariableColors[6],
	description: '',
}
export const HeatEnergy = {
	symbol: {
		short: 'Q',
		long: 'Heat~Energy',
	},
	units: [
		{
			symbol: `J`,
			name: 'Joules',
		},
	],
	color: VariableColors[7],
	description: '',
}
export const SpecificHeatCapacity = {
	symbol: {
		short: 'c',
		long: '\\tiny Specific~Heat~Capacity\\normalsize ',
	},
	units: [
		{
			symbol: `Unitless`,
			name: 'Unitless',
		},
	],
	color: VariableColors[8],
	description: '',
}
export const Speed = {
	symbol: {
		short: 's',
		long: 'Speed',
	},
	units: [
		{
			symbol: '\\frac{m}{s}',
			name: '\\frac{meters}{seconds}',
		},
		{
			symbol: '\\frac{cm}{s}',
			name: '\\frac{centimeters}{seconds}',
		},
	],
	color: VariableColors[9],
	description: '',
}
export const Distance = {
	symbol: {
		short: 'd',
		long: 'Distance',
	},
	units: [
		{ symbol: 'm', name: 'meters' },
		{ symbol: 'cm', name: 'centimeters' },
		{ symbol: 'km', name: 'kilometers' },
		{ symbol: 'mm', name: 'millimeters' },
	],
	color: VariableColors[10],
	description: '',
}
export const Time = {
	symbol: {
		short: 't',
		long: 'Time',
	},
	units: [
		{ symbol: 's', name: 'seconds' },
		{ symbol: 'min', name: 'minutes' },
		{ symbol: 'hrs', name: 'hours' },
		{ symbol: 'ms', name: 'milliseconds' },
		{ symbol: 'days', name: 'days' },
	],
	color: VariableColors[11],
	description: '',
}
export const Velocity = {
	symbol: {
		short: 'v',
		long: 'Velocity',
	},
	units: [
		{
			symbol: '\\frac{m}{s}',
			name: '\\frac{meters}{second}',
		},
		{
			symbol: '\\frac{cm}{s}',
			name: '\\frac{centimeters}{second}',
		},
	],
	color: VariableColors[12],
	description: '',
}
export const Position = {
	symbol: {
		short: 'x',
		long: 'Position',
	},
	units: [
		{ symbol: 'm', name: 'meters' },
		{ symbol: 'cm', name: 'centimeters' },
		{ symbol: 'km', name: 'kilometers' },
		{ symbol: 'mm', name: 'millimeters' },
	],
	color: VariableColors[13],
	description: '',
}
export const Delta = (variable: Variable, subscriptType: DeltaSubscript) => {
	const subscripts = match(subscriptType)
		.with('NUMERICAL', () => ['1', '2'])
		.with('NUMERICAL_ZERO_BASED', () => ['0', ''])
		.with('INITIAL_FINAL', () => ['i', 'f'])
		.with('STARTING_ENDING', () => ['Starting', 'Ending'])
		.with('BEGINNING_END', () => ['at the beginning', 'at the end'])
		.otherwise(() => ['', ''])

	return {
		symbol: {
			short: `\\color{${VariableColors[14]}}\\Delta\\color{${variable.color}}${variable.symbol.short}_{${subscripts[1]}} \\color{${VariableColors[14]}}~-~ \\color{${variable.color}}${variable.symbol.short}_{${subscripts[0]}}\\color{${VariableColors[14]}})`,
			long: `\\color{${VariableColors[14]}}(\\color{${variable.color}}${variable.symbol.long}_{${subscripts[1]}} \\color{${VariableColors[14]}}~-~\\color{${variable.color}}${variable.symbol.long}_{${subscripts[0]}}\\color{${VariableColors[14]}})`,
		},
		units: variable.units.map((unit) => {
			return {
				symbol: unit.symbol,
				name: unit.name,
			}
		}),

		color: variable.color,
		description: '',
	}
}
export const Acceleration = {
	symbol: {
		short: 'a',
		long: 'Acceleration',
	},
	units: [
		{
			symbol: '\\frac{m}{s^2}',
			name: '\\frac{meters}{seconds^2}',
		},
		{
			symbol: '\\frac{cm}{s^2}',
			name: '\\frac{centimeters}{seconds^2}',
		},
	],
	color: VariableColors[15],
	description: '',
}
export const Voltage = {
	symbol: {
		short: 'V',
		long: 'Voltage',
	},
	units: [{ symbol: 'V', name: 'Volts' }],
	color: VariableColors[16],
	description: '',
}
export const Current = {
	symbol: {
		short: 'I',
		long: 'Current',
	},
	units: [
		{
			symbol: 'A',
			name: 'Amps',
		},
		{
			symbol: 'mA',
			name: 'milliamps',
		},
	],
	color: VariableColors[17],
	description: '',
}
export const Resistance = {
	symbol: {
		short: 'R',
		long: 'Resistance',
	},
	units: [{ symbol: '\\Omega', name: 'Ohms' }],
	color: VariableColors[18],
	description: '',
}
export const Momentum = {
	symbol: {
		short: '\\rho',
		long: 'Momentum',
	},
	units: [
		{
			symbol: `kg \\cdot \\frac{m}{s^2}`,
			name: 'kilograms\\cdot\\frac{meters}{seconds^2}',
		},
	],
	color: VariableColors[19],
	description: '',
}
export const Friction = {
	symbol: {
		short: 'F_{Friction}',
		long: 'Force_{Friction}',
	},
	units: [
		{
			symbol: 'N',
			name: 'Newtons',
		},
		{
			symbol: `kg \\cdot \\frac{m}{s^2}`,
			name: 'Newtons',
		},
		{
			symbol: 'lbs',
			name: 'Pounds',
		},
	],
	color: VariableColors[20],
	description: '',
}
export const Mu = {
	symbol: {
		short: '\\mu',
		long: 'Mu',
	},
	units: [
		{
			symbol: `Unitless`,
			name: 'Coefficient of Friction',
		},
	],
	color: VariableColors[21],
	description: '',
}
export const Work = {
	symbol: {
		short: 'W',
		long: 'Work',
	},
	units: [
		{
			symbol: `J`,
			name: 'Joules',
		},
	],
	color: VariableColors[22],
	description: '',
}
export const WaveSpeed = {
	symbol: {
		short: 'S_{wave}',
		long: 'Speed_{wave}',
	},
	units: [
		{
			symbol: '\\frac{m}{s}',
			name: '\\frac{meters}{seconds}',
		},
		{
			symbol: '\\frac{cm}{s}',
			name: '\\frac{centimeters}{seconds}',
		},
	],
	color: VariableColors[23],
	description: '',
}
export const Frequency = {
	symbol: {
		short: 'f',
		long: 'Frequency',
	},
	units: [
		{
			symbol: `Hz`,
			name: 'Hertz',
		},
	],
	color: VariableColors[24],
	description: '',
}
export const Wavelength = {
	symbol: {
		short: '\\lambda',
		long: 'Wavelength',
	},
	units: [
		{ symbol: 'm', name: 'meters' },
		{ symbol: 'cm', name: 'centimeters' },
		{ symbol: 'km', name: 'kilometers' },
		{ symbol: 'mm', name: 'millimeters' },
	],
	color: VariableColors[25],
	description: '',
}
export const Power = {
	symbol: {
		short: 'P',
		long: 'Power',
	},
	units: [
		{
			symbol: `\\frac{J}{s}`,
			name: '\\frac{Joules}{Second}',
		},
	],
	color: VariableColors[26],
	description: '',
}

export const Energy = {
	symbol: {
		short: 'E',
		long: 'Energy',
	},
	units: [
		{
			symbol: `J`,
			name: 'Joules',
		},
	],
	color: VariableColors[27],
	description: '',
}
