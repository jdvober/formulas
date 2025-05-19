<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import type { Component } from 'svelte';
	import Subscript from '../Operations/Subscript.svelte';

	let {
		base,
		subscript,
	}: {
		base: TermType | Component;
		subscript: string | number;
	} = $props();
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->

{#snippet S()}
	<Subscript
		{base}
		baseColor={'black'}
		subscriptContent={subscript}
		subColor={'black'}
	/>
{/snippet}

<div>
	<div style:margin={'2vh'}>
		<math>
			{@render S()}
		</math>
	</div>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */

	math {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
	}
</style>
