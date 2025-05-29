<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { Popover, Modal, Button } from 'flowbite-svelte';
	import { infoBox } from '../../../state/periodicTableState.svelte';
	import { slide } from 'svelte/transition';

	let defaultModal = $state(false);
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div
	class="InfoBox"
	style:background={infoBox.info.background}
	style:color={infoBox.info.color}
	style:border={`3px solid ${infoBox.info.color}`}
>
	<!--// Don't display if the default is selected (atomic number 0)-->
	{#if infoBox.info.number > 0}
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<div class="name">{infoBox.info.name}</div>
		<div
			class="symbol"
			style:border={`2px solid ${infoBox.info.color}`}
			style:color={infoBox.info.color}
		>
			{infoBox.info.symbol}
		</div>

		<img
			class="preview-img"
			id="preview-bohr"
			src={infoBox.info.bohrModelImage}
			alt={`Bohr model of ${infoBox.info.name}`}
		/>
		<div><em><b>Atomic Number:</b></em> {infoBox.info.number}</div>
		<div><em><b>Mass:</b></em> {infoBox.info.atomicMass} a.m.u.</div>
		<div>
			<em><b>Category:</b></em>
			{infoBox.info.category
				.slice(0, 1)
				.toUpperCase()}{infoBox.info.category.slice(1)}
		</div>
		<span class="description"
			><em><u><b>Description:</b></u></em> {infoBox.info.summary}</span
		><Button
			onclick={() => (defaultModal = true)}
			class="btn rounded-box mt-auto">Default modal</Button
		>
	{/if}
</div>

<!--Zoomed in Bohr Model when hovering-->
<Popover
	triggeredBy="#preview-bohr"
	class="w-96 text-sm font-light"
	defaultClass="p-0"
	placement="right"
	transition={slide}
>
	<img
		class="zoomed-img"
		src={infoBox.info.bohrModelImage}
		alt={`Bohr model of ${infoBox.info.name}`}
	/>
</Popover>

<!--Advanced Information Modal-->
<Modal
	title="Terms of Service"
	bind:open={defaultModal}
	autoclose
>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		With less than a month to go before the European Union enacts new
		consumer privacy laws for its citizens, companies around the world are
		updating their terms of service agreements to comply.
	</p>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		The European Union’s General Data Protection Regulation (G.D.P.R.) goes
		into effect on May 25 and is meant to ensure a common set of data rights
		in the European Union. It requires organizations to notify users as soon
		as possible of high-risk data breaches that could personally affect
		them.
	</p>

	{#snippet footer()}
		<Button onclick={() => alert('Handle "success"')}>I accept</Button>
		<Button color="alternative">Decline</Button>
	{/snippet}
</Modal>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.InfoBox {
		position: absolute;
		top: 7vh;
		left: 1vw;
		border-radius: 1.5vmin;
		width: 23vw;
		height: 90vh;
		display: flex;
		flex-direction: column;
		padding: 1vmin;
		overflow-y: auto;
		overflow-x: hidden;
	}
	.name {
		justify-self: center;
		align-self: center;
		font-size: 2em;
	}
	.symbol {
		justify-self: center;
		align-self: center;
		font-size: 2em;
		border-radius: 0.25em;
		width: 1.5em;
		height: 1.5em;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.description {
		display: flex;
		flex-direction: column;
	}

	.preview-img {
		margin: 0.5em;
		width: 30%;
		justify-self: center;
		align-self: center;
		border-radius: 1.5em;
		-webkit-filter: invert(1);
		filter: invert(1);
	}

	.zoomed-img {
		margin: 0.5em;
		height: 95vmin;
		justify-self: center;
		align-self: center;
		border-radius: 1.5em;
		-webkit-filter: invert(1);
		filter: invert(1);
	}

	.mod {
		border: 1px solid red;
	}
</style>
