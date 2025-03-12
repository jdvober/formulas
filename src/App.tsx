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
							val: { shortName: 's', longName: 'speed' },
							units: [
								{
									shortName: '\\frac{m}{s^2}',
									longName: '\\frac{meters}{second^2}',
								},
							],
						},
						{
							val: { shortName: 'd', longName: 'distance' },
							units: [{ shortName: 'm', longName: 'meters' }],
						},
						{
							val: { shortName: 't', longName: 'time' },
							units: [
								{ shortName: 's', longName: 'seconds' },
								{ shortName: 's', longName: 'seconds' },
								{ shortName: 's', longName: 'seconds' },
							],
						},
					]}
				/>
			</DndContext>
		</Center>
	)
}
