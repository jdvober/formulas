# TODO LIST

1. Be able to hide / filter formulas by topic

# Problems

1. The formulas change size correctly initially, but after you interact with them, the division bars etc. don't change size properly anymore, and stay the same size as if you were using the long words (instead of symbols.)

    a. the Delta ones still work, but they don't change from long to short variables.
    SOLUTION was to use {#key} to make sure they re-render

2. How do I make the state of

```svelte
let variant = $state('PRIMARY')
```

persist after the component is destroyed and recreated due to {#key}?

Using bind:variant and storing the state in the parent, then rerendering the component with the stored state? This is easier if I have a Formula.svelte parent component that switches on Formula Type.
