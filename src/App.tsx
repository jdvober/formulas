import './App.css'

import { FmtA } from '@/components/Formula/FmtA'
import { Center } from '@chakra-ui/react'
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
				<FmtA
					vars={[
						{
							val: { name: 'speed', abbreviation: 's' },
							units: ['\\frac{m}{s^2}'],
						},
						{
							val: { name: 'distance', abbreviation: 'd' },
							units: ['meters'],
						},
						{
							val: { name: 'time', abbreviation: 't' },
							units: ['seconds'],
						},
					]}
				/>
			</DndContext>
		</Center>
	)
}
