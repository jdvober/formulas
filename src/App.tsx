import './App.css'
import { FormulaList } from './stores/formulaList'

import { FmtA } from '@/components/Formula/FmtA'
import { Center, Spacer, Text, VStack } from '@chakra-ui/react'
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
					{/* Density */}
					<FmtA vars={FormulaList[0].variables} />
					<Spacer />
					{/* Speed */}
					<FmtA vars={FormulaList[1].variables} />
					<Spacer />
					{/* Ohm's Law */}
					<FmtA vars={FormulaList[2].variables} />
				</VStack>
			</DndContext>
		</Center>
	)
}
