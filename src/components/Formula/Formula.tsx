import { FmtA } from '@/components/Formula/Formats/FmtA'
import { FmtB } from '@/components/Formula/Formats/FmtB'
import { FmtC } from '@/components/Formula/Formats/FmtC'
import { FmtD } from '@/components/Formula/Formats/FmtD'
import { FmtE } from '@/components/Formula/Formats/FmtE'
import { FmtF } from '@/components/Formula/Formats/FmtF'
import { FmtG } from '@/components/Formula/Formats/FmtG'
import { FmtVarDef } from '@/components/Formula/Formats/FmtVarDef'
import { dracCl, dracRed } from '@/theme/colors/colors'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { match } from 'ts-pattern'

type Props = { formula: Formula }
type FormulaProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

// Pattern match the Formula's Format and how many variables are being inserted into that formula to make sure we don't pass too many or two few variables to the wrong format.
export const Formula: FormulaProps = ({ formula: formula }) => {
	const jsxToReturn = match([formula.format, formula.variables.length])
		// Match the pattern [formula.format, formula.variables.length] with ['A', 3] and if it matches, run the function () => {return <FmtA vars={formula.variables} />}
		.with(['A', 3], () => {
			return <FmtA vars={formula.variables} />
		})
		// Match the pattern [formula.format, formula.variables.length] with ['B', 4] and if it matches, run the function () => {return <FmtB vars={formula.variables} />}
		.with(['B', 3], () => {
			return <FmtB terms={formula.variables} />
		})
		// etc, etc
		.with(['C', 4], () => {
			return <FmtC vars={formula.variables} />
		})
		.with(['D', 4], () => {
			return <FmtD vars={formula.variables} />
		})
		.with(['E', 4], () => {
			return <FmtE vars={formula.variables} />
		})
		.with(['F', 4], () => {
			return <FmtF vars={formula.variables} />
		})
		.with(['G', 4], () => {
			return <FmtG vars={formula.variables} />
		})
		.with(['VARDEF', 3], () => {
			return <FmtVarDef vars={formula.variables} />
		})
		.otherwise(() => {
			return (
				<Box
					border={`1px solid ${dracRed}`}
					borderRadius='0.25em'
					p='0.25em'
					maxW='20vw'
					fontSize={'md'}
				>
					{`Error: ${formula.name}: Format and Number of Variables mismatch`}
				</Box>
			)
		})

	return (
		<Box
			border={`1px solid ${dracCl}`}
			borderRadius='0.25em'
			p='0.25em'
			w='auto'
		>
			{jsxToReturn}
		</Box>
	)
}
