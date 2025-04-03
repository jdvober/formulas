import { VariableColors } from '@/stores/TermList'
import { match } from 'ts-pattern'
import { v4 as uuid } from 'uuid'

export const GetValFromTerm = (term: Term) => {
	return match(term.termType)
		.with('DIMENSIONLESS_QUANTITY', 'QUANTITY', () => {
			const t = term as DimensionlessQuantity
			return { short: t.magnitude, long: t.magnitude }
		})
		.with('DIMENSIONLESS_VARIABLE', 'VARIABLE', () => {
			const t = term as DimensionlessVariable
			return {
				short: t.variableSymbol.short,
				long: t.variableSymbol.long,
			}
		})
		.exhaustive()
}

const getTex = (term: Term, longSymbols: boolean) => {
	return match(term.termType)
		.with('DIMENSIONLESS_QUANTITY', () => {
			const newTerm = term as Quantity
			return longSymbols === true
				? `\\color{${newTerm.color}}${newTerm.magnitude}` +
						`\\color{${newTerm.color}}\_{${newTerm.subscript}}`
				: `\\color{${newTerm.color}}${newTerm.magnitude}` +
						`\\color{${newTerm.color}}\_{${newTerm.subscript}}`
		})
		.with('DIMENSIONLESS_VARIABLE', () => {
			const newTerm = term as Variable
			return longSymbols === true
				? `\\color{${newTerm.color}}${newTerm.variableSymbol.long}` +
						`\\color{${newTerm.color}}\_{${newTerm.subscript}}`
				: `\\color{${newTerm.color}}${newTerm.variableSymbol.short}` +
						`\\color{${newTerm.color}}\_{${newTerm.subscript}}`
		})
		.with('QUANTITY', () => {
			const newTerm = term as Quantity
			return longSymbols === true
				? `\\color{${newTerm.color}}${newTerm.magnitude}` +
						`\\color{${newTerm.color}}\_{${newTerm.subscript}}`
				: `\\color{${newTerm.color}}${newTerm.magnitude}` +
						`\\color{${newTerm.color}}\_{${newTerm.subscript}}`
		})
		.with('VARIABLE', () => {
			const newTerm = term as Variable
			return longSymbols === true
				? `\\color{${newTerm.color}}${newTerm.variableSymbol.long}` +
						`\\color{${newTerm.color}}\_{${newTerm.subscript}}`
				: `\\color{${newTerm.color}}${newTerm.variableSymbol.short}` +
						`\\color{${newTerm.color}}\_{${newTerm.subscript}}`
			//return `4`
		})
		.exhaustive()
}

export const MatchOperationType = (
	history: OperationHistory,
	longSymbols: boolean
): OperationHistory => {
	const [first, ...rest] = history
	const returnVal = match(history[0].operator)
		.with('TERM', () => {})
		.with('EQUALS', () => {
			const historyRest = Equals([first], rest, longSymbols)

			return [
				{
					a: first.a,
					b: historyRest[0].a,
					operator: 'EQUALS',
					texString: `${Equals(first.a, historyRest[0].a, longSymbols)[0].texString} = ${historyRest[0].texString}`,
				},
				...historyRest.slice(1),
			]
		})
		.with('ADD', () => {
			const historyRest = Add(rest, longSymbols)

			return [
				{
					a: first.a,
					b: historyRest[0].a,
					operator: 'ADD',
					texString: `${Add([{ a: first.a, b: first.b, operator: 'ADD', texString: '' }], longSymbols)[0].texString} = ${historyRest[0].texString}`,
				},
				...historyRest.slice(1),
			]
		})
		.with('SUBTRACT', () => {
			const historyRest = Subtract(rest, longSymbols)

			return [
				{
					a: first.a,
					b: historyRest[0].a,
					operator: 'SUBTRACT',
					texString: `${Subtract([{ a: first.a, b: first.b, operator: 'SUBTRACT', texString: '' }], longSymbols)[0].texString} = ${historyRest[0].texString}`,
				},
				...historyRest.slice(1),
			]
		})
		.with('MULTIPLY', () => {
			const historyRest = Multiply(rest, longSymbols)

			return [
				{
					a: first.a,
					b: historyRest[0].a,
					operator: 'MULTIPLY',
					texString: `${Multiply([{ a: first.a, b: first.b, operator: 'MULTIPLY', texString: '' }], longSymbols)[0].texString} = ${historyRest[0].texString}`,
				},
				...historyRest.slice(1),
			]
		})
		.with('DIVIDE', () => {
			const historyRest = Divide([first], rest, longSymbols)

			return [
				{
					a: first.a,
					b: historyRest[0].a,
					operator: 'DIVIDE',
					texString: `${Divide(first.a, first.b, longSymbols)[0].texString} = ${historyRest[0].texString}`,
				},
				...historyRest.slice(1),
			]
		})
		.with('EXPONENT', () => {
			const historyRest = Exponent(rest, longSymbols)

			return [
				{
					a: first.a,
					b: historyRest[0].a,
					operator: 'EXPONENT',
					texString: `${Exponent([{ a: first.a, b: first.b, operator: 'EXPONENT', texString: '' }], longSymbols)[0].texString} = ${historyRest[0].texString}`,
				},
				...historyRest.slice(1),
			]
		})
		.otherwise(() => {
			const historyRest = Exponent(rest, longSymbols)
			return [
				{
					a: first.a,
					b: historyRest[0].a,
					operator: 'EXPONENT',
					texString: `${Exponent([{ a: first.a, b: first.b, operator: 'EXPONENT', texString: '' }], longSymbols)[0].texString} = ${historyRest[0].texString}`,
				},
				...historyRest.slice(1),
			]
		})

	return returnVal as OperationHistory
}

