<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Term from '../Term.svelte';
	const props = $props();
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<math class="Root container">
	<mrow>
		{#if props.initialContent === undefined}
			<mo style:color={props.colors.parens}>&Delta;</mo>
		{/if}
		{#if props.initialContent !== undefined}
			<mo style:color={props.colors.parens}>(</mo>
		{:else}
			<mn></mn>
		{/if}

		<Term content={props.finalContent} />

		{#if props.initialContent !== undefined}
			<mo>-</mo>
			<Term content={props.initialContent} />
			<mo style:color={props.colors.parens}>)</mo>
		{:else}
			<mn></mn>
		{/if}
	</mrow>
</math>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>
