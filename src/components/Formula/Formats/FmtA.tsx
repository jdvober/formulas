import { Block } from '@/components/Formula/Operations/Block'
import { useMainStore } from '@/stores/MainStore'
import { dracFg } from '@/theme/colors/colors'
import { Box, Center, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { match } from 'ts-pattern'

type Props = {
	terms: [Term, Term, Term]
}
type FmtAProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const FmtA: FmtAProps = ({ terms }) => {
	const longSymbols = useMainStore((state) => state.longSymbols)
	const [a, b, c] = terms
	const [format, setFormat] = useState('ALPHA')
	const getReturnVal = (
		newA: { long: string | number; short: string | number; color: string },
		newB: { long: string | number; short: string | number; color: string },
		newC: { long: string | number; short: string | number; color: string },
		val: string
	) => {
		return (
			<Flex direction='row' gapX='2em' alignItems='center'>
				<Box>
					<Block>{val}</Block>
				</Box>
				<Flex direction='column'>
					<Center fontSize='1.5em'>
						<u>Units</u>
					</Center>
					<Box
						color={newA.color}
						onClick={() => {
							setFormat('ALPHA')
						}}
					>
						{longSymbols === true ? newA.long : newA.short}
					</Box>
					<Box
						color={newB.color}
						onClick={() => {
							setFormat('BETA')
						}}
					>
						{longSymbols === true ? newB.long : newB.short}
					</Box>
					<Box
						color={newC.color}
						onClick={() => {
							setFormat('GAMMA')
						}}
					>
						{longSymbols === true ? newC.long : newC.short}
					</Box>
				</Flex>
			</Flex>
		)
	}
	const getFormat = (
		newA: {
			long: string | number
			short: string | number
			color: string
		},
		newB: {
			long: string | number
			short: string | number
			color: string
		},
		newC: {
			long: string | number
			short: string | number
			color: string
		}
	) => {
		return format === 'ALPHA'
			? `\\color{${newA.color}}${longSymbols === true ? newA.long : newA.short}` +
					`\\color{${dracFg}}=` +
					`\\frac` +
					`{` +
					`\\color{${newB.color}}${longSymbols === true ? newB.long : newB.short}` +
					`}` +
					`{` +
					`\\color{${newC.color}}${longSymbols === true ? newC.long : newC.short}` +
					`}`
			: format === 'BETA'
				? `\\color{${newB.color}}${longSymbols === true ? newB.long : newB.short}` +
					`\\color{${dracFg}}=` +
					`\\color{${newA.color}}${longSymbols === true ? newA.long : newA.short}` +
					`\\cdot` +
					`\\color{${newC.color}}${longSymbols === true ? newC.long : newC.short}`
				: `\\color{${newC.color}}${longSymbols === true ? newC.long : newC.short}` +
					`\\color{${dracFg}}=` +
					`\\frac` +
					`{` +
					`\\color{${newB.color}}${longSymbols === true ? newB.long : newB.short}` +
					`}` +
					`{` +
					`\\color{${newA.color}}${longSymbols === true ? newA.long : newA.short}` +
					`}`
	}
	const texToReturn = (a: Term, b: Term, c: Term): JSX.Element => {
		let params: {
			long: string | number
			short: string | number
			color: string
		}[] = [
			{
				long: 'ERROR',
				short: 'ERROR',
				color: 'red',
			},
			{
				long: 'ERROR',
				short: 'ERROR',
				color: 'red',
			},
			{
				long: 'ERROR',
				short: 'ERROR',
				color: 'red',
			},
		] // Placeholder Values
		match(a.termType)
			.with('DIMENSIONLESS_QUANTITY', () => {
				const newA = a as DimensionlessQuantity
				const newB = b as DimensionlessQuantity
				const newC = c as DimensionlessQuantity
				params = [
					{
						long: newA.magnitude,
						short: newA.magnitude,
						color: newA.color,
					},
					{
						long: newB.magnitude,
						short: newB.magnitude,
						color: newB.color,
					},
					{
						long: newC.magnitude,
						short: newC.magnitude,
						color: newC.color,
					},
				]
			})
			.with('DIMENSIONLESS_VARIABLE', () => {
				const newA = a as DimensionlessVariable
				const newB = b as DimensionlessVariable
				const newC = c as DimensionlessVariable

				params = [
					{
						long: newA.variableSymbol.long,
						short: newA.variableSymbol.short,
						color: newA.color,
					},
					{
						long: newB.variableSymbol.long,
						short: newB.variableSymbol.short,
						color: newB.color,
					},
					{
						long: newC.variableSymbol.long,
						short: newC.variableSymbol.short,
						color: newC.color,
					},
				]
			})
			.with('QUANTITY', () => {
				const newA = a as DimensionlessQuantity
				const newB = b as DimensionlessQuantity
				const newC = c as DimensionlessQuantity
				params = [
					{
						long: newA.magnitude,
						short: newA.magnitude,
						color: newA.color,
					},
					{
						long: newB.magnitude,
						short: newB.magnitude,
						color: newB.color,
					},
					{
						long: newC.magnitude,
						short: newC.magnitude,
						color: newC.color,
					},
				]
			})
			.with('VARIABLE', () => {
				const newA = a as DimensionlessVariable
				const newB = b as DimensionlessVariable
				const newC = c as DimensionlessVariable

				params = [
					{
						long: newA.variableSymbol.long,
						short: newA.variableSymbol.short,
						color: newA.color,
					},
					{
						long: newB.variableSymbol.long,
						short: newB.variableSymbol.short,
						color: newB.color,
					},
					{
						long: newC.variableSymbol.long,
						short: newC.variableSymbol.short,
						color: newC.color,
					},
				]
			})
		return getReturnVal(
			params[0],
			params[1],
			params[2],
			getFormat(params[0], params[1], params[2])
		)
	}

	return <Box>{texToReturn(a, b, c)}</Box>
}
