<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Formula from '../../../FormulaFormats/Formula.svelte';
	import * as m from '../../../Measurements/Measurements.svelte';
	import Superscript from '../../../Operations/Superscript.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="KineticEnergyFormula">
	<!--Kinetic Energy-->
	{#snippet oneHalf()}
		<math>
			<mfrac>
				<mrow>
					<mn>1</mn>
				</mrow>
				<mrow>
					<mn>2</mn>
				</mrow>
			</mfrac>
		</math>
	{/snippet}
	{#snippet velocitySquared()}
		<Superscript
			base={m.VELOCITY}
			superscriptContent="2"
		/>
	{/snippet}
	<Formula
		format="C"
		initialVariant="DEFAULT"
		values={{
			a: m.KINETIC_ENERGY,
			b: oneHalf,
			c: m.MASS,
			d: velocitySquared,
			coefficient: m.VELOCITY,
		}}
		subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE', d: 'NONE' }}
	></Formula>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>
