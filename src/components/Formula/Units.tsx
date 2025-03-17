import { dracComment, dracFg } from '@/theme/colors/colors'
import { HStack, Text } from '@chakra-ui/react'
import React from 'react'
import Latex from 'react-latex-next'
import { v4 as uuid } from 'uuid'

type Props = { variable: Variable; color: string }
type UnitsProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const Units: UnitsProps = ({ variable, color }) => {
	return (
		<HStack className='Units'>
			{variable.units.map((unit, i) => {
				return variable.units.length === i + 1 ? (
					<HStack key={uuid()}>
						<Text fontSize='2xl'>
							{
								<Latex>{`$\\color{${color}}${unit.symbol}$`}</Latex>
							}
						</Text>
						<Text fontSize='2xl'>
							{unit.name === 'Unitless' ||
							unit.name === '' ? null : (
								<Latex>{`$\\color{${dracFg}}(${unit.name})$`}</Latex>
							)}
						</Text>
					</HStack>
				) : (
					<HStack key={uuid()}>
						<Text fontSize='2xl'>
							<Latex>{`$\\color{${color}}${unit.symbol}$`}</Latex>
						</Text>
						<Text fontSize='2xl'>
							{unit.name === 'Unitless' ||
							unit.name === '' ? null : (
								<Latex>
									{`$` +
										`\\color{${dracFg}}` +
										`(` +
										`${unit.name}` +
										`)` +
										`$`}
								</Latex>
							)}
						</Text>
						<Text fontSize='2xl' color={dracComment}>{` or `}</Text>
					</HStack>
				)
			})}
		</HStack>
	)
}
