<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import {
		getUseLongValues,
		setLongValues,
	} from '../../state/mainState.svelte';
	import FmtA from './FmtA.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="Formulas container">
	<button
		onclick={() => {
			setLongValues(getUseLongValues() === true ? false : true);
		}}
		>{getUseLongValues() === true
			? 'Use Short Values'
			: 'Use Long Values'}</button
	>
	<FmtA
		a={{ value: { long: 'Density', short: 'D' }, color: 'red' }}
		b={{ value: { long: 'Mass', short: 'm' }, color: 'green' }}
		c={{ value: { long: 'Volume', short: 'V' }, color: 'blue' }}
	/>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>
