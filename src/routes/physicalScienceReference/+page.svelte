<script lang="ts">
	import GlowButton from '@/components/ui/button/GlowButton.svelte';
	import FilterBox from '../../components/FilterByTopic/FilterBox.svelte';
	import Formulas from '../../components/Formulas/Formulas.svelte';
	import {
		getUseLongValues,
		setLongValues,
	} from '../../state/mainState.svelte';
</script>

<div class="formulas-container">
	<div class="top-bar">
		<div class="butt">
			<GlowButton
				text={getUseLongValues() === true
					? 'Use Short Values'
					: 'Use Long Values'}
				onClick={() => {
					setLongValues(getUseLongValues() === true ? false : true);
				}}
			/>
		</div>
		<div class="butt">
			<FilterBox />
		</div>
	</div>
	<Formulas />
</div>

<style>
	.top-bar {
		display: flex;
		flex-direction: row;
		overflow-x: auto;
		border: 1px solid #f8f8f2;
		width: 90vw;
		justify-self: center;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 0.5em;
		border-radius: 0.5em;
	}
	.formulas-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.butt {
		height: auto;
		border: 1px solid cyan;
		border-radius: 0.5em;
		margin-left: auto;
		margin-right: auto;
		margin-top: 1em;
		margin-bottom: 1em;
	}
</style>
