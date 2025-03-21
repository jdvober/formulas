import { useMainStore } from '@/stores/MainStore'
import { Box } from '@chakra-ui/react'
import { MathJax } from 'better-react-mathjax'
import React, { useEffect } from 'react'
import { match, P } from 'ts-pattern'
import { v4 as uuid } from 'uuid'
import { Divide as Div } from './Divide.ts'

type Props = { numerator: Term; denominator: Term } // Strings should be formatted for MathJax to render Latex as SVG
type DivideProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const Divide: DivideProps = ({ numerator, denominator }) => {
	const longSymbols = useMainStore((state) => state.longSymbols)
	const uniqueID = uuid()
	const latexParts = useMainStore((state) => state.latexParts)
	const setLatexParts = useMainStore((state) => state.setLatexParts)
	const getTermName = (n: Term) => {
		return (
			match(n)
				// Variables
				.with(
					{
						termType: P.union('DIMENSIONLESS_VARIABLE', 'VARIABLE'),
						variableSymbol: {
							short: P.select('s', P.string),
							long: P.select('l', P.string),
						},
					},
					({ s, l }) => {
						return longSymbols === true ? l : s
					}
				)
				// Quantities
				.with(
					{
						termType: P.union('DIMENSIONLESS_QUANTITY', 'QUANTITY'),
						magnitude: P.select('m', P.number), // Select this as the value to pass to the function, and give it the name 'm'
					},
					({ m }) => {
						return m
					}
				)
				.otherwise(() => {
					return 'Error: Could not get variable name.'
				})
		)
	}

	const latex = Div(numerator, denominator, longSymbols)

	// Add this latex to the list
	useEffect(() => {
		setLatexParts([...latexParts, { id: uniqueID, value: latex }])
	}, [])

	return (
		<Box
			className={`Divide ${getTermName(numerator)} ${getTermName(denominator)}`}
		>
			<MathJax
				hideUntilTypeset='every'
				className={uniqueID}
			>{`\\(${latex}\\)`}</MathJax>
		</Box>
	)
}
