import { InfoDisplay } from '@/components/InfoDisplay/InfoDisplay'
import { v4 as uuid } from 'uuid'
import './App.css'

import { Block } from '@/components/Formula/Formats/Block'
import {
	Div,
	Equals,
	Mult,
	Sqrt,
} from '@/components/Formula/Operations/Operations'
import { LongSymbolSwitch } from '@/components/LongSymbolSwitch'
import { Center, Flex, Spacer, Text } from '@chakra-ui/react'
import {
	DndContext,
	MouseSensor,
	rectIntersection,
	useSensor,
	useSensors,
} from '@dnd-kit/core'
import { MathJaxContext } from 'better-react-mathjax'

export const App = () => {
	const sensors = useSensors(
		useSensor(MouseSensor, {
			activationConstraint: {
				distance: 8,
			},
		})
	)

	const a = {
		variableList: [{ id: uuid(), value: 6, color: 'red' }],
		latexString: '6',
	}

	const b = {
		variableList: [{ id: uuid(), value: 'x', color: 'orange' }],
		latexString: 'x',
	}

	const c = {
		variableList: [{ id: uuid(), value: 5, color: 'yellow' }],
		latexString: '5',
	}

	const d = {
		variableList: [{ id: uuid(), value: 9, color: 'green' }],
		latexString: '9',
	}

	const e = {
		variableList: [{ id: uuid(), value: 'y', color: 'blue' }],
		latexString: 'y',
	}

	const f = {
		variableList: [{ id: uuid(), value: 'z', color: 'purple' }],
		latexString: 'z',
	}

	return (
		<Center bg='dracula.dracBG'>
			<DndContext sensors={sensors} collisionDetection={rectIntersection}>
				{/* Output math as SVG */}
				<MathJaxContext
					config={{
						loader: { load: ['input/tex', 'output/svg'] },
						tex: {
							inlineMath: [['\\(', '\\)']],
							displayMath: [['\\[', '\\]']],
						},
						svg: {
							fontCache: 'global',
						},
					}}
					hideUntilTypeset='every'
					// renderMode='pre'
				>
					<Flex direction='column' alignItems='center' p='1vw'>
						<Center>
							<Flex
								direction='column'
								alignItems='center'
								mb='1em'
								wrap={'wrap'}
							>
								<Text fontSize='8xl'>
									Physical Science Formulas
								</Text>
								<LongSymbolSwitch />
								<Flex
									direction='row'
									gapX='3em'
									m='3em'
									wrap={'wrap'}
								>
									<Block>
										{
											Equals(
												f,
												Sqrt(
													Div(
														Mult(
															Sqrt(
																Div(
																	Mult(a, b),
																	c
																)
															),
															d
														),
														e
													)
												)
											).latexString
										}
									</Block>
								</Flex>
							</Flex>
						</Center>
						<Spacer />
						<Center
							m='1em'
							style={{
								position: 'fixed',
								bottom: 0,
								width: '100%',
							}}
						>
							<InfoDisplay />
						</Center>
					</Flex>
				</MathJaxContext>
			</DndContext>
		</Center>
	)
}
