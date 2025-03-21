type Var = { id: string; value: string | number; color: string } // A variable / value used in the formula that is being constructed
type VarList = Var[] // A list of all of the variables / values that are used in the formula that is being constructed
export type TermType = { variableList: VarList; latexString: string } // The list of variables / values in the Term, and it's representation as Latex

// Using Set for unique variables only
export const Div = (a: TermType, b: TermType): TermType => {
	const newVariableList = [...new Set([...a.variableList, ...b.variableList])]
	const latex = `\\frac{${a.latexString}}{${b.latexString}}`
	return { variableList: newVariableList, latexString: latex }
}

export const Mult = (a: TermType, b: TermType): TermType => {
	const newVariableList = [...new Set([...a.variableList, ...b.variableList])]
	const latex = `${a.latexString}~\\boldsymbol{\\cdot}~${b.latexString}`
	return { variableList: newVariableList, latexString: latex }
}

export const Exp = (a: TermType, exponent: number): TermType => {
	const latex = `${a.latexString}^{${exponent}}`
	return { variableList: a.variableList, latexString: latex }
}

export const Sqrt = (a: TermType): TermType => {
	const latex = `\\sqrt{${a.latexString}}`
	return { variableList: a.variableList, latexString: latex }
}

export const Equals = (a: TermType, b: TermType): TermType => {
	const newVariableList = [...new Set([...a.variableList, ...b.variableList])]
	const latex = `${a.latexString} = ${b.latexString}`
	return { variableList: newVariableList, latexString: latex }
}

export const Delta = (a: TermType): TermType => {
	const latex = `\\Delta ${a.latexString}`
	return { variableList: a.variableList, latexString: latex }
}

// (Final - Initial)
export const DeltaExpanded = (a: TermType): TermType => {
	const latex = `(${a.latexString}_{_{final}} - ${a.latexString}_{_{initial}})`
	return { variableList: a.variableList, latexString: latex }
}
