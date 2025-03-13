import { UnitPopover } from '@/components/Formula/UnitPopover'
import { dracFg, dracGreen, dracPink, dracPurple } from '@/theme/colors/colors'
import { Box } from '@chakra-ui/react'
import {
	arrow,
	autoPlacement,
	offset,
	size,
	useFloating,
	useHover,
	useInteractions,
} from '@floating-ui/react'
import 'katex/dist/katex.min.css'
import React, { useRef, useState } from 'react'
import Latex from 'react-latex-next'

type Props = {
	vars: Variable[]
}
type FmtAProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const FmtA: FmtAProps = ({ vars }) => {
	const [a, b, c] = vars
	const containerRef = useRef<HTMLDivElement>(null)

	const [isOpen, setIsOpen] = useState(false)
	const arrowRef = useRef(null)
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [
			arrow({
				element: arrowRef,
			}),
			offset(32), // Spacing of the floating popover from the reference element.
			autoPlacement(),
			size({
				apply({ availableWidth, availableHeight, elements }) {
					Object.assign(elements.floating.style, {
						maxWidth: `${Math.max(0, availableWidth)}px`,
						maxHeight: `${Math.max(0, availableHeight)}px`,
					})
				},
			}),
		],
	})

	const hover = useHover(context)

	const { getReferenceProps, getFloatingProps } = useInteractions([hover])
	return (
		<Box ref={containerRef}>
			<Box ref={refs.setReference} {...getReferenceProps()}>
				<Latex>{`$\\color{${dracGreen}}${a.symbol.long}\\color{${dracFg}}=\\frac{\\color{${dracPink}}${b.symbol.long}}{\\color{${dracPurple}}${c.symbol.long}}$`}</Latex>
			</Box>
			{isOpen && (
				<UnitPopover
					vars={vars}
					floatingStyles={floatingStyles}
					getFloatingProps={getFloatingProps}
					refs={refs}
				/>
			)}
		</Box>
	)
}
