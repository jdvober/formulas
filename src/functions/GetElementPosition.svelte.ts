// Provide an HTML Element on the page, and it will return the coordinates of the top left corner, the width and the height.
export let getElementPos = (elem: HTMLElement | null) => {
	// Return early if no element is found, with a value of { x: 0, y: 0, w: 0, h: 0 } so at least it isn't null
	if (elem === null) {
		return { x: 0, y: 0, w: 0, h: 0 }
	}
	const rect = elem.getBoundingClientRect()

	return { x: rect.left, y: rect.top, w: rect.width, h: rect.height }
}
