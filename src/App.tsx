import { dracBg2, dracComment } from '@/theme/colors/colors'
import './App.css'
import { Formula } from './components/Formula/Formula'
import { FormulaList } from './stores/FormulaList'

import { LongSymbolSwitch } from '@/components/LongSymbolSwitch'
import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react'
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
		<Center bg='dracula.dracBG'>
			<DndContext sensors={sensors} collisionDetection={rectIntersection}>
				<VStack alignItems='center' p='1vw'>
					<Text fontSize='8xl'>Physical Science Formulas</Text>
					<LongSymbolSwitch />

					<Flex
						direction='row'
						wrap='wrap'
						justifyContent='center'
						alignItems='center'
						m='1em'
					>
						{FormulaList.map((topic) => {
							return (
								<Box
									border={`1px solid ${dracComment}`}
									borderRadius='1em'
									p='1em'
									boxShadow={`0 0 0.4vmin 0.4vmin ${dracBg2}`}
									filter={`drop-shadow(${dracBg2} 0 0 0.3vmin)`}
									m='1em'
								>
									<Center>
										<Text
											color={dracComment}
											fontSize='6xl'
										>
											{topic.title}
										</Text>
									</Center>
									<VStack
										justifyContent='center'
										wrap='wrap'
										fontSize='4xl'
									>
										{topic.formulas.map((f) => {
											return <Formula formula={f} />
										})}
									</VStack>
								</Box>
							)
						})}
					</Flex>
				</VStack>
			</DndContext>
		</Center>
	)
}
