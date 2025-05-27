<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import type { Component } from 'svelte';
	import Term from '../Term.svelte';
	import { fade } from 'svelte/transition';
	import { whoosh } from '../../../functions/animations/svelteTransitions.svelte';

	let {
		a,
		b,
		c,
		d,
		subscripts,
		variant = 'DEFAULT',
		showAll = false,
	}: {
		a: TermType | Component;
		b: TermType | Component;
		c: TermType | Component;
		d: TermType | Component;
		subscripts: {
			a: string | number;
			b: string | number;
			c: string | number;
			d: string | number;
		};
		showAll: boolean;
		variant:
			| 'DEFAULT'
			| 'PRIMARY'
			| 'SECONDARY'
			| 'TERTIARY'
			| 'QUARTENARY';
	} = $props();
	let v = $state(variant);
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->

{#snippet A()}
	<Term
		content={a}
		subscript={subscripts.a}
		color="black"
	/>
{/snippet}

{#snippet B()}
	<Term
		content={b}
		subscript={subscripts.b}
		color="black"
	/>
{/snippet}

{#snippet C()}
	<Term
		content={c}
		subscript={subscripts.c}
		color="black"
	/>
{/snippet}

{#snippet D()}
	<Term
		content={d}
		subscript={subscripts.d}
		color="black"
	/>
{/snippet}

{#if showAll === true}
	<div
		in:whoosh={{ delay: 0, duration: 200 }}
		out:fade={{ duration: 0 }}
	>
		<div
			style:margin-top={'1vh'}
			style:margin-bottom={'1vh'}
		>
			<math>
				<mrow>
					<msub>{@render A()}</msub>
					<mo>&middot</mo>
					<msub>{@render B()}</msub>
					<mo>=</mo>
					<msub>{@render C()}</msub>
					<mo>&middot</mo>
					<msub>{@render D()}</msub>
				</mrow>
			</math>
		</div>
		<div
			style:margin-top={'1vh'}
			style:margin-bottom={'1vh'}
		>
			<math>
				<mrow>
					<mi>{@render B()}</mi>
					<mo>=</mo>
					<mfrac>
						<mrow>
							<mi>{@render C()}</mi>
							<mo>&middot</mo>
							<mi>{@render D()}</mi>
						</mrow>
						<mrow>
							<ms>{@render A()}</ms>
						</mrow>
					</mfrac>
				</mrow>
			</math>
		</div>
		<div
			style:margin-top={'1vh'}
			style:margin-bottom={'1vh'}
		>
			<math>
				<mrow>
					<mi>{@render C()}</mi>
					<mo>=</mo>
					<mfrac>
						<mrow>
							<mi>{@render A()}</mi>
							<mo>&middot</mo>
							<mi>{@render B()}</mi>
						</mrow>
						<mrow>
							<ms>{@render D()}</ms>
						</mrow>
					</mfrac>
				</mrow>
			</math>
		</div>
		<div
			style:margin-top={'1vh'}
			style:margin-bottom={'1vh'}
		>
			<math>
				<mrow>
					<mi>{@render D()}</mi>
					<mo>=</mo>
					<mfrac>
						<mrow>
							<mi>{@render A()}</mi>
							<mo>&middot</mo>
							<mi>{@render B()}</mi>
						</mrow>
						<mrow>
							<ms>{@render C()}</ms>
						</mrow>
					</mfrac>
				</mrow>
			</math>
		</div>
	</div>
{:else if v === 'DEFAULT' || v === 'PRIMARY'}
	<!--ab=cd-->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->

	<math>
		<mrow>
			<msub
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'PRIMARY';
				}}>{@render A()}</msub
			>
			<mo>&middot</mo>
			<msub
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'SECONDARY';
				}}>{@render B()}</msub
			>
			<mo
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}>=</mo
			>
			<msub
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'TERTIARY';
				}}>{@render C()}</msub
			>
			<mo
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}>&middot</mo
			>
			<msub
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'QUARTENARY';
				}}>{@render D()}</msub
			>
		</mrow>
	</math>
{:else if v === 'SECONDARY'}
	<!--b=cd/a-->
	<math>
		<mrow>
			<mi
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'SECONDARY';
				}}>{@render B()}</mi
			>
			<mo
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}>=</mo
			>
			<mfrac>
				<mrow>
					<mi
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'TERTIARY';
						}}>{@render C()}</mi
					>
					<mo
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}>&middot</mo
					>
					<mi
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'QUARTENARY';
						}}>{@render D()}</mi
					>
				</mrow>
				<mrow>
					<ms
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'PRIMARY';
						}}>{@render A()}</ms
					>
				</mrow>
			</mfrac>
		</mrow>
	</math>
{:else if v === 'TERTIARY'}
	<!--c=ab/d-->
	<math>
		<mrow>
			<mi
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'TERTIARY';
				}}>{@render C()}</mi
			>
			<mo
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}>=</mo
			>
			<mfrac>
				<mrow>
					<mi
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'PRIMARY';
						}}>{@render A()}</mi
					>
					<mo
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}>&middot</mo
					>
					<mi
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'SECONDARY';
						}}>{@render B()}</mi
					>
				</mrow>
				<mrow>
					<ms
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'QUARTENARY';
						}}>{@render D()}</ms
					>
				</mrow>
			</mfrac>
		</mrow>
	</math>
{:else}
	<!--d=ab/c-->
	<math>
		<mrow>
			<mi
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'QUARTENARY';
				}}>{@render D()}</mi
			>
			<mo
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}>=</mo
			>
			<mfrac>
				<mrow>
					<mi
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'PRIMARY';
						}}>{@render A()}</mi
					>
					<mo
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}>&middot</mo
					>
					<mi
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'SECONDARY';
						}}>{@render B()}</mi
					>
				</mrow>
				<mrow>
					<ms
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'TERTIARY';
						}}>{@render C()}</ms
					>
				</mrow>
			</mfrac>
		</mrow>
	</math>
{/if}

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	math {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
	}
</style>
