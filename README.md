## sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Sass

`choco install sass`
(faster)

or

``npm i -g --dev sass`
(slower, portable)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Components

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## State

### Exporting state from a .svelte file.

In StateSupplier.svelte (your .svelte file exporting the state):

```svelte

<script context="module">
  import { $state } from 'svelte';

  // Create and export the reactive state
  export const count = $state(0);
</script>

<!-- Optional: Add component markup if needed -->
<div>Current count: {count}</div>
```

StateConsumer.svelte (imports and uses the state):

```svelte

<script>
  import { count } from './SharedState.svelte';
</script>

<button on:click={() => count++}>
Increment (from A): {count}
</button>

ComponentB.svelte (also imports the same state):
svelte

<script>
  import { count } from './SharedState.svelte';
</script>

<button on:click={() => count--}>
Decrement (from B): {count}
</button>
```

Key Points

-   Shared State: The count variable is reactive and shared across all components importing it. Changes in one component will reflect everywhere.

-   No Stores Needed: Unlike Svelte 4, you don’t need writable stores; $state in a module script provides global reactivity.

-   Module Script: The `<script context="module">` block runs once when the component is first imported, creating a singleton state.

-This approach leverages Svelte 5's reactivity system to create a globally shared state directly from a .svelte file.

## Universal State

By default, I use the mainState.svelte.ts file

You should export functions or objects with getters/setters, but never export variables that declare state with $state()

Example:

mainState.svelte.ts

```svelte

let val = $state(false)

// Option 1

export let getVal = () => {
	return val
}
export let setVal = (newVal: boolean) => {
	val = newVal
}


// Option 2

export let value = {
	getState: () => val,
	setState: (newValue: typeof val) => {
		val === newValue
	},
}

```

## Attributions

Periodic Table Info from:
<https://github.com/Bowserinator/Periodic-Table-JSON>
