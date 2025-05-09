<script lang="ts">
	import GlowButton from '@/components/ui/button/GlowButton.svelte';
	import { findNestedObjectValueById } from '../../functions/FindNestedObjectValueById.ts';
	import { updateNestedObjectById } from '../../functions/UpdateNestedObjectById.ts';
	import {
		getTopicsToggleStates,
		psTopics,
		setTopicsToggleStates,
	} from './../../state/mainState.svelte.ts';
	import Modal from './FilterByTopicModal.svelte';
	import { getNameById } from './GetNameById.ts';

	let showModal = $state(false);
	let checkboxState = $state(true);

	// Searches for the key with id that is passed in, and toggles the checkbox state.
	let toggleState = (id: string) => {
		let newTopicsToggleStates = getTopicsToggleStates();
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
		setTopicsToggleStates(newTopicsToggleStates);
	};
</script>

{#snippet makeCheckbox(id: string)}
	<label class="label">
		<input
			type="checkbox"
			checked={checkboxState}
			class="checkbox"
			onchange={() => {
				toggleState(id);
			}}
		/>
		<div style:margin-right={'5vmin'}>
			{getNameById(getTopicsToggleStates(), id)}
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
		<legend class="fieldset-legend"
			>{getNameById(getTopicsToggleStates(), 'Chemistry_PS')}</legend
		>
		{#each psTopics as topic}
			{console.log(topic)}
			{@render makeCheckbox(topic)}
		{/each}
	</fieldset>
</Modal>
