import {
	dracComment,
	dracFg,
	dracGreen,
	dracPink,
	dracPurple,
} from '@/theme/colors/colors'
import { HStack, Text } from '@chakra-ui/react'
import React from 'react'
import Latex from 'react-latex-next'
import { v4 as uuid } from 'uuid'

type Props = { variable: Variable; index: number }
type UnitsProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const Units: UnitsProps = ({ variable, index }) => {
	const colors = [dracGreen, dracPink, dracPurple]

	return (
		<HStack className='Units'>
			{variable.units.map((unit, i) => {
				return variable.units.length === i + 1 ? (
					<HStack key={uuid()}>
						<Text fontSize='2xl'>
							<Latex>{`$\\color{${colors[index]}}${unit.name}$`}</Latex>
						</Text>
						<Text fontSize='2xl'>
							<Latex>{`$\\color{${dracComment}}(${unit.symbol})$`}</Latex>
						</Text>
					</HStack>
				) : (
					<HStack key={uuid()}>
						<Text fontSize='2xl'>
							<Latex>{`$\\color{${colors[index]}}${unit.name}$`}</Latex>
						</Text>
						<Text fontSize='2xl'>
							<Latex>{`$\\color{${dracComment}}(${unit.symbol})$`}</Latex>
						</Text>
						<Text fontSize='2xl' color={dracFg}>{` or `}</Text>
					</HStack>
				)
			})}
		</HStack>
	)
}
