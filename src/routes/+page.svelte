<script lang="ts">
	import GlowButton from '@/components/ui/button/GlowButton.svelte';
	import Formulas from '../components/Formulas/Formulas.svelte';
	import { getUseLongValues, setLongValues } from '../state/mainState.svelte';
</script>

<div class="formulas-container">
	<div class="long-values-button">
		<GlowButton
			text={getUseLongValues() === true
				? 'Use Short Values'
				: 'Use Long Values'}
			onClick={() => {
				setLongValues(getUseLongValues() === true ? false : true);
			}}
		/>
	</div>
	<Formulas />
</div>

<style>
	.formulas-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
