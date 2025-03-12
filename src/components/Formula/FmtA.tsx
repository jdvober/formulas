import {
	dracBg2,
	dracComment,
	dracFg,
	dracGreen,
	dracPink,
	dracPurple,
	dracRed,
} from '@/theme/colors/colors'
import {
	Box,
	For,
	GridItem,
	HStack,
	SimpleGrid,
	Text,
	VStack,
} from '@chakra-ui/react'
import {
	FloatingArrow,
	arrow,
	offset,
	useFloating,
	useHover,
	useInteractions,
} from '@floating-ui/react'
import 'katex/dist/katex.min.css'
import React, { useEffect, useRef, useState } from 'react'
import Latex from 'react-latex-next'

type Props = {
	vars: [
		{
			val: { shortName: string; longName: string }
			units: { shortName: string; longName: string }[]
		},
		{
			val: { shortName: string; longName: string }
			units: { shortName: string; longName: string }[]
		},
		{
			val: { shortName: string; longName: string }
			units: { shortName: string; longName: string }[]
		},
	]
}
type FmtAProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const FmtA: FmtAProps = ({ vars }) => {
	const [a, b, c] = vars
	const colors = [dracGreen, dracPink, dracPurple]
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (containerRef.current) {
			// Give color to the individual variables
			const elements = containerRef.current.querySelectorAll('*')
			// elements.forEach((element) => {
			// 	// Do something with each element
			// 	if (
			// 		element.innerHTML === a.val.longName ||
			// 		element.innerHTML === a.val.shortName
			// 	) {
			// 		;(element as HTMLElement).style.color = dracOrange
			// 	}
			// 	if (
			// 		element.innerHTML === b.val.longName ||
			// 		element.innerHTML === b.val.shortName
			// 	) {
			// 		;(element as HTMLElement).style.color = dracPurple
			// 	}
			// 	if (
			// 		element.innerHTML === c.val.longName ||
			// 		element.innerHTML === c.val.shortName
			// 	) {
			// 		;(element as HTMLElement).style.color = dracPink
			// 	}
			// })
		}
	}, [])

	const [isOpen, setIsOpen] = useState(false)
	//const [isOpen, setIsOpen] = useState(false)
	const arrowRef = useRef(null)
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [
			arrow({
				element: arrowRef,
			}),
			offset(32), // Spacing of the floating popover from the reference element.
		],
	})

	const hover = useHover(context)

	const { getReferenceProps, getFloatingProps } = useInteractions([hover])
	return (
		<Box ref={containerRef}>
			<Box ref={refs.setReference} {...getReferenceProps()}>
				<Latex>{`$\\color{${dracGreen}}${a.val.longName}\\color{${dracFg}}=\\frac{\\color{${dracPink}}${b.val.longName}}{\\color{${dracPurple}}${c.val.longName}}$`}</Latex>
			</Box>
			{isOpen && (
				<Box
					border={`3px solid ${dracComment}`}
					borderRadius='2xl'
					background={dracBg2}
					p='2vw'
					w='auto'
					ref={refs.setFloating}
					style={floatingStyles}
					{...getFloatingProps()}
				>
					<FloatingArrow
						ref={arrowRef}
						context={context}
						width={28}
						height={14}
						fill={dracRed}
					/>
					{/*Content*/}
					<VStack>
						<Text fontSize='7xl' justifySelf='center'>
							Units
						</Text>
						<For each={vars}>
							{(item, index) => (
								<SimpleGrid
									columns={9}
									key={index}
									w='100%'
									alignItems='center'
								>
									<GridItem colSpan={2} justifySelf='center'>
										<Text fontSize='3xl'>
											<Latex>{`$\\color{${colors[index]}}${item.val.longName}$`}</Latex>
										</Text>
									</GridItem>

									<GridItem colSpan={1} justifySelf='center'>
										<Text fontSize='5xl'>
											<Latex>{`$\\Rightarrow$`}</Latex>
										</Text>
									</GridItem>

									<GridItem colSpan={6}>
										<HStack>
											{item.units.map((unit, i) => {
												return a.units.length ===
													i + 1 ? (
													<Text fontSize='2xl'>
														<Latex>{`$\\color{${colors[index]}}${unit.longName}$`}</Latex>
													</Text>
												) : (
													<HStack>
														<Text
															fontSize='2xl'
															color={dracFg}
														>{` or `}</Text>
														<Text fontSize='2xl'>
															<Latex>{`$\\color{${colors[index]}}${unit.longName}$`}</Latex>
														</Text>
													</HStack>
												)
											})}
										</HStack>
									</GridItem>
								</SimpleGrid>
							)}
						</For>
					</VStack>
				</Box>
			)}
		</Box>
	)
}
