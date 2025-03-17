import { v4 as uuid } from 'uuid'
import {
	Area,
	Current,
	Delta,
	Density,
	Distance,
	Energy,
	Force,
	Mass,
	Pressure,
	Resistance,
	SpecificHeatCapacity,
	Speed,
	Temperature,
	Time,
	Voltage,
	Volume,
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
							{ ...Temperature, subscript: '' },
							'NUMERICAL'
						),
						subscript: '',
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
				format: 'D',
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
				format: 'D',
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
		title: 'Kinematics',
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
