<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { FormatAProp } from '../../types/ambientTypes';
	import TermSub from './TermSub.svelte';
	type VARIATION = 'ALPHA' | 'BETA' | 'GAMMA';

	let variation = $state('ALPHA') as VARIATION;

	let {
		a,
		b,
		c,
	}: {
		a: FormatAProp;
		b: FormatAProp;
		c: FormatAProp;
	} = $props();

	// Helper function to check if a prop is a FormatA component
	function isComponent(prop: FormatAProp): prop is typeof SvelteComponent {
		return prop && (prop as any).$$typeof === 'svelte';
	}
</script>

<div class="mathContainer">
	{#if isComponent(a) || isComponent(b) || isComponent(c)}
		{#if a}{@render a()}{/if}
		{#if b}{@render b()}{/if}
		{#if c}{@render c()}{/if}
	{:else}
		<!--Solving for a-->
		{#if variation === 'ALPHA'}
			<math class=" ALPHA">
				<button onclick={() => (variation = 'ALPHA')}>
					<TermSub
						term={a.term}
						sub={a.sub}
						className="a"
					/>
				</button>
				<mrow class="equalsSign">=</mrow>
				<mfrac>
					<!--Numerator-->
					<mstyle scriptlevel="0">
						<button onclick={() => (variation = 'BETA')}>
							<TermSub
								term={b.term}
								sub={b.sub}
								className="b"
							/>
						</button>
					</mstyle>
					<!--Denominator-->
					<mstyle scriptlevel="0">
						<button onclick={() => (variation = 'GAMMA')}>
							<TermSub
								term={c.term}
								sub={c.sub}
								className="c"
							/>
						</button>
					</mstyle>
				</mfrac>
			</math>

			<!--Solving for b-->
		{:else if variation === 'BETA'}
			<math class=" BETA">
				<button onclick={() => (variation = 'BETA')}>
					<TermSub
						term={b.term}
						sub={b.sub}
						className="b"
					/>
				</button>
				<mrow class="equalsSign">=</mrow>
				<button onclick={() => (variation = 'ALPHA')}>
					<TermSub
						term={a.term}
						sub={a.sub}
						className="a"
					/>
				</button>
				<mo class="cdot">&middot;</mo>
				<button onclick={() => (variation = 'GAMMA')}>
					<TermSub
						term={c.term}
						sub={c.sub}
						className="c"
					/>
				</button>
			</math>

			<!--Solving for c-->
		{:else}
			<math class=" GAMMA">
				<button onclick={() => (variation = 'GAMMA')}>
					<TermSub
						term={c.term}
						sub={c.sub}
						className="c"
					/>
				</button>
				<mrow class="equalsSign">=</mrow>
				<mfrac>
					<!--Numerator-->
					<mstyle scriptlevel="0">
						<button onclick={() => (variation = 'BETA')}>
							<TermSub
								term={b.term}
								sub={b.sub}
								className="b"
							/>
						</button>
					</mstyle>
					<!--Denominator-->
					<mstyle scriptlevel="0">
						<button onclick={() => (variation = 'ALPHA')}>
							<TermSub
								term={a.term}
								sub={a.sub}
								className="a"
							/>
						</button>
					</mstyle>
				</mfrac>
			</math>
		{/if}
	{/if}
</div>

<style>
	.mathContainer {
		font-size: 2em;
		user-select: none;
		border: 2px solid orange;
		display: flex;
		max-width: 25vw;
		height: 4em;
		align-items: center;
		justify-content: center;
	}

	button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
	}

	.equalsSign {
		padding: 0 0.5rem;
	}

	.cdot {
		padding: 0 0.5rem;
	}
</style>
