import { createSystem, defaultConfig, mergeConfigs } from '@chakra-ui/react'

import { Colors } from './colors/colors'

const config = mergeConfigs(defaultConfig, {
	strictTokens: true,
	cssVarsRoot: ':where(:root, :host)',
	globalCss: {
		'html, body': {
			background: Colors.bg.DEFAULT.value,
		},
	},
	theme: {
		tokens: {
			colors: Colors,
		},
	},
})

export const system = createSystem(config)
