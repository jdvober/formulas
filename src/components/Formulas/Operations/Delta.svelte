<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Term from '../Term.svelte';

	let props = $props();
	let color = props.color !== undefined ? props.colors : null;
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<math
	display="block"
	class="Delta"
>
	<mrow>
		<mo style:color={props.color}>Δ</mo><mi style:color
			><Term
				content={props.f}
				color={props.color}
				subscript=''
			/></mi
		>
	</mrow>
</math>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>
