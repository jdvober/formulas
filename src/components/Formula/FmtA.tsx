import { dracComment, dracOrange, dracRed } from '@/theme/colors/colors'
import { Box, HStack, Text } from '@chakra-ui/react'
import {
	FloatingArrow,
	arrow,
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
	const arrowRef = useRef(null)
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [
			arrow({
				element: arrowRef,
			}),
		],
	})

	const hover = useHover(context)

	const { getReferenceProps, getFloatingProps } = useInteractions([hover])
	return (
		<Box ref={containerRef}>
			<Box ref={refs.setReference} {...getReferenceProps()}>
				<Latex>{`$${a.val.longName}=\\frac{${b.val.longName}}{${c.val.longName}}$`}</Latex>
			</Box>
			{isOpen && (
				<Box
					border='1px solid green'
					mt='2vh'
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
					<HStack>
						<Text color={dracOrange}>
							<Latex>{`${a.val.longName}`}</Latex>
						</Text>
						<Text color={dracComment}>
							<Latex>{`$\\Rightarrow$`}</Latex>
						</Text>
						<Text color={dracOrange}>
							<HStack>
								{a.units.map((unit, i) => {
									return a.units.length === i + 1 ? (
										<Latex>{`$${unit.longName}$`}</Latex>
									) : (
										<HStack>
											<Latex>{`$${unit.longName}$`}</Latex>
											<Text>{' or '}</Text>
										</HStack>
									)
								})}
							</HStack>
						</Text>
					</HStack>
				</Box>
			)}
		</Box>
	)
}
