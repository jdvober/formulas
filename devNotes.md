# TODO LIST

1. Be able to hide / filter formulas by topic
2. Have a ? button that explains how everything works.

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

body {

    background: radial-gradient(
    	circle at 50% 100%,
    	/* Position gradient center at bottom (100%) and center (50%) */
    		rgba(40, 42, 54, 1) 0%,
    	/* Start color: #282a36 */ rgba(12, 0, 32, 1) 100%
    		/* End color: #0c0020 */
    );
    background-attachment: fixed; /* Optional: Fix gradient relative to viewport */
    background-repeat: no-repeat; /* Prevent repeating */
    min-height: 100vh; /* Ensure gradient covers full viewport height */

}
