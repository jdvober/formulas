import { Units } from '@/components/Formula/Units'
import {
	dracBg2,
	dracComment,
	dracGreen,
	dracPink,
	dracPurple,
	dracRed,
} from '@/theme/colors/colors'
import { Box, Flex, For, Text, VStack } from '@chakra-ui/react'
import { FloatingArrow } from '@floating-ui/react'
import 'katex/dist/katex.min.css'
import React from 'react'
import Latex from 'react-latex-next'
import { v4 as uuid } from 'uuid'

type Props = {
	vars: Variable[]
	refs: any
	floatingStyles: any
	getFloatingProps: any
	arrowRef: any
	context: any
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
	arrowRef,
	context,
}) => {
	const colors = [dracGreen, dracPink, dracPurple]

	return (
		<Box className='UnitPopover'>
			<Box
				border={`3px solid ${dracComment}`}
				borderRadius='2xl'
				background={dracBg2}
				p='2vw'
				w='auto'
				zIndex={100}
				ref={refs.setFloating}
				style={floatingStyles}
				{...getFloatingProps()}
			>
				<FloatingArrow
					ref={arrowRef}
					context={context}
					width={28}
					height={14}
					fill={dracRed}
				/>
				{/*Content*/}
				<VStack>
					<Text fontSize='7xl' justifySelf='center'>
						Units
					</Text>
					<For each={vars}>
						{(variable, index) => (
							<Flex
								key={index}
								maxW='80vw'
								alignItems='center'
								justifyContent='start'
							>
								<Box maxW='20vw'>
									<Text fontSize='3xl'>
										<Latex>{`$\\color{${colors[index]}}${variable.symbol.long}$`}</Latex>
									</Text>
								</Box>

								<Box ml='0.25em' mr='0.25em'>
									<Text fontSize='5xl'>
										<Latex>{`$\\Rightarrow$`}</Latex>
									</Text>
								</Box>

								<Box>
									<Units
										key={uuid()}
										variable={variable}
										index={index}
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
