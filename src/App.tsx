import "./App.css"

import { Center } from "@chakra-ui/react"
import {
	DndContext,
	MouseSensor,
	rectIntersection,
	useSensor,
	useSensors,
} from "@dnd-kit/core"


export const App = () => {
	const sensors = useSensors(
		useSensor(MouseSensor, {
			activationConstraint: {
				distance: 8,
			},
		})
	)
	return (
		<Center fontSize="5xl" bg="dracula.dracBG">
			<DndContext
				sensors={sensors}
				collisionDetection={rectIntersection}
			>
			</DndContext>
		</Center>
	)
}
