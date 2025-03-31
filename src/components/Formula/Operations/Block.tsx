import { Box } from '@chakra-ui/react'
import { MathJax } from 'better-react-mathjax'
import React, { ReactNode } from 'react'

type Props = { children: ReactNode }
type BlockProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const Block: BlockProps = ({ children }) => {
	return (
		<Box className='BlockContainer'>
			<MathJax
				className={`Block ${children?.toString()}`}
				hideUntilTypeset='every'
			>{`\\[${children}\\]`}</MathJax>
		</Box>
	)
}
