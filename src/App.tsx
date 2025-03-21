import { InfoDisplay } from '@/components/InfoDisplay/InfoDisplay'
import { v4 as uuid } from 'uuid'
import './App.css'

import { Block } from '@/components/Formula/Operations/Block'
import {
	Delta,
	DeltaExpanded,
	Div,
	Equals,
	Mult,
	Sqrt,
} from '@/components/Formula/Operations/Operations'
import { LongSymbolSwitch } from '@/components/LongSymbolSwitch'
import { useMainStore } from '@/stores/MainStore'
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
	const longSymbols = useMainStore((state) => state.longSymbols)

	const a = {
		variableList: [
			{
				id: uuid(),
				value: longSymbols === true ? 6 : 6,
				color: 'red',
			},
		],
		latexString: longSymbols === true ? '6' : '6',
	}

	const b = {
		variableList: [
			{
				id: uuid(),
				value: longSymbols === true ? 'position' : 'x',
				color: 'orange',
			},
		],
		latexString: longSymbols === true ? 'position' : 'x',
	}

	const c = {
		variableList: [
			{
				id: uuid(),
				value: longSymbols === true ? 5 : 5,
				color: 'yellow',
			},
		],
		latexString: longSymbols === true ? '5' : '5',
	}

	const d = {
		variableList: [
			{ id: uuid(), value: longSymbols === true ? 9 : 9, color: 'green' },
		],
		latexString: longSymbols === true ? '9' : '9',
	}

	const e = {
		variableList: [
			{
				id: uuid(),
				value: longSymbols === true ? 'height' : 'y',
				color: 'blue',
			},
		],
		latexString: longSymbols === true ? 'height' : 'y',
	}

	const f = {
		variableList: [
			{
				id: uuid(),
				value: longSymbols === true ? 'z' : 'z',
				color: 'purple',
			},
		],
		latexString: longSymbols === true ? 'z' : 'z',
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
									wrap={'wrap'}
									fontSize='3xl'
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
																	Mult(
																		a,
																		Delta(b)
																	),
																	c
																)
															),
															d
														),
														DeltaExpanded(e)
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
