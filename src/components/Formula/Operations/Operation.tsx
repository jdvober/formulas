/*
[
	[
			[a, b, "MULTIPLY"],
			[c, d, "DIVIDE"],
			"EQUALS"
	]
]
*/
import { Block } from '@/components/Formula/Operations/Block'
import { useMainStore } from '@/stores/MainStore'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { match } from 'ts-pattern'

type Props = { entry: RPNStackEntry }
type OperationProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const Operation: OperationProps = ({ entry: rpnStackEntry }) => {
	const longSymbols = useMainStore((state) => state.longSymbols)

	const [term1, term2, operation] = rpnStackEntry

	const getValFromTerm = (term: string | Term) => {
		return typeof term === 'string'
			? term
			: match([term.termType, longSymbols])
					.with(
						['DIMENSIONLESS_QUANTITY', true],
						['DIMENSIONLESS_QUANTITY', false],
						['QUANTITY', true],
						['QUANTITY', false],
						() => {
							const t = term as DimensionlessQuantity
							return `\\color{${t.color}}${t.magnitude}`
						}
					)
					.with(
						['DIMENSIONLESS_VARIABLE', true],
						['VARIABLE', true],
						() => {
							const t = term as DimensionlessVariable
							return `\\color{${t.color}}${t.variableSymbol.long}`
						}
					)
					.with(
						['DIMENSIONLESS_VARIABLE', false],
						['VARIABLE', false],
						() => {
							const t = term as DimensionlessVariable
							return `\\color{${t.color}}${t.variableSymbol.short}`
						}
					)
					.otherwise(() => {
						console.log('Error in GetValFromTerm: ')
						console.log(term)
						return `ERROR`
					})
	}

	const parseRPN = () => {
		return match(operation)
			.with('EQUALS', () => {
				return equals(term1, term2)
			})
			.with('DIVIDE', () => {
				return divide(term1, term2)
			})
			.exhaustive()
	}

	const equals = (term1: string | Term, term2: string | Term) => {
		return `${getValFromTerm(term1)} = ${getValFromTerm(term2)} `
	}

	const divide = (term1: string | Term, term2: string | Term) => {
		return `\\frac{${getValFromTerm(term1)}}{${getValFromTerm(term2)}}`
	}

	return (
		<Box className='Operation'>
			<Block>{parseRPN()}</Block>
		</Box>
	)
}
