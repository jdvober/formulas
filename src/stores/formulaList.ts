import { v4 as uuid } from 'uuid'

const variableColors: VariableColor[] = [
	'#50FA7B',
	'#FF79C6',
	'#BD93F9',
	'#8BE9FD',
]

export const FormulaList: Formula[] = [
	{
		name: 'DENSITY',
		id: uuid(),
		format: 'A',
		variables: [
			{
				symbol: {
					short: 'D',
					long: 'density',
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
				color: variableColors[0],
			},
			{
				symbol: {
					short: 'm',
					long: 'mass',
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
				color: variableColors[1],
			},
			{
				symbol: {
					short: 'v',
					long: 'volume',
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
				color: variableColors[2],
			},
		],
	},
	{
		name: 'SPEED',
		id: uuid(),
		format: 'A',
		variables: [
			{
				symbol: {
					short: 's',
					long: 'speed',
				},
				units: [
					{
						symbol: '\\frac{m}{s^2}',
						name: '\\frac{meters}{second^2}',
					},
				],

				color: variableColors[0],
			},
			{
				symbol: {
					short: 'd',
					long: 'distance',
				},
				units: [{ symbol: 'm', name: 'meters' }],

				color: variableColors[1],
			},
			{
				symbol: {
					short: 't',
					long: 'time',
				},
				units: [{ symbol: 's', name: 'seconds' }],

				color: variableColors[2],
			},
		],
	},
	{
		name: 'OHMS LAW',
		id: uuid(),
		format: 'A',
		variables: [
			{
				symbol: {
					short: 'I',
					long: 'current',
				},
				units: [
					{
						symbol: 'A',
						name: 'Amps',
					},
				],
				color: variableColors[0],
			},
			{
				symbol: {
					short: 'V',
					long: 'voltage',
				},
				units: [{ symbol: 'V', name: 'Volts' }],
				color: variableColors[1],
			},
			{
				symbol: {
					short: 'R',
					long: 'resistance',
				},
				units: [{ symbol: '\\Omega', name: 'Ohms' }],
				color: variableColors[2],
			},
		],
	},
]
