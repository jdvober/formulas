import { useMainStore } from '@/stores/MainStore'
import { dracFg } from '@/theme/colors/colors'
import { Box, Center, Portal, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'

type Props = {}
type InfoDisplayProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const InfoDisplay: InfoDisplayProps = () => {
	const info = useMainStore((state) => state.info)
	const containerRef = useRef<HTMLDivElement | null>(null)
	return (
		<Box className='InfoDisplay'>
			<Box
				ref={containerRef}
				w='90vw'
				h='20vh'
				border={`1px solid ${dracFg}`}
				borderRadius={'1em'}
				// boxShadow={`0 0 0.4vmin 0.4vmin ${dracFg}`}
				// filter={`drop-shadow(${dracFg} 0 0 0.3vmin)`}
			/>
			{/*The portal contents are defined below.*/}
			<Portal container={containerRef}>
				{
					<Center>
						<Text fontSize='2xl'>{info}</Text>
					</Center>
				}
			</Portal>
		</Box>
	)
}
