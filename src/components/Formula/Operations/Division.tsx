import { Term } from '@/components/Formula/Term'
import { useMainStore } from '@/stores/MainStore'
import { dracFg } from '@/theme/colors/colors'
import { Box, Center, Flex, HStack } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'

type Props = { terms: [Term, Term] }
type DivisionProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const Division: DivisionProps = ({ terms }) => {
	const [numerator, denominator] = terms
	const longSymbols = useMainStore((state) => state.longSymbols)
	const padding = 8

	const divisionBarRef = useRef<SVGTextElement>(null)
	const [barDimensions, setBarDimensions] = useState({
		width: 0,
		height: 0,
	})

	// Update dimensions after the first render
	useEffect(() => {
		if (divisionBarRef.current) {
			const newDimensions = getBarDimensions()
			setBarDimensions(newDimensions)
		}
	}, [numerator, denominator]) // Re-run if the numerator or denominator changes

	// Function to calculate dimensions
	const getBarDimensions = () => {
		if (divisionBarRef.current) {
			return {
				width: divisionBarRef.current.getBBox().width + padding,
				height: divisionBarRef.current.getBBox().height + padding,
			}
		}
		return { width: 0, height: 0 }
	}

	const numeratorRef = useRef<SVGTextElement>(null)
	const [numeratorDimensions, setNumeratorDimensions] = useState({
		width: 0,
		height: 0,
	})

	// Update dimensions after the first render
	useEffect(() => {
		if (numeratorRef.current) {
			const newDimensions = getNumeratorDimensions()
			setNumeratorDimensions(newDimensions)
		}
	}, [numerator, longSymbols]) // Re-run if the numerator text changes

	const getNumeratorDimensions = () => {
		if (numeratorRef.current) {
			return {
				width: numeratorRef.current.getBBox().width + padding,
				height: numeratorRef.current.getBBox().height + padding,
			}
		}
		return { width: 0, height: 0 }
	}

	const denominatorRef = useRef<SVGTextElement>(null)
	const [denominatorDimensions, setDenominatorDimensions] = useState({
		width: 0,
		height: 0,
	})

	// Update dimensions after the first render
	useEffect(() => {
		if (denominatorRef.current) {
			const newDimensions = getdenominatorDimensions()
			setDenominatorDimensions(newDimensions)
		}
	}, [denominator, longSymbols]) // Re-run if the denominator text changes

	const getdenominatorDimensions = () => {
		if (denominatorRef.current) {
			return {
				width: denominatorRef.current.getBBox().width + padding,
				height: denominatorRef.current.getBBox().height + padding,
			}
		}
		return { width: 0, height: 0 }
	}

	const barHeight = 5
	return (
		<HStack className='Division'>
			<Box>
				<Flex direction='column' justifyContent='center'>
					<Center>
						<Term
							term={numerator}
							dimensionsFromParent={numeratorDimensions}
							refFromParent={numeratorRef}
						/>
					</Center>

					<Center
						w={
							numeratorDimensions.width >
							denominatorDimensions.width
								? numeratorDimensions.width
								: denominatorDimensions.width
						}
					>
						<svg
							width={
								numeratorDimensions.width >
								denominatorDimensions.width
									? numeratorDimensions.width
									: denominatorDimensions.width
							}
							height={barHeight + 1}
							stroke={dracFg}
						>
							<line
								x1='0'
								y1={barHeight}
								x2={
									numeratorDimensions.width >
									denominatorDimensions.width
										? numeratorDimensions.width
										: denominatorDimensions.width
								}
								y2={barHeight}
							/>
						</svg>
					</Center>
					<Center>
						<Term
							term={denominator}
							dimensionsFromParent={denominatorDimensions}
							refFromParent={denominatorRef}
						/>
					</Center>
				</Flex>
			</Box>
		</HStack>
	)
}
