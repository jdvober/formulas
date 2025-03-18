import { v4 as uuid } from 'uuid'
import {
	Acceleration,
	Area,
	Current,
	Delta,
	Density,
	Distance,
	Energy,
	Force,
	Mass,
	Momentum,
	Position,
	Pressure,
	Resistance,
	SpecificHeatCapacity,
	Speed,
	Temperature,
	Time,
	VariableColors,
	Velocity,
	Voltage,
	Volume,
	Weight,
} from './TermList'

export const FormulaList: Topic[] = [
	{
		title: 'Properties of Matter',
		formulas: [
			{
				name: 'DENSITY',
				id: uuid(),
				format: 'A',
				variables: [
					{ ...Density, subscript: '' },
					{ ...Mass, subscript: '' },
					{ ...Volume, subscript: '' },
				],
			},
			{
				name: 'PRESSURE',
				id: uuid(),
				format: 'A',
				variables: [
					{ ...Pressure, subscript: '' },
					{ ...Force, subscript: '' },
					{ ...Area, subscript: '' },
				],
			},
			{
				name: 'SPECIFIC HEAT',
				id: uuid(),
				format: 'E',
				variables: [
					{ ...Energy, subscript: '' },
					{ ...Mass, subscript: '' },
					{ ...SpecificHeatCapacity, subscript: '' },
					{
						...Delta(
							{
								variableSymbol: {
									short: 'T',
									long: 'Temp',
								},
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
								subscript: '',
							},
							'NUMERICAL'
						),
						subscript: '',
						description: '',
					},
				],
			},
		],
	},
	{
		title: 'Gas Laws',
		formulas: [
			{
				name: 'BOYLES LAW',
				id: uuid(),
				format: 'C',
				variables: [
					{ ...Pressure, subscript: '1' },
					{ ...Volume, subscript: '1' },
					{ ...Pressure, subscript: '2' },
					{ ...Volume, subscript: '2' },
				],
			},
			{
				name: "CHARLES' LAW",
				id: uuid(),
				format: 'C',
				variables: [
					{ ...Volume, subscript: '1' },
					{ ...Temperature, subscript: '2' },
					{ ...Temperature, subscript: '1' },
					{ ...Volume, subscript: '2' },
				],
			},
			{
				name: "GAY-LUSSAC'S LAW",
				id: uuid(),
				format: 'C',
				variables: [
					{ ...Pressure, subscript: '1' },
					{ ...Temperature, subscript: '2' },
					{ ...Temperature, subscript: '1' },
					{ ...Pressure, subscript: '2' },
				],
			},
		],
	},

	{
		title: 'Motion',
		formulas: [
			{
				name: 'SPEED',
				id: uuid(),
				format: 'A',
				variables: [
					{ ...Speed, subscript: '' },
					{ ...Distance, subscript: '' },
					{ ...Time, subscript: '' },
				],
			},
			{
				name: 'VELOCITY',
				id: uuid(),
				format: 'A',
				variables: [
					{ ...Velocity, subscript: '' },
					{
						...Delta(
							{ ...Position, subscript: '' },
							'STARTING_ENDING'
						),
						subscript: '',
					},

					{
						...Delta({ ...Time, subscript: '' }, 'STARTING_ENDING'),
						subscript: '',
					},
				],
			},
			{
				name: 'ACCELERATION',
				id: uuid(),
				format: 'A',
				variables: [
					{ ...Acceleration, subscript: '' },
					{
						...Delta(
							{ ...Velocity, subscript: '' },
							'STARTING_ENDING'
						),
						subscript: '',
					},

					{
						...Delta({ ...Time, subscript: '' }, 'STARTING_ENDING'),
						subscript: '',
					},
				],
			},
			{
				name: 'MOMENTUM',
				id: uuid(),
				format: 'B',
				variables: [
					{ ...Momentum, subscript: '' },
					{ ...Mass, subscript: '' },
					{ ...Velocity, subscript: '' },
				],
			},
		],
	},
	{
		title: 'Forces',
		formulas: [
			{
				name: 'FORCE',
				id: uuid(),
				format: 'B',
				variables: [
					{ ...Force, subscript: '' },
					{ ...Mass, subscript: '' },
					{ ...Acceleration, subscript: '' },
				],
			},
			{
				name: 'WEIGHT',
				id: uuid(),
				format: 'B',
				variables: [
					{ ...Weight, subscript: '' },
					{ ...Mass, subscript: '' },
					{ ...Acceleration, subscript: 'Gravity' },
				],
			},
			{
				name: 'GRAVITATIONAL ACCELERATION',
				id: uuid(),
				format: 'VARDEF',
				variables: [
					{
						variableSymbol: {
							short: 'a',
							long: 'Acceleration',
						},
						units: [
							{
								short: '',
								long: '',
							},
						],
						color: '#FF8787',
						description: '',
						subscript: 'Gravity~On~Earth',
					},
					{
						variableSymbol: {
							short: '10',
							long: '10',
						},
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
						color: '#FF8787',
						description: '',
						subscript: '',
					},
					{
						variableSymbol: {
							short: '',
							long: '',
						},
						units: [
							{
								short: '',
								long: '',
							},
							{
								short: '',
								long: '',
							},
						],
						color: '#FF8787',
						description: '',
						subscript: '',
					},
				],
			},
		],
	},
	{
		title: 'Electricity',
		formulas: [
			{
				name: 'OHMS LAW',
				id: uuid(),
				format: 'A',
				variables: [
					{ ...Current, subscript: '' },
					{ ...Voltage, subscript: '' },
					{ ...Resistance, subscript: '' },
				],
			},
		],
	},
]
