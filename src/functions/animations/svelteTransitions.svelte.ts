import { elasticOut } from 'svelte/easing'

export let whoosh = (
	node: HTMLElement,
	params: {
		delay?: number
		duration?: number
		easing?: (t: number) => number
	}
) => {
	const existingTransform = getComputedStyle(node).transform.replace(
		'none',
		''
	)

	return {
		delay: params.delay || 0,
		duration: params.duration || 400,
		easing: params.easing || elasticOut,
		css: (t: any) => `transform: ${existingTransform} scale(${t})`,
	}
}
