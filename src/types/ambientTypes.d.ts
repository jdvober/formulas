/*
Use

declare type TypeName = {
	...etc
}

to have these types be available everywhere in your file.

You can also import the "Type" of a component!
Example:

declare import type FormatA from '/src/components/Formulas/FormatA.svelte'
 *
*/

import type { FormatA as f } from '/src/components/Formulas/FormatA.svelte'

declare interface TermData {
	value: string | number
	color: string
}

declare interface FormatAData {
	term: TermData
	sub: TermData
}

export type FmtA = f

declare type FormatAProp = FormatAData | typeof f
