<script>
	let { width, height, fillColor = 'currentColor' } = $props();
</script>

<!--From:-->
<!--https://icon-sets.iconify.design/fa-regular/-->
<svg
	xmlns="http://www.w3.org/2000/svg"
	{width}
	{height}
	viewBox="0 0 512 512"
	class="svg"
>
	<path
		fill={fillColor}
		d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200m101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2l-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2l62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17"
	/>
</svg>

<style>
	.svg {
		margin-bottom: 2vmin;
		margin-left: 2vmin;
		margin-right: 2vmin;
	}
</style>
