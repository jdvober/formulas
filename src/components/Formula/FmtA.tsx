import {
	dracBg2,
	dracComment,
	dracFg,
	dracGray,
	dracOrange,
	dracPink,
	dracPurple,
	dracRed,
} from '@/theme/colors/colors'
import { Box, HoverCard, HStack, Portal, Text, VStack } from '@chakra-ui/react'
import 'katex/dist/katex.min.css'
import React, { useEffect, useRef, useState } from 'react'
import Latex from 'react-latex-next'

type Props = {
	vars: [
		{ val: { name: string; abbreviation: string }; units: string[] },
		{ val: { name: string; abbreviation: string }; units: string[] },
		{ val: { name: string; abbreviation: string }; units: string[] },
	]
}
type FmtAProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const FmtA: FmtAProps = ({ vars }) => {
	const [a, b, c] = vars
	const containerRef = useRef<HTMLDivElement>(null)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		if (containerRef.current) {
			// Give color to the individual variables
			const elements = containerRef.current.querySelectorAll('*')
			elements.forEach((element) => {
				// Do something with each element
				if (
					element.innerHTML === a.val.abbreviation ||
					element.innerHTML === a.val.name
				) {
					;(element as HTMLElement).style.color = dracOrange
				}
				if (
					element.innerHTML === b.val.abbreviation ||
					element.innerHTML === b.val.name
				) {
					;(element as HTMLElement).style.color = dracPurple
				}
				if (
					element.innerHTML === c.val.abbreviation ||
					element.innerHTML === c.val.name
				) {
					;(element as HTMLElement).style.color = dracPink
				}
			})
		}
	}, [])
	return (
		<Box ref={containerRef}>
			<HoverCard.Root
				open={open}
				onOpenChange={(e) => setOpen(e.open)}
				openDelay={0}
				closeDelay={100}
			>
				<HoverCard.Trigger asChild>
					<Box>
						<Latex>{`$${a.val.abbreviation}=\\frac{${b.val.abbreviation}}{${c.val.abbreviation}}$`}</Latex>
					</Box>
				</HoverCard.Trigger>
				<Portal>
					<HoverCard.Positioner>
						<HoverCard.Content
							w='auto'
							background={dracBg2}
							border={`1px solid ${dracFg}`}
						>
							<HoverCard.Arrow />
							<VStack
								justifyContent='flex-start'
								alignItems='flex-start'
							>
								<Text
									color={dracRed}
									fontSize='2xl'
									alignSelf='center'
								>
									{`UNITS`}
								</Text>
								<Text
									color={dracGray}
									fontSize='2xl'
									alignSelf='center'
								>
									{``}
								</Text>
								<HStack>
									<Text color={dracOrange} fontSize='xl'>
										<Latex>{`$${a.val.abbreviation}$`}</Latex>
									</Text>
									<Text color={dracComment} fontSize='xl'>
										{` is measured in `}
									</Text>
									<Text color={dracOrange} fontSize='xl'>
										<HStack>
											{a.units.map((unit, i) => {
												return a.units.length ===
													i + 1 ? (
													<Latex>{`$${unit}$`}</Latex>
												) : (
													<HStack>
														<Latex>{`$${unit}$`}</Latex>
														<Text>{' or '}</Text>
													</HStack>
												)
											})}
										</HStack>
									</Text>
								</HStack>
								<Text color={dracComment} fontSize='xl'>
									<HStack>
										<Text color={dracOrange} fontSize='xl'>
											<Latex>{`$${b.val.abbreviation}$`}</Latex>
										</Text>
										<Text color={dracComment} fontSize='xl'>
											{` is measured in `}
										</Text>
										<Text color={dracOrange} fontSize='xl'>
											<HStack>
												{b.units.map((unit, i) => {
													return b.units.length ===
														i + 1 ? (
														<Latex>{`$${unit}$`}</Latex>
													) : (
														<HStack>
															<Latex>{`$${unit}$`}</Latex>
															<Text>
																{' or '}
															</Text>
														</HStack>
													)
												})}
											</HStack>
										</Text>
									</HStack>
								</Text>
								<Text color={dracComment} fontSize='xl'>
									<HStack>
										<Text color={dracOrange} fontSize='xl'>
											<Latex>{`$${c.val.abbreviation}$`}</Latex>
										</Text>
										<Text color={dracComment} fontSize='xl'>
											{` is measured in `}
										</Text>
										<Text color={dracOrange} fontSize='xl'>
											<HStack>
												{c.units.map((unit, i) => {
													return c.units.length ===
														i + 1 ? (
														<Latex>{`$${unit}$`}</Latex>
													) : (
														<HStack>
															<Latex>{`$${unit}$`}</Latex>
															<Text>
																{' or '}
															</Text>
														</HStack>
													)
												})}
											</HStack>
										</Text>
									</HStack>
								</Text>
							</VStack>
						</HoverCard.Content>
					</HoverCard.Positioner>
				</Portal>
			</HoverCard.Root>
		</Box>
	)
}
