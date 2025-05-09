<script>
	import GlowButton from '@/components/ui/button/GlowButton.svelte';
	import {
		getTopicsToggleStates,
		setTopicsToggleStates,
	} from './../../state/mainState.svelte.ts';
	import Modal from './FilterByTopicModal.svelte';

	let showModal = $state(false);
	let checkboxState = $state(true);
</script>

<GlowButton
	text={'Filter By Topic'}
	onClick={() => {
		showModal = true;
	}}
/>

<Modal bind:showModal>
	{#snippet header()}
		<h1>Select Topic(s)</h1>
	{/snippet}

	<fieldset
		class="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4"
	>
		<legend class="fieldset-legend"
			>{getTopicsToggleStates().PS.formulas.chemistry.name}</legend
		>
		<label class="label">
			<input
				type="checkbox"
				checked={checkboxState}
				class="checkbox"
				onchange={() => {
					let newState = getTopicsToggleStates();
					newState.PS.formulas.chemistry.formulas.density.checkedState =
						!newState.PS.formulas.chemistry.formulas.density
							.checkedState;
					setTopicsToggleStates(newState);
				}}
			/>
			{getTopicsToggleStates().PS.formulas.chemistry.formulas.density
				.name}
		</label>
		<label class="label">
			<input
				type="checkbox"
				checked={checkboxState}
				class="checkbox"
				onchange={() => {
					let newState = getTopicsToggleStates();
					newState.PS.formulas.chemistry.formulas.pressure.checkedState =
						!newState.PS.formulas.chemistry.formulas.pressure
							.checkedState;
					setTopicsToggleStates(newState);
				}}
			/>
			{getTopicsToggleStates().PS.formulas.chemistry.formulas.pressure
				.name}
		</label>
	</fieldset>
</Modal>
