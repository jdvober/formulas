<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Term from '../Term.svelte';
	const {
		superscriptContent,
		base,
	}: {
		superscriptContent: any;
		base: any;
	} = $props();
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<math class="Superscript container">
	<msup>
		<Term
			content={base}
			subscript=""
			color="black"
		/>
		<Term
			content={superscriptContent}
			subscript=""
			color="black"
		/>
	</msup>
</math>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>
