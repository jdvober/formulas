import { match } from 'ts-pattern'

export const VariableColors: VariableColor[] = [
	'#fe6a00',
	'#D1B3FB',
	'#E4F61F',
	'#997D00',
	'#9CDEED',
	'#FF0F97',
	'#073FE6',
	'#FFCC95',
	'#D9FD4B',
	'#91B402',
	'#6A88E2',
	'#CCBEAB',
	'#FF8604',
	'#7D2AF3',
	'#E3EA9A',
	'#FF8787',
	'#F40000',
	'#F1FA8C',
	'#8E7757',
	'#50FA7B',
	'#6AE288',
	'#8BE9FD',
	'#FF5555',
	'#EC8DC3',
	'#B7A48A',
	'#D7AF00',
	'#CAFC03',
	'#1DD3FC',
	'#BD93F9',
	'#FFD82C',
	'#527CFA',
	'#07E63F',
	'#FF79C6',
	'#FFB86C',
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
}
export const SpecificHeatCapacity = {
	symbol: {
		short: 'c',
		long: 'Specific~Heat~Capacity',
	},
	units: [
		{
			symbol: `Unitless`,
			name: 'Unitless',
		},
	],
	color: VariableColors[8],
}
export const Speed = {
	symbol: {
		short: 's',
		long: 'Speed',
	},
	units: [
		{
			symbol: '\\frac{m}{s^2}',
			name: '\\frac{meters}{second^2}',
		},
		{
			symbol: '\\frac{cm}{s^2}',
			name: '\\frac{centimeters}{second^2}',
		},
	],
	color: VariableColors[9],
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
}
export const Velocity = {
	symbol: {
		short: 'v',
		long: 'Velocity',
	},
	units: [
		{
			symbol: '\\frac{m}{s^2}',
			name: '\\frac{meters}{second^2}',
		},
		{
			symbol: '\\frac{cm}{s^2}',
			name: '\\frac{centimeters}{second^2}',
		},
	],
	color: VariableColors[12],
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
}
export const Delta = (variable: Variable, subscriptType: DeltaSubscript) => {
	const subscripts = match(subscriptType)
		.with('NUMERICAL', () => ['1', '2'])
		.with('NUMERICAL_ZERO_BASED', () => ['0', ''])
		.with('INITIAL_FINAL', () => ['i', 'f'])
		.with('STARTING_ENDING', () => ['starting', 'ending'])
		.with('BEGINNING_END', () => ['at the beginning', 'at the end'])
		.otherwise(() => ['', ''])

	return {
		symbol: {
			short: `\\Delta${variable.symbol.short}_{${subscripts[1]}} - ${variable.symbol.short}_{${subscripts[0]}}`,
			long: `(${variable.symbol.long}_{${subscripts[1]}} - ${variable.symbol.long}_{${subscripts[0]}})`,
		},
		units: variable.units.map((unit) => {
			return {
				symbol: unit.symbol,
				name: unit.name,
			}
		}),

		color: VariableColors[14],
	}
}
export const Acceleration = {
	symbol: {
		short: 'a',
		long: 'Acceleration',
	},
	units: [
		{
			symbol: '\\frac{m}{s^3}',
			name: '\\frac{meters}{second^3}',
		},
		{
			symbol: '\\frac{cm}{s^3}',
			name: '\\frac{centimeters}{second^3}',
		},
	],
	color: VariableColors[15],
}
export const Voltage = {
	symbol: {
		short: 'V',
		long: 'Voltage',
	},
	units: [{ symbol: 'V', name: 'Volts' }],
	color: VariableColors[16],
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
}
export const Resistance = {
	symbol: {
		short: 'R',
		long: 'Resistance',
	},
	units: [{ symbol: '\\Omega', name: 'Ohms' }],
	color: VariableColors[18],
}
export const Momentum = {
	symbol: {
		short: '\\rho',
		long: 'Momentum',
	},
	units: [
		{
			symbol: `kg \\cdot \\frac{m}{s^2}`,
			name: 'Kilogram-\\frac{Meters}{Second^2}',
		},
	],
	color: VariableColors[19],
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
}
export const WaveSpeed = {
	symbol: {
		short: 'S_{wave}',
		long: 'Speed_{wave}',
	},
	units: [
		{
			symbol: '\\frac{m}{s^2}',
			name: '\\frac{meters}{second^2}',
		},
		{
			symbol: '\\frac{cm}{s^2}',
			name: '\\frac{centimeters}{second^2}',
		},
	],
	color: VariableColors[23],
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
}
