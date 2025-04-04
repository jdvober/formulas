import { Operation } from '@/components/Formula/Operations/Operation'
import { Area, Density, Force, Mass } from '@/stores/TermList'
import { VStack } from '@chakra-ui/react'
import React from 'react'

type Props = {}
type FormulasProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

type NestedArray<T> = T | string | NestedArray<T>[]

type RPNArray = NestedArray<RPNStackEntry>

export const Formulas: FormulasProps = () => {
	// Length 1
	const testFormula1 = [[Density(), Mass(), 'DIVIDE']]
	// Length 1
	const testFormula2 = [
		[[Density(), Mass(), 'DIVIDE'], [Force(), Area(), 'DIVIDE'], 'EQUALS'],
	]
	// Length 2
	const testFormula3 = [
		[
			[
				[Density(), Mass(), 'DIVIDE'],
				[Density(), Mass(), 'DIVIDE'],
				'EQUALS',
			],
			[Force(), Area(), 'DIVIDE'],
			'EQUALS',
		],
	]

	const testFormulas: RPNArray[] = [
		testFormula1 as RPNArray,
		testFormula2 as RPNArray,
		testFormula3 as RPNArray,
	]

	function parseFormula(formula: RPNArray) {
		const [first, ...rest] = formula
		if (formula.length === 1) {
			//return <Operation entry={first as RPNStackEntry} />
			return (
				<Operation
					entry={
						[
							formula[0][0],
							formula[0][1],
							formula[0][2],
						] as RPNStackEntry
					}
				/>
			)
		}

		return formula.map((f) => {
			return parseFormula(f[i])
		})
	}
	return (
		<VStack>
			{testFormulas.map((testFormula) => {
				return parseFormula(testFormula)
			})}
		</VStack>
	)
}
