import { InfoDisplay } from '@/components/InfoDisplay/InfoDisplay'
import './App.css'

import { Divide } from '@/components/Formula/Operations/Divide'
import { LongSymbolSwitch } from '@/components/LongSymbolSwitch'
import { Mass, Volume } from '@/stores/TermList'
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

	return (
		<Center bg='dracula.dracBG'>
			<DndContext sensors={sensors} collisionDetection={rectIntersection}>
				{/* Output math as SVG */}
				<MathJaxContext
					config={{
						tex2svg: {
							svg: true,
						},
					}}
				>
					<Flex direction='column' alignItems='center' p='1vw'>
						<Center>
							<Flex
								direction='column'
								alignItems='center'
								mb='1em'
							>
								<Text fontSize='8xl'>
									Physical Science Formulas
								</Text>
								<LongSymbolSwitch />
							</Flex>
						</Center>
						{/* <Term term={Mass} />
						<Term term={Mu} />
						<Multiplication terms={[Mass, Volume]} />
						<Division terms={[Density, Volume]} /> */}
						{/*<Divide numerator={Mass} denominator={Volume} />*/}
						{Divide({ numerator: Mass, denominator: Volume })}
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
