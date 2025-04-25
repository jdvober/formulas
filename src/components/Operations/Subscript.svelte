<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Term from '../Term.svelte';
	const {
		subscriptContent,
		base,
		baseColor,
		subColor,
	}: {
		subscriptContent: any;
		base: any;
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
		/>
		<Term
			content={subscriptContent}
			color={subColor}
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
