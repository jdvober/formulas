import { Box } from '@chakra-ui/react'
import { MathJax } from 'better-react-mathjax'
import React, { ReactNode } from 'react'

type Props = { children: ReactNode }
type InlineProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const Inline: InlineProps = ({ children }) => {
	return (
		<Box>
			<MathJax
				className={`Inline ${children?.toString()}`}
				hideUntilTypeset='every'
			>{`\\(${children}\\)`}</MathJax>
		</Box>
	)
}
