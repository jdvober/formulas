import './App.css'
import { Formula } from './components/Formula/Formula'
import { FormulaList } from './stores/formulaList'

import { Center, Text, VStack } from '@chakra-ui/react'
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
				<VStack alignItems='center' p='1vw'>
					<Text>Physical Science Formulas</Text>
					{FormulaList.map((f) => {
						return <Formula formula={f} />
					})}
				</VStack>
			</DndContext>
		</Center>
	)
}
