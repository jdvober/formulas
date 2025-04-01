import { match } from 'ts-pattern'

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
				operator: 'MULTIPLY',
				texString: `(${aVal} \\cdot ${bVal})`,
			},
		]
	}

	// If the length of the history is greater than 1
	const [first, ...rest] = history
	const multipliedRest = Multiply(rest, longSymbols)

	return [
		{
			a: first.a,
			b: multipliedRest[0].a,
			operator: 'MULTIPLY',
			//texString: `${first.texString} \\times [${multipliedRest[0].texString}]`,
			texString: `${Multiply([{ a: first.a, b: first.b, operator: 'MULTIPLY', texString: '' }], longSymbols)[0].texString} \\cdot ${multipliedRest[0].texString}`,
		},
		...multipliedRest.slice(1),
	]
}
