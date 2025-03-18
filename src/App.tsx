import { InfoDisplay } from '@/components/InfoDisplay/InfoDisplay'
import './App.css'

import { Term } from '@/components/Formula/Term'
import { LongSymbolSwitch } from '@/components/LongSymbolSwitch'
import { Mass, Mu } from '@/stores/TermList'
import { Center, Flex, Spacer, Text } from '@chakra-ui/react'
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
				<Flex direction='column' alignItems='center' p='1vw'>
					<Center>
						<Flex direction='column' alignItems='center' mb='1em'>
							<Text fontSize='8xl'>
								Physical Science Formulas
							</Text>
							<LongSymbolSwitch />
						</Flex>
					</Center>
					<Term
						term={Mass
						}
					/>
					<Term
						term={
							Mu
						}
					/>
					{/* 					<Flex
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
					</Flex> */}

					<Spacer />
					<Center
						m='1em'
						style={{ position: 'fixed', bottom: 0, width: '100%' }}
					>
						<InfoDisplay />
					</Center>
				</Flex>
			</DndContext>
		</Center>
	)
}
