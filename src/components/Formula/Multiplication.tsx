import { Box, HStack } from '@chakra-ui/react'
import React from 'react'

type Props = { terms: [Variable, Variable] }
type MultiplicationProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const Multiplication: MultiplicationProps = (terms) => {
	return (
		<HStack className='Multiplication'>
			<Box></Box>
		</HStack>
	)
}
