import { Box } from '@chakra-ui/react'
import 'katex/dist/katex.min.css'
import React from 'react'
import Latex from 'react-latex-next'

type Props = { a: string; b: string; c: string }
type FmtBProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const FmtB: FmtBProps = ({ a, b, c }) => {
	return (
		<Box className='FmtB'>
			<Latex>{`$${a}=\\frac{${b}}{${c}}$`}</Latex>
		</Box>
	)
}
