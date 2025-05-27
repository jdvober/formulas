<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import type { Component } from 'svelte';
	import Term from '../Term.svelte';
	const {
		subscriptContent,
		base,
		baseColor,
		subColor,
	}: {
		subscriptContent: any;
		base: TermType | Component;
		baseColor: string;
		subColor: string;
	} = $props();
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<math class="Subscript">
	<msub>
		<Term
			content={base}
			color={baseColor}
			subscript="NONE"
		/>
		<Term
			content={subscriptContent}
			color={subColor}
			subscript="NONE"
		/>
	</msub>
</math>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.Subscript {
		max-width: 5vw;
	}
</style>
