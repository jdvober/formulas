import { dracOrange, dracPink, dracPurple } from '@/theme/colors/colors'
import { Box } from '@chakra-ui/react'
import 'katex/dist/katex.min.css'
import React, { useEffect, useRef } from 'react'
import Latex from 'react-latex-next'

type Props = { a: string; b: string; c: string }
type FmtAProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const FmtA: FmtAProps = ({ a, b, c }) => {
	const containerRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (containerRef.current) {
			const elements = containerRef.current.querySelectorAll('*')
			elements.forEach((element) => {
				// Do something with each element
				if (element.innerHTML === a) {
					;(element as HTMLElement).style.color = dracOrange
				}
				if (element.innerHTML === b) {
					;(element as HTMLElement).style.color = dracPurple
				}
				if (element.innerHTML === c) {
					;(element as HTMLElement).style.color = dracPink
				}
			})
		}
	}, [])
	return (
		<Box ref={containerRef}>
			<Latex>{`$${a}$`}</Latex>
			<Latex>{'='}</Latex>
			<Latex>{`$\\frac{${b}}{${c}}$`}</Latex>
		</Box>
	)
}
