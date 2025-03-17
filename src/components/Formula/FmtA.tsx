import { UnitPopover } from '@/components/Formula/UnitPopover'
import { useMainStore } from '@/stores/MainStore'
import { dracFg } from '@/theme/colors/colors'
import { Box } from '@chakra-ui/react'
import {
	arrow,
	flip,
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
	const longSymbols = useMainStore((state) => state.longSymbols)
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
			flip(),
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
		<Box ref={containerRef} zIndex={1}>
			<Box ref={refs.setReference} {...getReferenceProps()}>
				<Latex>
					{`$` +
						`\\color{${a.color}}${longSymbols == false ? a.symbol.short : a.symbol.long}_{${a.subscript}}` +
						`\\color{${dracFg}}=` +
						`\\frac` +
						`{` +
						`\\color{${b.color}}${longSymbols == false ? b.symbol.short : b.symbol.long}_{${b.subscript}}` +
						`}` +
						`{` +
						`\\color{${c.color}}${longSymbols == false ? c.symbol.short : c.symbol.long}_{${c.subscript}}` +
						`}` +
						`$`}
				</Latex>
			</Box>
			{isOpen && (
				<Box zIndex={1}>
					<UnitPopover
						vars={vars}
						floatingStyles={floatingStyles}
						getFloatingProps={getFloatingProps}
						refs={refs}
					/>
				</Box>
			)}
		</Box>
	)
}
