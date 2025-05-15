<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Formula from '../../../FormulaFormats/Formula.svelte';
	import * as m from '../../../Measurements/Measurements.svelte';
	import Delta from '../../../Operations/Delta.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="VelocityFormula">
	<!--Velocity-->
	{#snippet bVelocity()}
		<Delta
			f={m.POSITION}
			colors={m.POSITION.color}
		/>
	{/snippet}
	{#snippet c()}
		<Delta
			f={m.TIME}
			colors={m.TIME.color}
		/>
	{/snippet}
	<Formula
		format="A"
		initialVariant="DEFAULT"
		values={{ a: m.VELOCITY, b: bVelocity, c: c }}
		subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE' }}
	></Formula>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>
