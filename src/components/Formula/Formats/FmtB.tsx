import { Block } from '@/components/Formula/Operations/Block'
import { Divide, Equals } from '@/components/Formula/Operations/Operations'
import { useMainStore } from '@/stores/MainStore'
import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
	terms: Term[]
}
type FmtBProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const FmtB: FmtBProps = ({ terms }) => {
	const longSymbols = useMainStore((state) => state.longSymbols)
	const [a, b, c] = terms
	return (
		<Box>
			<Box>
				<Block>
					{
						Equals(a, Divide(b, c, longSymbols), longSymbols)[0]
							.texString
					}
				</Block>
			</Box>
		</Box>
	)
}
