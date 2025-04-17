<script lang="ts">
	import type { TermData } from '../../types/ambientTypes';

	// Helper component to render a term-sub pair
	let {
		term,
		sub,
		className,
	}: {
		term: TermData;
		sub: TermData;
		className: string;
	} = $props();
</script>

<msub>
	<mi
		class={`${className}Term`}
		style={`--term-color: ${term.color}; color: var(--term-color);`}
	>
		{term.value}
	</mi>
	<mi
		class={`${className}Sub`}
		style={`--sub-color: ${sub.color}; color: var(--sub-color);`}
	>
		{sub.value}
	</mi>
</msub>
