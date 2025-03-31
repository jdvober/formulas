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
	const texToReturn = (a: Term, b: Term, c: Term) => {
		let returnValue
		match(a.termType)
			.with('DIMENSIONLESS_QUANTITY', () => {
				const newA = a as DimensionlessQuantity
				const newB = b as DimensionlessQuantity
				const newC = c as DimensionlessQuantity
				const val =
					format === 'ALPHA'
						? `${newA.magnitude}` +
							`\\color{${dracFg}}=` +
							`\\frac` +
							`{` +
							`${newB.magnitude}` +
							`}` +
							`{` +
							`${newC.magnitude}` +
							`}`
						: format === 'BETA'
							? `${newB.magnitude}` +
								`\\color{${dracFg}}=` +
								`${newA.magnitude}` +
								`\\cdot` +
								`${newC.magnitude}`
							: `${newC.magnitude}` +
								`\\color{${dracFg}}=` +
								`\\frac` +
								`{` +
								`${newB.magnitude}` +
								`}` +
								`{` +
								`${newA.magnitude}` +
								`}`
				returnValue = (
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
									console.log(`Clicked ${newA.magnitude}`)
									setFormat('ALPHA')
								}}
							>
								{newA.magnitude}
							</Box>
							<Box
								color={newB.color}
								onClick={() => {
									console.log(`Clicked ${newB.magnitude}`)
									setFormat('BETA')
								}}
							>
								{newB.magnitude}
							</Box>
							<Box
								color={newC.color}
								onClick={() => {
									console.log(`Clicked ${newC.magnitude}`)
									setFormat('GAMMA')
								}}
							>
								{newC.magnitude}
							</Box>
						</Flex>
					</Flex>
				)
			})
			.with('DIMENSIONLESS_VARIABLE', () => {
				const newA = a as DimensionlessVariable
				const newB = b as DimensionlessVariable
				const newC = c as DimensionlessVariable

				const val =
					format === 'ALPHA'
						? `${longSymbols === true ? newA.variableSymbol.long : newA.variableSymbol.short}` +
							`\\color{${dracFg}}=` +
							`\\frac` +
							`{` +
							`${longSymbols === true ? newB.variableSymbol.long : newB.variableSymbol.short}` +
							`}` +
							`{` +
							`${longSymbols === true ? newC.variableSymbol.long : newC.variableSymbol.short}` +
							`}`
						: format === 'BETA'
							? `${longSymbols === true ? newB.variableSymbol.long : newB.variableSymbol.short}` +
								`\\color{${dracFg}}=` +
								`${longSymbols === true ? newA.variableSymbol.long : newA.variableSymbol.short}` +
								`\\cdot` +
								`${longSymbols === true ? newC.variableSymbol.long : newC.variableSymbol.short}`
							: `${longSymbols === true ? newC.variableSymbol.long : newC.variableSymbol.short}` +
								`\\color{${dracFg}}=` +
								`\\frac` +
								`{` +
								`${longSymbols === true ? newB.variableSymbol.long : newB.variableSymbol.short}` +
								`}` +
								`{` +
								`${longSymbols === true ? newA.variableSymbol.long : newA.variableSymbol.short}` +
								`}`

				returnValue = (
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
									console.log(
										`Clicked ${newA.variableSymbol.long}`
									)
									setFormat('ALPHA')
								}}
							>
								{longSymbols === true
									? newA.variableSymbol.long
									: newA.variableSymbol.short}
							</Box>
							<Box
								color={newB.color}
								onClick={() => {
									console.log(
										`Clicked ${newB.variableSymbol.long}`
									)
									setFormat('BETA')
								}}
							>
								{longSymbols === true
									? newB.variableSymbol.long
									: newB.variableSymbol.short}
							</Box>
							<Box
								color={newC.color}
								onClick={() => {
									console.log(
										`Clicked ${newC.variableSymbol.long}`
									)
									setFormat('GAMMA')
								}}
							>
								{longSymbols === true
									? newC.variableSymbol.long
									: newC.variableSymbol.short}
							</Box>
						</Flex>
					</Flex>
				)
			})
			.with('QUANTITY', () => {
				const newA = a as DimensionlessQuantity
				const newB = b as DimensionlessQuantity
				const newC = c as DimensionlessQuantity
				const val =
					format === 'ALPHA'
						? `${newA.magnitude}` +
							`\\color{${dracFg}}=` +
							`\\frac` +
							`{` +
							`${newB.magnitude}` +
							`}` +
							`{` +
							`${newC.magnitude}` +
							`}`
						: format === 'BETA'
							? `${newB.magnitude}` +
								`\\color{${dracFg}}=` +
								`${newA.magnitude}` +
								`\\cdot` +
								`${newC.magnitude}`
							: `${newC.magnitude}` +
								`\\color{${dracFg}}=` +
								`\\frac` +
								`{` +
								`${newB.magnitude}` +
								`}` +
								`{` +
								`${newA.magnitude}` +
								`}`

				returnValue = (
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
									console.log(`Clicked ${newA.magnitude}`)
								}}
							>
								{newA.magnitude}
							</Box>
							<Box
								color={newB.color}
								onClick={() => {
									console.log(`Clicked ${newB.magnitude}`)
								}}
							>
								{newB.magnitude}
							</Box>
							<Box
								color={newC.color}
								onClick={() => {
									console.log(`Clicked ${newC.magnitude}`)
								}}
							>
								{newC.magnitude}
							</Box>
						</Flex>
					</Flex>
				)
			})
			.with('VARIABLE', () => {
				const newA = a as DimensionlessVariable
				const newB = b as DimensionlessVariable
				const newC = c as DimensionlessVariable

				const val =
					format === 'ALPHA'
						? `\\color{${newA.color}}${longSymbols === true ? newA.variableSymbol.long : newA.variableSymbol.short}\\color{${dracFg}}` +
							`\\color{${dracFg}}=` +
							`\\frac` +
							`{` +
							`\\color{${newB.color}}` +
							`${longSymbols === true ? newB.variableSymbol.long : newB.variableSymbol.short}` +
							`\\color{${dracFg}}` +
							`}` +
							`{` +
							`\\color{${newC.color}}` +
							`${longSymbols === true ? newC.variableSymbol.long : newC.variableSymbol.short}` +
							`\\color{${dracFg}}` +
							`}`
						: format === 'BETA'
							? `\\color{${newB.color}}` +
								`${longSymbols === true ? newB.variableSymbol.long : newB.variableSymbol.short}` +
								`\\color{${dracFg}}=` +
								`\\color{${newA.color}}` +
								`${longSymbols === true ? newA.variableSymbol.long : newA.variableSymbol.short}` +
								`\\cdot` +
								`\\color{${newC.color}}` +
								`${longSymbols === true ? newC.variableSymbol.long : newC.variableSymbol.short}`
							: `\\color{${newC.color}}` +
								`${longSymbols === true ? newC.variableSymbol.long : newC.variableSymbol.short}` +
								`\\color{${dracFg}}=` +
								`\\frac` +
								`{` +
								`\\color{${newB.color}}` +
								`${longSymbols === true ? newB.variableSymbol.long : newB.variableSymbol.short}` +
								`}` +
								`{` +
								`\\color{${newA.color}}` +
								`${longSymbols === true ? newA.variableSymbol.long : newA.variableSymbol.short}` +
								`}`

				returnValue = (
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
									console.log(
										`Clicked ${newA.variableSymbol.long}`
									)
									setFormat('ALPHA')
								}}
							>
								{longSymbols === true
									? newA.variableSymbol.long
									: newA.variableSymbol.short}
							</Box>
							<Box
								color={newB.color}
								onClick={() => {
									console.log(
										`Clicked ${newB.variableSymbol.long}`
									)
									setFormat('BETA')
								}}
							>
								{longSymbols === true
									? newB.variableSymbol.long
									: newB.variableSymbol.short}
							</Box>
							<Box
								color={newC.color}
								onClick={() => {
									console.log(
										`Clicked ${newC.variableSymbol.long}`
									)
									setFormat('GAMMA')
								}}
							>
								{longSymbols === true
									? newC.variableSymbol.long
									: newC.variableSymbol.short}
							</Box>
						</Flex>
					</Flex>
				)
			})
		return returnValue
	}

	return <Box>{texToReturn(a, b, c)}</Box>
}