export const BlankTerm: Term = {
	id: uuid(),
	termType: 'VARIABLE',
	variableSymbol: {
		short: '',
		long: '',
	},
	subscript: '',
	units: [],
	color: VariableColors[2],
	description: '',
}

function isTerm(x: unknown): x is Term {
	return (x as Term) !== undefined
}

function isOperationHistory(x: unknown): x is OperationHistory {
	return (x as OperationHistory) !== undefined
}

export const Equals = (
	a: Term | OperationHistory,
	b: Term | OperationHistory,
	longSymbols: boolean
): OperationHistory => {
	const aStr = match(isTerm(a))
		.with(true, () => {
			const newA = a as Term
			return longSymbols === true
				? GetValFromTerm(newA).long
				: GetValFromTerm(newA).short
		})
		.with(false, () => {
			const newA = a as OperationHistory
			return MatchOperationType(newA, longSymbols)[0].a
		})
		.exhaustive()

	const bStr = match(isTerm(a))
		.with(true, () => {
			const newB = b as Term
			return longSymbols === true
				? GetValFromTerm(newB).long
				: GetValFromTerm(newB).short
		})
		.with(false, () => {
			const newA = a as OperationHistory
			return MatchOperationType(newA, longSymbols)[0].a
		})
		.exhaustive()

	return [
		{
			a: a,
			b: b,
			operator: 'EQUALS',
			texString: `${aStr} = ${bStr}`,
		},
	]
}

export const Add = (
	history: OperationHistory,
	longSymbols: boolean
): OperationHistory => {
	// Handle empty history arrays
	if (history.length === 0) return []
	// Base Case
	else if (history.length === 1) {
		const [operation] = history

		const aVal = getTex(operation.a, longSymbols)
		const bVal = getTex(operation.b, longSymbols)
		return [
			{
				...operation,
				operator: 'EQUALS',
				texString: `${aVal} = ${bVal}`,
			},
		]
	}

	return MatchOperationType(history, longSymbols)
}

export const Subtract = (
	history: OperationHistory,
	longSymbols: boolean
): OperationHistory => {
	// Handle empty history arrays
	if (history.length === 0) return []
	// Base Case
	else if (history.length === 1) {
		const [operation] = history

		const aVal = getTex(operation.a, longSymbols)
		const bVal = getTex(operation.b, longSymbols)
		return [
			{
				...operation,
				operator: 'EQUALS',
				texString: `${aVal} = ${bVal}`,
			},
		]
	}

	return MatchOperationType(history, longSymbols)
}
export const Multiply = (
	history: OperationHistory,
	longSymbols: boolean
): OperationHistory => {
	// Handle empty history arrays
	if (history.length === 0) return []
	// Base Case
	else if (history.length === 1) {
		const [operation] = history

		const aVal = getTex(operation.a, longSymbols)
		const bVal = getTex(operation.b, longSymbols)
		return [
			{
				...operation,
				operator: 'EQUALS',
				texString: `${aVal} = ${bVal}`,
			},
		]
	}

	return MatchOperationType(history, longSymbols)
}
export const Divide = (
	a: Term | OperationHistory,
	b: Term | OperationHistory,
	longSymbols: boolean
): OperationHistory => {
	const aStr = match(isTerm(a))
		.with(true, () => {
			const newA = a as Term
			return longSymbols === true
				? GetValFromTerm(newA).long
				: GetValFromTerm(newA).short
		})
		.with(false, () => {
			const newA = a as OperationHistory
			return MatchOperationType(newA, longSymbols)[0].a
		})
		.exhaustive()

	const bStr = match(isTerm(a))
		.with(true, () => {
			const newB = b as Term
			return longSymbols === true
				? GetValFromTerm(newB).long
				: GetValFromTerm(newB).short
		})
		.with(false, () => {
			const newA = a as OperationHistory
			return MatchOperationType(newA, longSymbols)[0].a
		})
		.exhaustive()

	return [
		{
			a: a,
			b: b,
			operator: 'DIVIDE',
			texString: `\\frac{${aStr}}{${bStr}}`,
		},
	]
}
export const Exponent = (
	history: OperationHistory,
	longSymbols: boolean
): OperationHistory => {
	// Handle empty history arrays
	if (history.length === 0) return []
	// Base Case
	else if (history.length === 1) {
		const [operation] = history

		const aVal = getTex(operation.a, longSymbols)
		const bVal = getTex(operation.b, longSymbols)
		return [
			{
				...operation,
				operator: 'EQUALS',
				texString: `${aVal} = ${bVal}`,
			},
		]
	}

	return MatchOperationType(history, longSymbols)
}
