<script lang="ts">
	import Formulas from '../../components/FormulaFormats/Formulas.svelte';
	import {
		getUseLongValues,
		setLongValues,
	} from '../../state/mainState.svelte';
</script>

<button
	onclick={() => {
		setLongValues(getUseLongValues() === true ? false : true);
	}}
	>{getUseLongValues() === true
		? 'Use Short Values'
		: 'Use Long Values'}</button
>
<div class="formulas-container">
	<Formulas />
</div>

<style>
	.formulas-container {
		display: flex;
		justify-content: center;
	}
</style>
