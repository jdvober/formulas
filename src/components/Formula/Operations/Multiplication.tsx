import { Term } from '@/components/Formula/Term'
import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'

type Props = { terms: [Term, Term] }
type MultiplicationProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const Multiplication: MultiplicationProps = ({ terms }) => {
	const [term1, term2] = terms

	return (
		<HStack className='Multiplication'>
			<Box>
				<HStack>
					<Term term={term1} />
					<Text fontSize='4xl'>{'⋅'}</Text>
					<Term term={term2} />
				</HStack>
			</Box>
		</HStack>
	)
}
