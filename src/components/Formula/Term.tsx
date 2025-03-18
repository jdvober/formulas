import { useMainStore } from '@/stores/MainStore'
import { Box, Center, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { match, P } from 'ts-pattern'

type Props = { term: Term }
type TermProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const Term: TermProps = ({ term }) => {
	const setInfo = useMainStore((state) => state.setInfo)
	const longSymbols = useMainStore((state) => state.longSymbols)
	const getInfo = (input: Term) => {
		return (
			match(input)
				// With Dimensions
				.with(
					{
						termType: P.select(
							'tt',
							P.union('QUANTITY', 'VARIABLE')
						),
						units: P.select(
							'units',
							P.array({ short: P.string, long: P.string })
						),
						description: P.select('des', P.string),
					},
					({ tt, units, des }) => {
						return (
							<Center>
								<Flex direction='column'>
									<Center>
										<HStack>
											<Text color={input.color}>
												{getVarName(input)}
											</Text>
											<Text>:</Text>
											<Text> {tt.slice(0, 1)}</Text>
										</HStack>
										{tt.slice(1).toLowerCase()}
									</Center>
									<Center>
										<HStack>
											<Text>
												<u>Units</u>:
											</Text>
											{units.map((unit, i) => {
												return (
													<HStack>
														<Text
															color={input.color}
														>
															{unit.short}
														</Text>
														<Text>{'('}</Text>
														<Text>
															{' '}
															{unit.long}
														</Text>
														<Text>{')'}</Text>
														{i < units.length &&
														units.length > 1 ? (
															<Box>{' or '}</Box>
														) : null}
													</HStack>
												)
											})}
										</HStack>
									</Center>
									<Box>
										<u>Description</u>: {des}
									</Box>
								</Flex>
							</Center>
						)
					}
				)
				// Dimensionless
				.with(
					{
						termType: P.union(
							'DIMENSIONLESS_QUANTITY',
							'DIMENSIONLESS_VARIABLE'
						),
						description: P.select('des', P.string),
					},
					({ des }) => {
						return (
							<Center>
								<Flex direction='column'>
									<Center>
										<HStack>
											<Text color={input.color}>
												{getVarName(input)}
											</Text>
											<Text>:</Text>
											<Text> Coefficient</Text>
										</HStack>
									</Center>
									<Box>
										<u>Description</u>: {des}
									</Box>
								</Flex>
							</Center>
						)
					}
				)
				.otherwise(() => {
					return <Box>Error: Term type was invalid.</Box>
				})
		)
	}

	const getVarName = (input: Term) => {
		return (
			match(input)
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

	const jsxToReturn = match(term)
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
				return (
					<Text color={term.color}>
						{longSymbols === true ? l : s}
					</Text>
				)
			}
		)
		// Quantities
		.with(
			{
				termType: P.union('DIMENSIONLESS_QUANTITY', 'QUANTITY'),
				magnitude: P.select('m', P.number), // Select this as the value to pass to the function, and give it the name 'm'
			},
			({ m }) => {
				return <Text color={term.color}>{m}</Text>
			}
		)
		.otherwise(() => {
			return <Box>Error: Term type was invalid.</Box>
		})

	return (
		<Box className={`Term ${term.termType}`}>
			<Box
				onMouseEnter={() => {
					setInfo(getInfo(term))
				}}
				onMouseLeave={() => {
					setInfo(null)
				}}
			>
				{jsxToReturn}
			</Box>
		</Box>
	)
}
