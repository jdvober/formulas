<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import type { Component } from 'svelte';
	import {
		getUseLongValues,
		setUnitInfo,
	} from '../../state/mainState.svelte';
	import Term from '../Term.svelte';

	let {
		a,
		b,
		c,
		variant,
	}: {
		a: TermType | Component;
		b: TermType | Component;
		c: TermType | Component;
		variant: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
	} = $props();
	let v = $state(variant);
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->

{#if v === 'PRIMARY'}
	<math class="FmtA">
		<mrow>
			{#if typeof a === 'object'}
				<mi
					onmouseenter={() => {
						setUnitInfo(a);
					}}
					role="tooltip"
					style:color={a.color}
				>
					<button
						onclick={() => {
							v = 'PRIMARY';
						}}
					>
						{getUseLongValues() === true
							? (a.value.long as string)
							: (a.value.short as string)}</button
					></mi
				>
			{:else}
				<mi
					><button
						onclick={() => {
							console.log(`Clicked ${a}`);
							v = 'PRIMARY';
						}}
					>
						<Term content={a} />
					</button></mi
				>
			{/if}
			<mo>=</mo>
			<mfrac>
				{#if typeof b === 'object'}
					<mi
						onmouseenter={() => {
							setUnitInfo(b);
						}}
						role="tooltip"
						style:color={b.color}
					>
						<button
							onclick={() => {
								v = 'SECONDARY';
							}}
						>
							{getUseLongValues() === true
								? (b.value.long as string)
								: (b.value.short as string)}</button
						></mi
					>
				{:else}
					<mi
						><button
							onclick={() => {
								console.log(`Clicked ${b}`);
								v = 'SECONDARY';
							}}
						>
							<Term content={b} />
						</button></mi
					>
				{/if}
				{#if typeof c === 'object'}
					<mi
						onmouseenter={() => {
							setUnitInfo(c);
						}}
						role="tooltip"
						style:color={c.color}
					>
						<button
							onclick={() => {
								v = 'TERTIARY';
							}}
						>
							{getUseLongValues() === true
								? (c.value.long as string)
								: (c.value.short as string)}</button
						></mi
					>
				{:else}
					<mi
						><button
							onclick={() => {
								console.log(`Clicked ${c}`);
								v = 'TERTIARY';
							}}
						>
							<Term content={c} />
						</button></mi
					>
				{/if}
			</mfrac>
		</mrow>
	</math>
{:else if v === 'SECONDARY'}
	<math class="FmtA">
		<mrow>
			{#if typeof b === 'object'}
				<mi
					onmouseenter={() => {
						setUnitInfo(b);
					}}
					role="tooltip"
					style:color={b.color}
				>
					<button
						onclick={() => {
							v = 'SECONDARY';
						}}
					>
						{getUseLongValues() === true
							? (b.value.long as string)
							: (b.value.short as string)}</button
					></mi
				>
			{:else}
				<mi><Term content={b} /></mi>
			{/if}
			<mo>=</mo>
			{#if typeof a === 'object'}
				<mi
					onmouseenter={() => {
						setUnitInfo(a);
					}}
					role="tooltip"
					style:color={a.color}
				>
					<button
						onclick={() => {
							v = 'PRIMARY';
						}}
					>
						{getUseLongValues() === true
							? (a.value.long as string)
							: (a.value.short as string)}</button
					></mi
				>
			{:else}
				<mi><Term content={a} /></mi>
			{/if}
			<mo>&middot</mo>
			{#if typeof c === 'object'}
				<mi
					onmouseenter={() => {
						setUnitInfo(c);
					}}
					role="tooltip"
					style:color={c.color}
				>
					<button
						onclick={() => {
							v = 'TERTIARY';
						}}
					>
						{getUseLongValues() === true
							? (c.value.long as string)
							: (c.value.short as string)}</button
					></mi
				>
			{:else}
				<mi><Term content={c} /></mi>
			{/if}
		</mrow>
	</math>
{:else}
	<math class="FmtA">
		<mrow>
			{#if typeof c === 'object'}
				<mi
					onmouseenter={() => {
						setUnitInfo(c);
					}}
					role="tooltip"
					style:color={c.color}
				>
					<button
						onclick={() => {
							v = 'TERTIARY';
						}}
					>
						{getUseLongValues() === true
							? (c.value.long as string)
							: (c.value.short as string)}</button
					></mi
				>
			{:else}
				<mi
					><button
						onclick={() => {
							v = 'TERTIARY';
						}}><Term content={c} /></button
					></mi
				>
			{/if}
			<mo>=</mo>
			<mfrac>
				{#if typeof b === 'object'}
					<mi
						onmouseenter={() => {
							setUnitInfo(b);
						}}
						role="tooltip"
						style:color={b.color}
					>
						<button
							onclick={() => {
								v = 'SECONDARY';
							}}
						>
							{getUseLongValues() === true
								? (b.value.long as string)
								: (b.value.short as string)}</button
						></mi
					>
				{:else}
					<mi
						><button
							onclick={() => {
								v = 'SECONDARY';
							}}><Term content={b} /></button
						></mi
					>
				{/if}
				{#if typeof a === 'object'}
					<mi
						onmouseenter={() => {
							setUnitInfo(a);
						}}
						role="tooltip"
						style:color={a.color}
					>
						<button
							onclick={() => {
								v = 'PRIMARY';
							}}
						>
							{getUseLongValues() === true
								? (a.value.long as string)
								: (a.value.short as string)}</button
						></mi
					>
				{:else}
					<mi
						><button
							onclick={() => {
								v = 'PRIMARY';
							}}><Term content={a} /></button
						></mi
					>
				{/if}
			</mfrac>
		</mrow>
	</math>
{/if}

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.FmtA {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		height: auto;
		min-height: 25vh;
		padding: 0.5em;
		border: 1px solid #fafaf2;
		border-radius: 1em;
		min-width: 43vw;
		max-width: 86vw;
		overflow-x: scroll;
		margin-left: auto;
		margin-right: auto;
	}
</style>
