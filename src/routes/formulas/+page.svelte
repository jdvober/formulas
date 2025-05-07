<script lang="ts">
	import Formulas from '../../components/FormulaFormats/Formulas.svelte';
	// import GlowButton from '../../lib/components/ui/button/GlowButton.svelte';
	// import {
	// 	getUseLongValues,
	// 	setLongValues,
	// } from '../../state/mainState.svelte';
</script>

<div class="formulas-container">
	<div class="long-values-button">
		<!-- <GlowButton
			text={getUseLongValues() === true
				? 'Use Short Values'
				: 'Use Long Values'}
			onClick={() => {
				setLongValues(getUseLongValues() === true ? false : true);
			}}
		/> -->
	</div>
	<Formulas />
</div>

<style>
	.formulas-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.long-values-button {
		height: auto;
		border: 1px solid cyan;
		border-radius: 0.5em;
		margin-left: auto;
		margin-right: auto;
		margin-top: 1em;
		margin-bottom: 1em;
	}
</style>
