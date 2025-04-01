import { match } from 'ts-pattern'
import { v4 as uuid } from 'uuid'

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

export const Density = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'D',
			long: 'Density',
		},
		subscript: subscript || '',
		units: [
			{
				short: `\\frac{g}{mL}`,
				long: '\\frac{grams}{millileter}',
			},
			{
				short: `\\frac{g}{cm^3}`,
				long: '\\frac{grams}{centimeters^3}',
			},
		],
		color: VariableColors[0],
		description: '',
	}
}
export const Mass = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'm',
			long: 'mass',
		},
		subscript: subscript || '',
		units: [
			{
				short: 'g',
				long: 'grams',
			},
			{
				short: 'kg',
				long: 'kilograms',
			},
			{
				short: 'mg',
				long: 'milligrams',
			},
		],
		color: VariableColors[1],
		description:
			'The mass of an object is the amount of matter in the object.',
	}
}
export const Volume = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'v',
			long: 'Volume',
		},
		subscript: subscript || '',
		units: [
			{
				short: 'mL',
				long: 'millilitres',
			},
			{
				short: 'cm^3',
				long: 'centimeters^3',
			},
			{
				short: 'L',
				long: 'litres',
			},
		],
		color: VariableColors[2],
		description: '',
	}
}
export const Pressure = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'P',
			long: 'Pressure',
		},
		subscript: subscript || '',
		units: [
			{
				short: `atm`,
				long: 'atmospheres',
			},
			{
				short: `kpa`,
				long: 'kilopascals',
			},
		],
		color: VariableColors[3],
		description: '',
	}
}
export const Force = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'F',
			long: 'Force',
		},
		subscript: subscript || '',
		units: [
			{
				short: 'N',
				long: 'Newtons',
			},
			{
				short: `kg \\cdot \\frac{m}{s^2}`,
				long: 'Newtons',
			},
			{
				short: 'lbs',
				long: 'pounds',
			},
		],
		color: VariableColors[4],
		description: '',
	}
}
export const Weight = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'W',
			long: `Weight`,
		},
		subscript: subscript || '',
		units: [
			{
				short: 'N',
				long: 'Newtons',
			},
			{
				short: `kg \\cdot \\frac{m}{s^2}`,
				long: 'Newtons',
			},
			{
				short: 'lbs',
				long: 'pounds',
			},
		],
		color: VariableColors[4],
		description: '',
	}
}
export const Area = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'A',
			long: 'Area',
		},
		subscript: subscript || '',
		units: [
			{
				short: 'cm^2',
				long: 'centimeters^2',
			},
			{
				short: 'm^2',
				long: 'meters^2',
			},
		],
		color: VariableColors[5],
		description: '',
	}
}
export const Temperature = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'T',
			long: 'Temperature',
		},
		subscript: subscript || '',
		units: [
			{
				short: `\\degree C`,
				long: 'Degrees~Celcius',
			},
			{
				short: `\\degree F`,
				long: 'Degrees~Farenheight',
			},
			{
				short: `K`,
				long: 'Kelvin',
			},
		],
		color: VariableColors[6],
		description: '',
	}
}
export const HeatEnergy = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'Q',
			long: 'Heat~Energy',
		},
		subscript: subscript || '',
		units: [
			{
				short: `J`,
				long: 'Joules',
			},
		],
		color: VariableColors[7],
		description: '',
	}
}
export const SpecificHeatCapacity = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'c',
			long: '\\tiny Specific~Heat~Capacity\\normalsize ',
		},
		subscript: subscript || '',
		units: [
			{
				short: `\\frac{J}{K \\cdot kg}`,
				long: '\\frac{Joules}{Kelvin \\cdot kilogram}',
			},
		],
		color: VariableColors[8],
		description: '',
	}
}
export const Speed = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 's',
			long: 'Speed',
		},
		subscript: subscript || '',
		units: [
			{
				short: '\\frac{m}{s}',
				long: '\\frac{meters}{seconds}',
			},
			{
				short: '\\frac{cm}{s}',
				long: '\\frac{centimeters}{seconds}',
			},
		],
		color: VariableColors[9],
		description: '',
	}
}
export const Distance = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'd',
			long: 'Distance',
		},
		subscript: subscript || '',
		units: [
			{ short: 'm', long: 'meters' },
			{ short: 'cm', long: 'centimeters' },
			{ short: 'km', long: 'kilometers' },
			{ short: 'mm', long: 'millimeters' },
		],
		color: VariableColors[10],
		description: '',
	}
}
export const Time = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 't',
			long: 'Time',
		},
		subscript: subscript || '',
		units: [
			{ short: 's', long: 'seconds' },
			{ short: 'min', long: 'minutes' },
			{ short: 'hrs', long: 'hours' },
			{ short: 'ms', long: 'milliseconds' },
			{ short: 'days', long: 'days' },
		],
		color: VariableColors[11],
		description: '',
	}
}
export const Velocity = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'v',
			long: 'Velocity',
		},
		subscript: subscript || '',
		units: [
			{
				short: '\\frac{m}{s}',
				long: '\\frac{meters}{second}',
			},
			{
				short: '\\frac{cm}{s}',
				long: '\\frac{centimeters}{second}',
			},
		],
		color: VariableColors[12],
		description: '',
	}
}
export const Position = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'x',
			long: 'Position',
		},
		subscript: subscript || '',
		units: [
			{ short: 'm', long: 'meters' },
			{ short: 'cm', long: 'centimeters' },
			{ short: 'km', long: 'kilometers' },
			{ short: 'mm', long: 'millimeters' },
		],
		color: VariableColors[13],
		description: '',
	}
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
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: `\\color{${VariableColors[14]}}\\Delta\\color{${variable.color}}${variable.variableSymbol.short}_{${subscripts[1]}} \\color{${VariableColors[14]}}~-~ \\color{${variable.color}}${variable.variableSymbol.short}_{${subscripts[0]}}\\color{${VariableColors[14]}})`,
			long: `\\color{${VariableColors[14]}}(\\color{${variable.color}}${variable.variableSymbol.long}_{${subscripts[1]}} \\color{${VariableColors[14]}}~-~\\color{${variable.color}}${variable.variableSymbol.long}_{${subscripts[0]}}\\color{${VariableColors[14]}})`,
		},
		units: variable.units.map((unit) => {
			return {
				short: unit.short,
				long: unit.long,
			}
		}),

		color: variable.color,
		description: '',
	}
}
export const Acceleration = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'a',
			long: 'Acceleration',
		},
		subscript: subscript || '',
		units: [
			{
				short: '\\frac{m}{s^2}',
				long: '\\frac{meters}{seconds^2}',
			},
			{
				short: '\\frac{cm}{s^2}',
				long: '\\frac{centimeters}{seconds^2}',
			},
		],
		color: VariableColors[15],
		description: '',
	}
}
export const Voltage = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'V',
			long: 'Voltage',
		},
		subscript: subscript || '',
		units: [{ short: 'V', long: 'Volts' }],
		color: VariableColors[16],
		description: '',
	}
}
export const Current = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'I',
			long: 'Current',
		},
		subscript: subscript || '',
		units: [
			{
				short: 'A',
				long: 'Amps',
			},
			{
				short: 'mA',
				long: 'milliamps',
			},
		],
		color: VariableColors[17],
		description: '',
	}
}
export const Resistance = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'R',
			long: 'Resistance',
		},
		subscript: subscript || '',
		units: [{ short: '\\Omega', long: 'Ohms' }],
		color: VariableColors[18],
		description: '',
	}
}
export const Momentum = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: '\\rho',
			long: 'Momentum',
		},
		subscript: subscript || '',
		units: [
			{
				short: `kg \\cdot \\frac{m}{s^2}`,
				long: 'kilograms\\cdot\\frac{meters}{seconds^2}',
			},
		],
		color: VariableColors[19],
		description: '',
	}
}
export const Friction = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'F_{Friction}',
			long: 'Force_{Friction}',
		},
		subscript: subscript || '',
		units: [
			{
				short: 'N',
				long: 'Newtons',
			},
			{
				short: `kg \\cdot \\frac{m}{s^2}`,
				long: 'Newtons',
			},
			{
				short: 'lbs',
				long: 'Pounds',
			},
		],
		color: VariableColors[20],
		description: '',
	}
}
export const Mu = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'DIMENSIONLESS_VARIABLE',
		variableSymbol: {
			short: 'μ',
			long: 'Mu',
		},
		subscript: subscript || '',
		color: VariableColors[21],
		description: 'The Coefficient of Friction',
	}
}
export const Work = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'W',
			long: 'Work',
		},
		subscript: subscript || '',
		units: [
			{
				short: `J`,
				long: 'Joules',
			},
		],
		color: VariableColors[22],
		description: '',
	}
}
export const WaveSpeed = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'S_{wave}',
			long: 'Speed_{wave}',
		},
		subscript: subscript || '',
		units: [
			{
				short: '\\frac{m}{s}',
				long: '\\frac{meters}{seconds}',
			},
			{
				short: '\\frac{cm}{s}',
				long: '\\frac{centimeters}{seconds}',
			},
		],
		color: VariableColors[23],
		description: '',
	}
}
export const Frequency = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'f',
			long: 'Frequency',
		},
		subscript: subscript || '',
		units: [
			{
				short: `Hz`,
				long: 'Hertz',
			},
		],
		color: VariableColors[24],
		description: '',
	}
}
export const Wavelength = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: '\\lambda',
			long: 'Wavelength',
		},
		subscript: subscript || '',
		units: [
			{ short: 'm', long: 'meters' },
			{ short: 'cm', long: 'centimeters' },
			{ short: 'km', long: 'kilometers' },
			{ short: 'mm', long: 'millimeters' },
		],
		color: VariableColors[25],
		description: '',
	}
}
export const Power = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'P',
			long: 'Power',
		},
		subscript: subscript || '',
		units: [
			{
				short: `\\frac{J}{s}`,
				long: '\\frac{Joules}{Second}',
			},
		],
		color: VariableColors[26],
		description: '',
	}
}

export const Energy = (subscript?: string | number): Term => {
	return {
		id: uuid(),
		termType: 'VARIABLE',
		variableSymbol: {
			short: 'E',
			long: 'Energy',
		},
		subscript: subscript || '',
		units: [
			{
				short: `J`,
				long: 'Joules',
			},
		],
		color: VariableColors[27],
		description: '',
	}
}
