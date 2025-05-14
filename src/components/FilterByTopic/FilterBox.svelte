<script lang="ts">
	import GlowButton from '@/components/ui/button/GlowButton.svelte';
	import { findNestedObjectValueById } from '../../functions/FindNestedObjectValueById.ts';
	import { updateNestedObjectById } from '../../functions/UpdateNestedObjectById.ts';
	import {
		psFormulas,
		topicsToggles,
	} from './../../state/mainState.svelte.ts';
	import Modal from './FilterByTopicModal.svelte';
	import { getToggleStateById } from './GetToggleStateById.svelte.ts';

	let showModal = $state(false);
	let checkboxState = $state(true);

	// Searches for the key with id that is passed in, and toggles the checkbox state.
	let toggleTopicState = (id: string) => {
		let newTopicsToggleStates = topicsToggles.state();
		let oldCheckedState = findNestedObjectValueById(
			newTopicsToggleStates,
			id,
			'checkedState'
		);
		updateNestedObjectById(
			newTopicsToggleStates,
			id,
			'checkedState',
			oldCheckedState === true ? false : true
		);
		topicsToggles.setState(newTopicsToggleStates);
	};

	let getName = (id: string) => {
		let toggleState = getToggleStateById(topicsToggles.state(), id);
		return toggleState.name;
	};
</script>

{#snippet makeCheckbox(id: string)}
	<label class="label">
		<input
			type="checkbox"
			checked={checkboxState}
			class="checkbox"
			onchange={() => {
				toggleTopicState(id);
			}}
		/>
		<div style:margin-right={'5vmin'}>
			{getName(id)}
		</div>
	</label>
{/snippet}

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
		<!--Chemistry-->
		<legend class="fieldset-legend">Chemistry Header</legend>
		{#each psFormulas as topic}
			{@render makeCheckbox(topic)}
		{/each}
	</fieldset>
</Modal>
