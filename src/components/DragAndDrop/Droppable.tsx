import { Box, Flex, Text } from "@chakra-ui/react"
import { useDroppable } from "@dnd-kit/core"

import { Draggable } from "./Draggable"

type DroppableArguments = {
	title: string
	items: any[]
}

export function Droppable({ title, items }: DroppableArguments) {
	const { isOver, setNodeRef } = useDroppable({
		id: title,
	})

	return (
		<Box>
			<Flex flex="3" padding="5" flexDirection="column" minH="10rem">
				<Text fontWeight="bold" color="Yellow">
					{title}
				</Text>
				<Flex
					ref={setNodeRef}
					backgroundColor={
						isOver ? "dracula.dracGreen" : "dracula.dracCurrentLine"
					}
					borderRadius="8"
					flex="1"
					padding="2"
					flexDirection="column"
				>
					{items.map(({ title: cardTitle }, key) => (
						<Draggable
							title={cardTitle}
							key={key}
							index={key}
							parent={title}
						/>
					))}
				</Flex>
			</Flex>
		</Box>
	)
}
