import { useMainStore } from '@/stores/MainStore'
import { Box, Switch } from '@chakra-ui/react'
import React from 'react'

type Props = {}
type LongSymbolSwitchProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const LongSymbolSwitch: LongSymbolSwitchProps = () => {
	const longSymbols = useMainStore((state) => state.longSymbols)
	const setShortSymbols = useMainStore((state) => state.setLongSymbols)
	return (
		<Box className='LongSymbolSwitch'>
			<Switch.Root
				checked={longSymbols}
				onCheckedChange={(e) => setShortSymbols(e.checked)}
			>
				<Switch.Label>Short Variables</Switch.Label>
				<Switch.HiddenInput />
				<Switch.Control>
					<Switch.Thumb />
				</Switch.Control>
				<Switch.Label>Long Variables</Switch.Label>
			</Switch.Root>
		</Box>
	)
}
