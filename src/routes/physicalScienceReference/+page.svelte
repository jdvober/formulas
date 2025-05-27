<script lang="ts">
	import GlowButton from '@/components/ui/button/GlowButton.svelte';
	import Formulas from '../../components/Formulas/Formulas.svelte';
	import {
		setLongValues,
		getUseLongValues,
	} from '../../state/mainState.svelte';
	import FormulaFilterModal from '../../components/Formulas/Filter/FormulaFilterByTopicModal.svelte';
</script>

<div class="formulas-container">
	<div class="buttons">
		<div class="long-values-button">
			<GlowButton
				onClick={() => {
					setLongValues(getUseLongValues() === true ? false : true);
				}}
				>{getUseLongValues() === true
					? 'Use Short Values'
					: 'Use Long Values'}</GlowButton
			>
		</div>
		<FormulaFilterModal />
	</div>
	<Formulas />
</div>

<style>
	.formulas-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.buttons {
		display: flex;
		flex-basis: row wrap;
		gap: 1vw;
		justify-content: flex-start;
		align-items: center;
		width: 95vw;
		height: 6vh;
		margin-top: 1.5vh;
		margin-left: 2.5vw;
		gap: 1vw;
	}
</style>
