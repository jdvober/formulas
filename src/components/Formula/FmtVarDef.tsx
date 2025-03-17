import { UnitPopover } from '@/components/Formula/UnitPopover'
import { useMainStore } from '@/stores/MainStore'
import { dracFg } from '@/theme/colors/colors'
import { Box, Text } from '@chakra-ui/react'
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
type FmtVarDefProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const FmtVarDef: FmtVarDefProps = ({ vars }) => {
	const longSymbols = useMainStore((state) => state.longSymbols)
	const [LHS, RHS, description] = vars
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
						`\\color{${LHS.color}}${LHS.symbol[longSymbols === false ? 'short' : 'long']}_{${LHS.subscript}}` +
						`\\color{${dracFg}}=` +
						`\\color{${RHS.color}}${RHS.symbol[longSymbols === false ? 'short' : 'long']}_{${RHS.subscript}}` +
						`$`}
				</Latex>
			</Box>
			<Text>{description.description}</Text>
			{isOpen && (
				<UnitPopover
					vars={vars.filter(
						(v) =>
							v.symbol[
								longSymbols === false ? 'short' : 'long'
							] !== '' || v.symbol.short !== ''
					)}
					floatingStyles={floatingStyles}
					getFloatingProps={getFloatingProps}
					refs={refs}
				/>
			)}
		</Box>
	)
}
