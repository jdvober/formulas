import { Units } from '@/components/Formula/Units'
import { dracBg2, dracComment } from '@/theme/colors/colors'
import { Box, Flex, For, Text, VStack } from '@chakra-ui/react'
import 'katex/dist/katex.min.css'
import React from 'react'
import { v4 as uuid } from 'uuid'

type Props = {
	vars: Variable[]
	refs: any
	floatingStyles: any
	getFloatingProps: any
}
type UnitPopoverProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const UnitPopover: UnitPopoverProps = ({
	vars,
	refs,
	floatingStyles,
	getFloatingProps,
}) => {
	return (
		<Box className='UnitPopover'>
			<Box
				border={`3px solid ${dracComment}`}
				borderRadius='2xl'
				background={dracBg2}
				p='2vw'
				w='auto'
				ref={refs.setFloating}
				style={floatingStyles}
				{...getFloatingProps()}
			>
				{/*Content*/}
				<VStack>
					<Text fontSize='4xl' justifySelf='center'>
						Units
					</Text>
					<For each={vars}>
						{(variable, index) => (
							<Flex key={index} maxW='80vw' alignItems='center'>
								<Box m='0.25em'>
									<Units
										key={uuid()}
										variable={variable}
										color={variable.color}
									/>
								</Box>
							</Flex>
						)}
					</For>
				</VStack>
			</Box>
		</Box>
	)
}
