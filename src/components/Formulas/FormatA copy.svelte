<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	// Refs for the container and positions of terms

	import type { TermData } from '../../types/ambientTypes';
	type VARIATION = 'ALPHA' | 'BETA' | 'GAMMA';
	let variation = $state('ALPHA') as VARIATION;

	let {
		a,
		b,
		c,
	}: {
		a: TermData;
		b: TermData;
		c: TermData;
	} = $props();
</script>

<div class="FormulaA mathContainer">
	<!--Solving for a-->
	{#if variation === 'ALPHA'}
		<math class="formula ALPHA">
			<button
				onclick={() => {
					variation = 'ALPHA';
				}}
			>
				<msub>
					<mi
						class="aTerm"
						style="--term-color: {a.term
							.color}; color: var(--term-color);"
						>{a.term.value}</mi
					>
					<mi
						class="bSub"
						style="--sub-color: {a.sub
							.color}; color:var(--sub-color);">{a.sub.value}</mi
					>
				</msub>
			</button>
			<mrow class="equalsSign">=</mrow>
			<mfrac>
				<!--Numerator-->
				<mstyle scriptlevel="0">
					<!-- Ensures proper rendering inside button -->
					<button
						onclick={() => {
							variation = 'BETA';
						}}
					>
						<msub>
							<mi
								class="bTerm"
								style="--term-color: {b.term
									.color}; color:var(--term-color);"
								>{b.term.value}</mi
							>
							<mi
								class="bSub"
								style="--sub-color: {b.sub
									.color}; color:var(--sub-color);"
								>{b.sub.value}</mi
							>
						</msub>
					</button>
				</mstyle>
				<!--Denominator-->

				<mstyle scriptlevel="0">
					<!-- Ensures proper rendering inside button -->
					<button
						onclick={() => {
							variation = 'GAMMA';
						}}
					>
						<msub>
							<mi
								class="cTerm"
								style="--term-color: {c.term
									.color}; color:var(--term-color);"
								>{c.term.value}</mi
							>
							<mi
								class="cSub"
								style="--sub-color: {c.sub
									.color}; color:var(--sub-color);"
								>{c.sub.value}</mi
							>
						</msub>
					</button>
				</mstyle>
			</mfrac>
		</math>
		<!--Solving for b-->
	{:else if variation === 'BETA'}
		<math class="formula BETA">
			<button
				onclick={() => {
					variation = 'BETA';
				}}
			>
				<msub>
					<mi
						class="bTerm"
						style="--term-color: {b.term
							.color}; color:var(--term-color);"
						>{b.term.value}</mi
					>
					<mi
						class="bSub"
						style="--sub-color: {b.sub
							.color}; color:var(--sub-color);">{b.sub.value}</mi
					>
				</msub>
			</button>
			<mrow class="equalsSign">=</mrow>
			<!--Numerator-->

			<button
				onclick={() => {
					variation = 'ALPHA';
				}}
			>
				<msub>
					<mi
						class="aTerm"
						style="--term-color: {a.term
							.color}; color: var(--term-color);"
						>{a.term.value}</mi
					>
					<mi
						class="aSub"
						style="--sub-color: {a.sub
							.color}; color:var(--sub-color);">{a.sub.value}</mi
					>
				</msub>
			</button>
			<!--\cdot (dot product)-->
			<!--<mo class="cdot">×</mo>-->
			<mo class="cdot">&middot</mo>
			<!--<mo class="cdot">•</mo>-->
			<!--Denominator-->

			<button
				onclick={() => {
					variation = 'GAMMA';
				}}
			>
				<msub>
					<mi
						class="cTerm"
						style="--term-color: {c.term
							.color}; color:var(--term-color);"
						>{c.term.value}</mi
					>
					<mi
						class="cSub"
						style="--sub-color: {c.sub
							.color}; color:var(--sub-color);">{c.sub.value}</mi
					>
				</msub>
			</button>
		</math>
		<!--Solving for c-->
	{:else}
		<math class="formula GAMMA">
			<button
				onclick={() => {
					variation = 'GAMMA';
				}}
			>
				<msub>
					<mi
						class="cTerm"
						style="--term-color: {c.term
							.color}; color:var(--term-color);"
						>{c.term.value}</mi
					>
					<mi
						class="cSub"
						style="--sub-color: {c.sub
							.color}; color:var(--sub-color);">{c.sub.value}</mi
					>
				</msub>
			</button>
			<mrow class="equalsSign">=</mrow>
			<mfrac>
				<!--Numerator-->
				<mstyle scriptlevel="0">
					<!-- Ensures proper rendering inside button -->
					<button
						onclick={() => {
							variation = 'BETA';
						}}
					>
						<msub>
							<mi
								class="bTerm"
								style="--term-color: {b.term
									.color}; color:var(--term-color);"
								>{b.term.value}</mi
							>
							<mi
								class="bSub"
								style="--sub-color: {b.sub
									.color}; color:var(--sub-color);"
								>{b.sub.value}</mi
							>
						</msub>
					</button>
				</mstyle>
				<!--Denominator-->

				<mstyle scriptlevel="0">
					<!-- Ensures proper rendering inside button -->
					<button
						onclick={() => {
							variation = 'ALPHA';
						}}
					>
						<msub>
							<mi
								class="aTerm"
								style="--term-color: {a.term
									.color}; color: var(--term-color);"
								>{a.term.value}</mi
							>
							<mi
								class="aSub"
								style="--sub-color: {a.sub
									.color}; color:var(--sub-color);"
								>{a.sub.value}</mi
							>
						</msub>
					</button>
				</mstyle>
			</mfrac>
		</math>
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
</style>
