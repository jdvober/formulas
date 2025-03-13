import { FmtA } from '@/components/Formula/FmtA'
import React from 'react'
import { match } from 'ts-pattern'

type Props = { formula: Formula }
type FormulaProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const Formula: FormulaProps = ({ formula: formula }) => {
	// Pattern match the Formula's Format and how many variables are being inserted into that formula to make sure we don't pass too many or two few variables to the wrong format.
	const jsxToReturn = match([formula.format, formula.variables.length])
		.with(['A', 3], () => {
			return <FmtA vars={formula.variables} />
		})
		.with(['B', 4], () => {
			return <FmtA vars={formula.variables} />
		})
		.with(['C', 4], () => {
			return <FmtA vars={formula.variables} />
		})
		.with(['D', 4], () => {
			return <FmtA vars={formula.variables} />
		})
		.with(['E', 4], () => {
			return <FmtA vars={formula.variables} />
		})
		.with(['F', 4], () => {
			return <FmtA vars={formula.variables} />
		})
		.with(['G', 4], () => {
			return <FmtA vars={formula.variables} />
		})
		.otherwise(() => {
			return (
				<div>Error: Format and Number of Variables do not match!</div>
			)
		})

	return jsxToReturn
}
