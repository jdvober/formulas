<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { getUseLongValues } from '../../../state/mainState.svelte';
	import Constant from './Constant.svelte';
	import FmtA from './FmtA.svelte';
	import FmtB from './FmtB.svelte';
	import FmtC from './FmtC.svelte';

	let {
		format,
		initialVariant,
		values,
		subscripts,
		title,
		notes,
		toggleState,
	}: {
		format: 'CONSTANT' | 'A' | 'B' | 'C';
		initialVariant: 'DEFAULT' | 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
		values: { a: any; b?: any; c?: any; d?: any; coefficient?: any };
		subscripts: SubS;
		title?: string;
		notes?: string;
		toggleState?: {
			getName: () => string;
			isToggled: () => boolean;
			toggle: () => boolean;
		};
	} = $props();
	let variant = $state(initialVariant);
	let showAll = $state(false);
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<!--TODO: Make it so when you hover over Delta character, it explains what Delta means-->
<div
	class="FormulaContainer"
	style:margin-left={getUseLongValues() === true ? 0 : '1vw'}
	style:margin-right={getUseLongValues() === true ? 0 : '1vw'}
>
	<div class="header">
		<div class="spacer"></div>
		{#if title !== undefined}
			<div class="title-container"><u class="title">{title}</u></div>
		{:else}
			<div class="title-container"><div class="title"></div></div>
		{/if}
		{#if toggleState !== undefined}
			<button
				class="toggle-state-btn"
				onclick={toggleState.toggle}
				>{toggleState.isToggled() === true ? 'Hide' : 'Show'}</button
			>
		{/if}
		<button
			class="showAllBtn"
			onclick={() => {
				showAll = showAll === false ? true : false;
			}}>Show All Formulas</button
		>
	</div>
	<div class="Formula">
		{#if format === 'A'}
			<!-- wrapping the component in a {#key getUseLongValues()} makes sure the component is destroyed and re-rendered when the variant changes! -->
			{#key getUseLongValues()}
				<FmtA
					a={values.a}
					b={values.b}
					c={values.c}
					subscripts={{
						a: subscripts.a,
						b: subscripts.b,
						c: subscripts.c,
					}}
					{variant}
					{showAll}
				/>
			{/key}
		{:else if format === 'B'}
			<!-- wrapping the component in a {#key getUseLongValues()} makes sure the component is destroyed and re-rendered when the variant changes! -->
			{#key getUseLongValues()}
				<FmtB
					a={values.a}
					b={values.b}
					c={values.c}
					d={values.d}
					subscripts={{
						a: subscripts.a,
						b: subscripts.b !== undefined ? subscripts.b : '',
						c: subscripts.c !== undefined ? subscripts.c : '',
						d: subscripts.d !== undefined ? subscripts.d : '',
					}}
					{variant}
					{showAll}
				/>
			{/key}
		{:else if format === 'C'}
			<!-- wrapping the component in a {#key getUseLongValues()} makes sure the component is destroyed and re-rendered when the variant changes! -->
			{#key getUseLongValues()}
				<FmtC
					a={values.a}
					b={values.b}
					c={values.c}
					d={values.d}
					coefficient={values.coefficient}
					subscripts={{
						a: subscripts.a,
						b: subscripts.b,
						c: subscripts.c,
						d: subscripts.d !== undefined ? subscripts.d : '',
						e: subscripts.e !== undefined ? subscripts.e : '',
					}}
					{variant}
					{showAll}
				/>
			{/key}
		{:else if (format = 'CONSTANT')}
			{#key getUseLongValues()}
				<Constant
					base={values.a}
					subscript={subscripts.a}
				/>
			{/key}
		{/if}
		{#if notes !== undefined}
			<div class="notes">{notes}</div>
		{/if}
	</div>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.FormulaContainer {
		min-height: 25vh;
		padding: 0.5vw;
		padding-left: 0.75vw;
		padding-right: 0.75vw;
		border: 1px solid #fafaf2;
		border-radius: 1em;
		min-width: 43vw;
		max-width: 90vw;
		overflow-x: auto;
	}

	.header {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 1em;
	}
	.spacer {
		width: 22%;
	}
	.title-container {
		width: 56%;
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.title {
		font-size: 1.5em;
		margin-left: auto;
		margin-right: auto;
		color: white;
	}

	.toggle-state-btn {
		width: 88%;
		margin-right: auto;
	}

	.showAllBtn {
		margin-left: auto;
		width: 22%;
		min-width: 9vw;
		color: #f8f8f2;
	}

	.Formula {
		height: auto;
	}

	.notes {
		align-self: center;
		justify-self: flex-end;
		margin-top: 1em;
		font-size: 1.5em;
	}
</style>
