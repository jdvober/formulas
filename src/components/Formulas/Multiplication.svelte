<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	const props = $props();
	// let {
	// 	a,
	// 	b,
	// 	aColor,
	// 	bColor,
	// }: {
	// 	a:
	// 		| string
	// 		| Component<$$ComponentProps, {}, ''>
	// 		| (() => ReturnType<import('svelte').Snippet>);
	// 	b:
	// 		| string
	// 		| Component<$$ComponentProps, {}, ''>
	// 		| (() => ReturnType<import('svelte').Snippet>);

	// 	aColor: string;
	// 	bColor: string;
	// } = $props();
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<math class="Multiplication container">
	<mo>(</mo>
	{#if typeof props.a === 'string'}
		<mi style:color={props.aColor}>{@html props.a}</mi>
	{:else}
		{@render props.a()}
	{/if}
	<mo>&middot</mo>
	{#if typeof props.b === 'string'}
		<mi style:color={props.bColor}>{@html props.b}</mi>
	{:else}
		{@render props.b()}
	{/if}
	<mo>)</mo>
</math>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	math :global {
		mi {
			font-size: 3em;
		}
		mo {
			font-size: 3em;
		}
	}
</style>
