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
} from './VariableList'

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
								symbol: {
									short: 'T',
									long: 'Temp',
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
						symbol: {
							short: 'a',
							long: 'Acceleration',
						},
						units: [
							{
								symbol: '',
								name: '',
							},
						],
						color: '#FF8787',
						description: '',
						subscript: 'Gravity~On~Earth',
					},
					{
						symbol: {
							short: '10',
							long: '10',
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
						color: '#FF8787',
						description: '',
						subscript: '',
					},
					{
						symbol: {
							short: '',
							long: '',
						},
						units: [
							{
								symbol: '',
								name: '',
							},
							{
								symbol: '',
								name: '',
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
