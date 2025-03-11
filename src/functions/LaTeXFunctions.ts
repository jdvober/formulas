export const Tex = (str: String) => {
	return `\\(${str}\\)`
}

export const a__bDIVc = (a: string, b: string, c: string) => {
	a = Tex(a)
	return `${a}${equalSign}${frac(b, c)}`
}

export const a__bc = (a: string, b: string, c: string) => {
	a = Tex(a)
	b = Tex(b)
	c = Tex(c)
	return `${a}${equalSign}${b}${cdot}${c}`
}

export const ab__cd = (a: string, b: string, c: string, d: string) => {
	a = Tex(a)
	b = Tex(b)
	c = Tex(c)
	d = Tex(d)
	return `${a}${cdot}${b}${equalSign}${c}${cdot}${d}`
}

export const frac = (numerator: string, denominator: string) => {
	return `\\(\\frac{${numerator}}{${denominator}}\\)`
}

export const sub = (mainText: string, subscript: string) => {
	return `${mainText}_{${subscript}}`
}

export const equalSign = ` = `
export const cdot = `\\(\\cdot\\)`
