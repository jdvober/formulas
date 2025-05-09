<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Formula from '../FormulaFormats/Formula.svelte';
	import * as m from '../Measurements/Measurements.svelte';
	import UnitInfoBox from '../Measurements/UnitInfoBox.svelte';
	import Delta from '../Operations/Delta.svelte';
	import Superscript from '../Operations/Superscript.svelte';
	import DensityFormula from './PhysicalScience/DensityFormula.svelte';
	import PressureFormula from './PhysicalScience/PressureFormula.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<!--TODO: Make categories / be able to select different formulas to display / hide. (FILTER)-->
<div class="formulas-container">
	<UnitInfoBox />
	<div class="Formulas">
		<DensityFormula />
		<PressureFormula />
		<!--Boyle's Law-->
		<Formula
			format="B"
			initialVariant="DEFAULT"
			values={{ a: m.PRESSURE, b: m.VOLUME, c: m.PRESSURE, d: m.VOLUME }}
			subscripts={{ a: '1', b: '1', c: '2', d: '2' }}
		/>
		<!--Charles' Law-->
		<Formula
			format="B"
			initialVariant="DEFAULT"
			values={{
				a: m.VOLUME,
				b: m.TEMPERATURE,
				c: m.VOLUME,
				d: m.TEMPERATURE,
			}}
			subscripts={{ a: '1', b: '1', c: '2', d: '2' }}
		/>
		<!--Gay-Lussac's Law-->
		<Formula
			format="B"
			initialVariant="DEFAULT"
			values={{
				a: m.TEMPERATURE,
				b: m.PRESSURE,
				c: m.TEMPERATURE,
				d: m.PRESSURE,
			}}
			subscripts={{ a: '1', b: '1', c: '2', d: '2' }}
		/>
		<!--Speed-->
		<Formula
			format="A"
			initialVariant="DEFAULT"
			values={{ a: m.SPEED, b: m.DISTANCE, c: m.TIME }}
			subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE' }}
		/>
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
		{#snippet bAcceleration()}
			<Delta
				f={m.VELOCITY}
				subscripts={{ final: 'f', initial: 'i' }}
				colors={{
					f: m.VELOCITY.color,
					i: m.VELOCITY.color,
					parens: m.VELOCITY.color,
				}}
			/>
		{/snippet}

		<!--Acceleration-->
		<Formula
			format="A"
			initialVariant="DEFAULT"
			values={{ a: m.ACCELERATION, b: bAcceleration, c: c }}
			subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE' }}
		></Formula>

		<!--Momentum-->
		<Formula
			format="A"
			initialVariant="SECONDARY"
			values={{ a: m.MASS, b: m.MOMENTUM, c: m.VELOCITY }}
			subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE' }}
		></Formula>
		<!--Force-->
		<Formula
			format="A"
			initialVariant="SECONDARY"
			values={{ a: m.MASS, b: m.FORCE, c: m.ACCELERATION }}
			subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE' }}
		></Formula>
		<!--Force due to Gravity-->
		<Formula
			format="A"
			initialVariant="SECONDARY"
			values={{ a: m.MASS, b: m.FORCE, c: m.ACCELERATION }}
			subscripts={{ a: 'NONE', b: 'Gravity', c: 'Gravity' }}
		></Formula>
		<!--Weight-->
		<Formula
			format="A"
			initialVariant="SECONDARY"
			values={{ a: m.MASS, b: m.WEIGHT, c: m.ACCELERATION }}
			subscripts={{ a: 'NONE', b: 'NONE', c: 'Gravity' }}
		></Formula>
		<!--Work-->
		<Formula
			format="A"
			initialVariant="SECONDARY"
			values={{ a: m.FORCE, b: m.WORK, c: m.DISTANCE }}
			subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE' }}
		></Formula>
		<!--Power-->
		<Formula
			format="A"
			initialVariant="DEFAULT"
			values={{ a: m.POWER, b: m.WORK, c: m.TIME }}
			subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE' }}
		></Formula>
		<!--Kinetic Energy-->
		{#snippet bKineticEnergy()}
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
		{#snippet dKineticEnergy()}
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
				b: bKineticEnergy,
				c: m.MASS,
				d: dKineticEnergy,
			}}
			subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE', d: 'NONE' }}
		></Formula>
		<!--Wave Speed-->
		<Formula
			format="A"
			initialVariant="DEFAULT"
			values={{ a: m.WAVE_SPEED, b: m.FREQUENCY, c: m.WAVELENGTH }}
			subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE' }}
		></Formula>
	</div>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.formulas-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100vw;
	}
	.Formulas {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 95vw;
		height: 55vh;
		justify-content: space-evenly;
		margin-left: auto;
		margin-right: auto;
		margin-top: 1em;
		border: 1px solid #fafaf2;
		border-radius: 1em;
		overflow-y: auto;
		row-gap: 2vh;
		padding: 2vh;
	}
</style>
