import { useMainStore } from '@/stores/MainStore'
import { Box, Center, Flex, HStack, Text } from '@chakra-ui/react'
import { MathJax } from 'better-react-mathjax'
import React, { useEffect, useRef, useState } from 'react'
import { match, P } from 'ts-pattern'

type Props = {
	term: Term
	dimensionsFromParent?: { width: number; height: number }
	refFromParent?: React.RefObject<SVGTextElement>
}
type TermProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const Term: TermProps = ({
	term,
	dimensionsFromParent,
	refFromParent,
}) => {
	const setInfo = useMainStore((state) => state.setInfo)
	const longSymbols = useMainStore((state) => state.longSymbols)
	const padding = 8
	const ref =
		refFromParent !== undefined
			? refFromParent
			: useRef<SVGTextElement>(null)
	const [dimensions, setDimensions] = useState({
		width: 0,
		height: 0,
	})

	// Update dimensions after the first render
	useEffect(() => {
		if (ref.current) {
			const newDimensions = getDimensions()
			setDimensions(newDimensions)
		}
	}, [term, longSymbols]) // Re-run if the term text changes

	const getDimensions = () => {
		if (ref.current) {
			return {
				width: ref.current.getBBox().width + padding,
				height: ref.current.getBBox().height + padding,
			}
		}
		return { width: 0, height: 0 }
	}

	const getInfo = (input: Term) => {
		return (
			match(input)
				// With Dimensions
				.with(
					{
						termType: P.select(
							'ttype',
							P.union('QUANTITY', 'VARIABLE')
						),
						units: P.select(
							'units',
							P.array({ short: P.string, long: P.string })
						),
						description: P.select('des', P.string),
					},
					({ ttype, units, des }) => {
						return (
							<Center>
								<Flex direction='column'>
									<Center>
										<HStack>
											<Text color={input.color}>
												{getVarName(input)}
											</Text>
											<Text>:</Text>
											<Text> {ttype.slice(0, 1)}</Text>
										</HStack>
										{ttype.slice(1).toLowerCase()}
									</Center>
									<Center>
										<HStack>
											<Text>
												<u>Units</u>:
											</Text>
											{units.map((unit, i) => {
												return (
													<HStack key={i}>
														{i <
														units.length - 1 ? (
															<HStack
																className={
																	unit.long
																}
															>
																<MathJax hideUntilTypeset='every'>{`\\(${unit.long}\\)`}</MathJax>
																<Box>
																	{' or '}
																</Box>
															</HStack>
														) : (
															<Box
																className={
																	unit.long
																}
															>
																<MathJax hideUntilTypeset='every'>{`\\(${unit.long}\\)`}</MathJax>
															</Box>
														)}
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
					<Box
						className={`${s} ${l}`}
						w={
							dimensionsFromParent !== undefined
								? dimensionsFromParent.width
								: dimensions.width
						}
						h={
							dimensionsFromParent !== undefined
								? dimensionsFromParent.height
								: dimensions.height
						}
					>
						<svg
							width={
								dimensionsFromParent !== undefined
									? dimensionsFromParent.width
									: dimensions.width
							}
							height={
								dimensionsFromParent !== undefined
									? dimensionsFromParent.height
									: dimensions.height
							}
						>
							<text
								ref={ref}
								x='3'
								y='21'
								fontSize='40'
								fill={term.color}
							>
								{longSymbols === true ? l : s}
							</text>
						</svg>
					</Box>
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
				return (
					<Box
						className={`${m}`}
						width={
							dimensionsFromParent !== undefined
								? dimensionsFromParent.width
								: dimensions.width
						}
						height={
							dimensionsFromParent !== undefined
								? dimensionsFromParent.height
								: dimensions.height
						}
					>
						<svg
							width={
								dimensionsFromParent !== undefined
									? dimensionsFromParent.width
									: dimensions.width
							}
							height={
								dimensionsFromParent !== undefined
									? dimensionsFromParent.height
									: dimensions.height
							}
						>
							<text
								ref={ref}
								x='3'
								y='21'
								fontSize='40'
								fill={term.color}
							>
								{m}
							</text>
						</svg>
					</Box>
				)
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
