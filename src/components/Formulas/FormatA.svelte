<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	// Refs for the container and positions of terms
	let mathContainer: HTMLDivElement;

	type VARIATION = 'ALPHA' | 'BETA' | 'GAMMA';
	let variation = $state('ALPHA') as VARIATION;

	let {
		a,
		b,
		c,
	}: {
		a: { value: string | number; sub: string | number };
		b: { value: string | number; sub: string | number };
		c: { value: string | number; sub: string | number };
	} = $props();
</script>

<div
	class="FormulaA container"
	bind:this={mathContainer}
>
	<!--Solving for a-->
	{#if variation === 'ALPHA'}
		<math
			display="block"
			class="formula ALPHA"
		>
			<button
				onclick={() => {
					console.log(`Clicked ${a.value}_${a.sub}`);
					variation = 'ALPHA';
				}}
			>
				<msub>
					<mi class="aText">{a.value}</mi>
					<mn class="aSub">{a.sub}</mn>
				</msub>
			</button>
			<mrow>=</mrow>
			<mfrac>
				<!--Numerator-->
				<mstyle scriptlevel="0">
					<!-- Ensures proper rendering inside button -->
					<button
						onclick={() => {
							console.log(`Clicked ${b.value}_${b.sub}`);
							variation = 'BETA';
						}}
					>
						<msub>
							<mi class="bText">{b.value}</mi>
							<mn class="bSub">{b.sub}</mn>
						</msub>
					</button>
				</mstyle>
				<!--Denominator-->

				<mstyle scriptlevel="0">
					<!-- Ensures proper rendering inside button -->
					<button
						onclick={() => {
							console.log(`Clicked ${c.value}_${c.sub}`);
							variation = 'GAMMA';
						}}
					>
						<msub>
							<mi class="cText">{c.value}</mi>
							<mn class="cSub">{c.sub}</mn>
						</msub>
					</button>
				</mstyle>
			</mfrac>
		</math>
		<!--Solving for b-->
	{:else if variation === 'BETA'}
		<math
			display="block"
			class="formula BETA"
		>
			<button
				onclick={() => {
					console.log(`Clicked ${b.value}_${b.sub}`);
					variation = 'BETA';
				}}
			>
				<msub>
					<mi class="bText">{b.value}</mi>
					<mn class="bSub">{b.sub}</mn>
				</msub>
			</button>
			<mrow>=</mrow>
			<!--Numerator-->

			<button
				onclick={() => {
					console.log(`Clicked ${a.value}_${a.sub}`);
					variation = 'ALPHA';
				}}
			>
				<msub>
					<mi class="aText">{a.value}</mi>
					<mn class="aSub">{a.sub}</mn>
				</msub>
			</button>
			<!--\cdot (dot product)-->
			<mo>&middot</mo>
			<!--Denominator-->

			<button
				onclick={() => {
					console.log(`Clicked ${c.value}_${c.sub}`);
					variation = 'GAMMA';
				}}
			>
				<msub>
					<mi class="cText">{c.value}</mi>
					<mn class="cSub">{c.sub}</mn>
				</msub>
			</button>
		</math>
		<!--Solving for c-->
	{:else}
		<math
			display="block"
			class="formula GAMMA"
		>
			<button
				onclick={() => {
					console.log(`Clicked ${c.value}_${c.sub}`);
					variation = 'GAMMA';
				}}
			>
				<msub>
					<mi class="cText">{c.value}</mi>
					<mn class="cSub">{c.sub}</mn>
				</msub>
			</button>
			<mrow>=</mrow>
			<mfrac>
				<!--Numerator-->
				<mstyle scriptlevel="0">
					<!-- Ensures proper rendering inside button -->
					<button
						onclick={() => {
							console.log(`Clicked ${b.value}_${b.sub}`);
							variation = 'BETA';
						}}
					>
						<msub>
							<mi class="bText">{b.value}</mi>
							<mn class="bSub">{b.sub}</mn>
						</msub>
					</button>
				</mstyle>
				<!--Denominator-->

				<mstyle scriptlevel="0">
					<!-- Ensures proper rendering inside button -->
					<button
						onclick={() => {
							console.log(`Clicked ${a.value}_${a.sub}`);
							variation = 'ALPHA';
						}}
					>
						<msub>
							<mi class="aText">{a.value}</mi>
							<mn class="aSub">{a.sub}</mn>
						</msub>
					</button>
				</mstyle>
			</mfrac>
		</math>
	{/if}
</div>

<style>
	.formula {
		font-size: 2em;
	}

	.aText {
		color: red;
	}
	.aSub {
		color: pink;
	}

	.bText {
		color: blue;
	}
	.bSub {
		color: lightblue;
	}

	.cText {
		color: green;
	}
	.cSub {
		color: lightgreen;
	}
</style>
