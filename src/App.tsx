import { InfoDisplay } from '@/components/InfoDisplay/InfoDisplay'
import { v4 as uuid } from 'uuid'
import './App.css'

import { FmtB } from '@/components/Formula/Formats/FmtB'
import { LongSymbolSwitch } from '@/components/LongSymbolSwitch'
import { useMainStore } from '@/stores/MainStore'
import { Density, Mass, VariableColors, Volume } from '@/stores/TermList'
import { dracFg } from '@/theme/colors/colors'
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

	type MakeVarType = {
		variableList: {
			id: string
			value: { short: string | number; long: string | number }
			subscript: { short: string | number; long: string | number }
			color: string
		}[]
		latexString: string
	}

	const makeVar = (
		s: string | number,
		l: string | number,
		subS: string | number,
		subL: string | number,
		color: string
	): MakeVarType => {
		return {
			variableList: [
				{
					id: uuid(),
					value: { short: s, long: l },
					subscript: { short: subS, long: subL },
					color: color,
				},
			],
			latexString:
				longSymbols === true
					? `\\color{${color}}${l.toString()}\\color{${dracFg}}`
					: `\\color{${color}}${s.toString()}\\color{${dracFg}}`,
		}
	}
	const a = makeVar(6, 6, '', '', VariableColors[0])

	const b = makeVar('position', 'x', '', '', VariableColors[1])

	const c = makeVar(5, 5, '', '', VariableColors[2])

	const d = makeVar(9, 9, '', '', VariableColors[3])

	const e = makeVar('height', 'y', '', '', VariableColors[4])

	const f = makeVar('z', 'z', '', '', VariableColors[5])

	return (
		<Center bg='dracula.dracBG'>
			<DndContext sensors={sensors} collisionDetection={rectIntersection}>
				{/* Output math as SVG */}
				<MathJaxContext
					config={{
						loader: {
							load: ['input/tex', 'output/svg', '[tex]/color'],
						},
						tex: {
							autoload: {
								verb: ['verb'],
							},
							packages: { '[+]': ['color'] }, // Enable the 'color' package
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
									direction='column'
									gapX='3em'
									wrap={'wrap'}
									fontSize='3xl'
									w='75vw'
									border='1px solid cyan'
								>
									{/* Format A
									<FmtA
										key={uuid()}
										terms={[Density(), Mass(), Volume()]}
									/>
									*/}
									{/* Format B */}
									<FmtB
										key={uuid()}
										terms={[Density(), Mass(), Volume()]}
									/>
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
