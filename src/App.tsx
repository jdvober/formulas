import { Formulas } from '@/components/Formula/Formulas'
import './App.css'

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
									<Formulas />
								</Flex>
							</Flex>
						</Center>
						<Spacer />
					</Flex>
				</MathJaxContext>
			</DndContext>
		</Center>
	)
}
