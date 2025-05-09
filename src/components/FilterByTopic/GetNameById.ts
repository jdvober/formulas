export let getNameById = (obj: any, targetId: string | number) => {
	// Check if the current object is the one we're looking for
	if (obj.id === targetId) {
		return obj['name'] as string
	}

	// Recursively search through object properties or array elements
	for (const key in obj) {
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			const found = getNameById(obj[key], targetId) as string
			if (found) return found
		}
	}
	let first = targetId.toString().slice(0, 1)
	let rest = targetId.toString().slice(1).endsWith('_PS')
		? targetId.toString().slice(1, -3)
		: targetId.toString().slice(1)
	return `${first.toUpperCase()}${rest}`
}
