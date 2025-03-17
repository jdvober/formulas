import { UnitPopover } from '@/components/Formula/UnitPopover'
import { useMainStore } from '@/stores/MainStore'
import { dracFg } from '@/theme/colors/colors'
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
type FmtEProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const FmtE: FmtEProps = ({ vars }) => {
	const longSymbols = useMainStore((state) => state.longSymbols)
	const [a, b, c, d] = vars
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
				<Latex>
					{`$` +
						`\\color{${a.color}}${longSymbols == false ? a.symbol.short : a.symbol.long}_{${a.subscript}}` +
						`\\color{${dracFg}}=` +
						`\\color{${b.color}}${longSymbols == false ? b.symbol.short : b.symbol.long}_{${b.subscript}}` +
						`\\cdot` +
						`\\color{${c.color}}${longSymbols == false ? c.symbol.short : c.symbol.long}_{${c.subscript}}` +
						`\\cdot` +
						`\\color{${d.color}}${d.symbol[longSymbols === false ? 'short' : 'long']}_{${d.subscript}}` +
						`$`}
				</Latex>
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
