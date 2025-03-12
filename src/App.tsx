import './App.css'

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
					<FmtA
						vars={[
							{
								val: { shortName: 'I', longName: 'current' },
								units: [
									{
										shortName: 'A',
										longName: 'Amps',
									},
								],
							},
							{
								val: { shortName: 'V', longName: 'voltage' },
								units: [{ shortName: 'V', longName: 'volts' }],
							},
							{
								val: { shortName: 'R', longName: 'resistance' },
								units: [
									{ shortName: '\\Omega', longName: 'Ohms' },
								],
							},
						]}
					/>
					<Spacer />
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
								],
							},
						]}
					/>
				</VStack>
			</DndContext>
		</Center>
	)
}
