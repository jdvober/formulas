<script lang="ts">
	import Formulas from '../../components/FormulaFormats/Formulas.svelte';
	import {
		getUseLongValues,
		setLongValues,
	} from '../../state/mainState.svelte';
</script>

<div class="formulas-container">
	<button
		class="long-values-button"
		onclick={() => {
			setLongValues(getUseLongValues() === true ? false : true);
		}}
		>{getUseLongValues() === true
			? 'Use Short Values'
			: 'Use Long Values'}</button
	>
	<Formulas />
</div>

<style>
	.formulas-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.long-values-button {
		width: 10vw;
		height: auto;
		border: 1px solid cyan;
		border-radius: 0.5em;
		margin-left: auto;
		margin-right: auto;
		margin-top: 1em;
		margin-bottom: 1em;
	}
</style>
