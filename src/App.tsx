import { dracComment } from '@/theme/colors/colors'
import './App.css'
import { Formula } from './components/Formula/Formula'
import { FormulaList } from './stores/formulaList'

import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react'
import {
	DndContext,
	MouseSensor,
	rectIntersection,
	useSensor,
	useSensors,
} from '@dnd-kit/core'

export const App = () => {
	const sensors = useSensors(
		useSensor(MouseSensor, {
			activationConstraint: {
				distance: 8,
			},
		})
	)
	return (
		<Center fontSize='5xl' bg='dracula.dracBG'>
			<DndContext sensors={sensors} collisionDetection={rectIntersection}>
				<VStack alignItems='center' p='1vw' spaceY={'2em'}>
					<Text>Physical Science Formulas</Text>
					{FormulaList.map((topic) => {
						return (
							<Box>
								<Center>
									<Text color={dracComment}>
										{topic.title}
									</Text>
								</Center>
								<HStack spaceX='1em' wrap='wrap'>
									{topic.formulas.map((f) => {
										return <Formula formula={f} />
									})}
								</HStack>
							</Box>
						)
					})}
					<Box h='15em'></Box>
				</VStack>
			</DndContext>
		</Center>
	)
}
