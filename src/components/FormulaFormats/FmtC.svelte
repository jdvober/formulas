<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import type { Component } from 'svelte';
	import Term from '../Term.svelte';

	let {
		a,
		b,
		c,
		d,
		coefficient,
		subscripts,
		showAll = false,
		variant = 'DEFAULT',
	}: {
		a: TermType | Component;
		b: TermType | Component;
		c: TermType | Component;
		d: TermType | Component;
		coefficient?: TermType | Component;
		subscripts: SubS;
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
	/>
{/snippet}

{#snippet B()}
	<Term
		content={b}
		subscript={subscripts.b}
	/>
{/snippet}

{#snippet C()}
	<Term
		content={c}
		subscript={subscripts.c}
	/>
{/snippet}

{#snippet D()}
	<Term
		content={d}
		subscript={subscripts.d}
	/>
{/snippet}

{#snippet Coefficient()}
	{#if coefficient !== undefined}
		<Term
			content={coefficient}
			subscript={subscripts.e}
		/>
	{:else}
		<div></div>
	{/if}
{/snippet}

{#if showAll === true}
	{#if coefficient === undefined}
		<div>
			<div
				style:margin-top={'1vh'}
				style:margin-bottom={'1vh'}
			>
				<math>
					<mrow>
						<msub>{@render A()}</msub>
						<mo>=</mo>
						<msub>{@render B()}</msub>
						<mo>&middot</mo>
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
								<mi>{@render A()}</mi>
							</mrow>
							<mrow>
								<ms>{@render C()}</ms>
								<mo>&middot</mo>
								<mi>{@render D()}</mi>
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
							</mrow>
							<mrow>
								<ms>{@render B()}</ms>
								<mo>&middot</mo>
								<mi>{@render D()}</mi>
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
							</mrow>
							<mrow>
								<ms>{@render B()}</ms>
								<mo>&middot</mo>
								<mi>{@render C()}</mi>
							</mrow>
						</mfrac>
					</mrow>
				</math>
			</div>
		</div>
	{:else}
		<!--special case for formula with fraction (kinetic energy)-->
		<div>
			<div
				style:margin-top={'1vh'}
				style:margin-bottom={'1vh'}
			>
				<math>
					<mrow>
						<msub>{@render A()}</msub>
						<mo>=</mo>
						<msub>{@render B()}</msub>
						<mo>&middot</mo>
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
						<mi>{@render C()}</mi>
						<mo>=</mo>
						<mfrac>
							<mrow>
								<mi>{@render A()}</mi>
							</mrow>
							<mrow>
								<mn style:font-size={'1.5em'}>{2}</mn>
								<mo>&middot</mo>
								<mi>{@render D()}</mi>
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
						<mi>{@render Coefficient()}</mi>
						<mo>=</mo>
						<mrow>
							<msqrt>
								<mrow>
									<mfrac>
										<mrow>
											<mi>{@render A()}</mi>
										</mrow>
										<mrow>
											<mn style:font-size={'1.5em'}
												>{2}</mn
											>
											<mo>&middot</mo>
											<mi>{@render C()}</mi>
										</mrow>
									</mfrac>
								</mrow>
							</msqrt>
						</mrow>
					</mrow></math
				>
			</div>
		</div>
	{/if}
{:else if v === 'DEFAULT' || v === 'PRIMARY'}
	<!--a=bcd-->
	<math>
		<mrow>
			<msub
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'PRIMARY';
				}}>{@render A()}</msub
			>
			<mo>=</mo>
			<msub
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'SECONDARY';
				}}>{@render B()}</msub
			>

			<mo>&middot</mo>
			<msub
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'TERTIARY';
				}}>{@render C()}</msub
			>

			<mo>&middot</mo>
			<mi
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'QUARTENARY';
				}}>{@render D()}</mi
			>
		</mrow>
	</math>
{:else if v === 'SECONDARY'}
	<!--b=a/cd-->
	<math>
		<mrow>
			<ms
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'SECONDARY';
				}}>{@render B()}</ms
			>

			<mo>=</mo>
			<mfrac>
				<mrow>
					<mi
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'PRIMARY';
						}}>{@render A()}</mi
					>
				</mrow>
				<mrow>
					<ms
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'TERTIARY';
						}}>{@render C()}</ms
					>
					<mo>&middot</mo>
					<mi
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'QUARTENARY';
						}}>{@render D()}</mi
					>
				</mrow>
			</mfrac>
		</mrow>
	</math>
{:else if v === 'TERTIARY'}
	<!--c=a/bd-->
	<math>
		<mrow>
			<mi
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'TERTIARY';
				}}>{@render C()}</mi
			>
			<mo>=</mo>
			<mfrac>
				<mrow>
					<mi
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'PRIMARY';
						}}>{@render A()}</mi
					>
				</mrow>
				<mrow>
					<ms
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'SECONDARY';
						}}>{@render B()}</ms
					>

					<mo>&middot</mo>
					<mi
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'QUARTENARY';
						}}>{@render D()}</mi
					>
				</mrow>
			</mfrac>
		</mrow>
	</math>
{:else if v === 'QUARTENARY'}
	<!--d=a/bc-->
	<math>
		<mrow>
			<mi
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'QUARTENARY';
				}}>{@render D()}</mi
			>
			<mo>=</mo>
			<mfrac>
				<mrow>
					<mi
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'PRIMARY';
						}}>{@render A()}</mi
					>
				</mrow>
				<mrow>
					<ms
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'SECONDARY';
						}}>{@render B()}</ms
					>

					<mo>&middot</mo>
					<mi
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'TERTIARY';
						}}>{@render C()}</mi
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
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'QUARTENARY';
				}}>{@render D()}</mi
			>
			<mo>=</mo>
			<mfrac>
				<mrow>
					<mi
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'PRIMARY';
						}}>{@render A()}</mi
					>
				</mrow>
				<mrow>
					<ms
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'SECONDARY';
						}}>{@render B()}</ms
					>
					<mo>&middot</mo>
					<mi
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'TERTIARY';
						}}>{@render C()}</mi
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
