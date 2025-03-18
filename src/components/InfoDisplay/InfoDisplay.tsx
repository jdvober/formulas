import { useMainStore } from '@/stores/MainStore'
import { Box, Center, Portal } from '@chakra-ui/react'
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
			<Box ref={containerRef} w='90vw' h='20vh' border='1px solid red' />
			{/*The portal contents are defined below.*/}
			<Portal container={containerRef}>{<Center>{info}</Center>}</Portal>
		</Box>
	)
}
