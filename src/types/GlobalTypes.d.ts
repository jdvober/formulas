/*

Put Global Types you want to be available everywhere in this file.  Do not export these types.  Included in the tsconfig.json "include" is a wildcard to pick up any *.d.ts files

type Compound = {
}

*/

type Result = { type: 'ok'; data: Data } | { type: 'error'; error: Error }
type Data = { type: 'text'; content: string } | { type: 'img'; src: string }

type FormatID = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'

type Format =
	| {
			id: 'A'
			variables: Variable[]
			variations: [
				// Variation 1
				`$${a}=\\frac{${b}}{${c}}$`,

				// Variation 2
				`$${c}=\\frac{${b}}{${a}}$`,

				// Variation 3
				`$${b}=${a}\\cdot${c}$`,
			]
	  }
	| {
			id: 'B'
			variables: Variable[]
			variations: string[]
	  }
	| {
			id: 'C'
			variables: Variable[]
			variations: string[]
	  }
	| {
			id: 'D'
			variables: Variable[]
			variations: string[]
	  }
	| {
			id: 'E'
			variables: Variable[]
			variations: string[]
	  }
	| {
			id: 'F'
			variables: Variable[]
			variations: string[]
	  }
	| {
			id: 'G'
			variables: Variable[]
			variations: string[]
	  }

type VariableColor =
	| '#fe6a00'
	| '#FF5555'
	| '#FF79C6'
	| '#FFB86C'
	| '#F1FA8C'
	| '#D7AF00'
	| '#CAFC03'
	| '#50FA7B'
	| '#527CFA'
	| '#8BE9FD'
	| '#BD93F9'
	| '#B7A48A'
	| '#FF8787'
	| '#F40000'
	| '#EC8DC3'
	| '#FF0F97'
	| '#FFCC95'
	| '#FF8604'
	| '#E3EA9A'
	| '#E4F61F'
	| '#FFD82C'
	| '#997D00'
	| '#D9FD4B'
	| '#91B402'
	| '#6AE288'
	| '#07E63F'
	| '#6A88E2'
	| '#073FE6'
	| '#9CDEED'
	| '#1DD3FC'
	| '#D1B3FB'
	| '#7D2AF3'
	| '#CCBEAB'
	| '#8E7757'

type Variable = {
	symbol: { short: string; long: string }
	units: { symbol: string; name: string }[]
	color: VariableColor
	subscript: string
}

type Topic = {
	title: string
	formulas: Formula[]
}

type Formula = {
	name: string
	id: string
	format: FormatID
	variables: Variable[]
}

type DeltaSubscript =
	| 'NUMERICAL'
	| 'NUMERICAL_ZERO_BASED'
	| 'INITIAL_FINAL'
	| 'BEGINNING_END'
	| 'STARTING_ENDING'
