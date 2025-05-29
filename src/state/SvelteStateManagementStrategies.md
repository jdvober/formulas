# State Management in Svelte

## Key rule

Export functions/objects with getters/setters, but never export variables that declare state with $state()

### Examples

#### Option 1

Notice the object inside state, not just `$state(0)`

```javascript
export const value = $state({ val: 0 })
```

##### Consuming the state

```javascript
value.val = 1
```

```javascript
value.val++
```

```javascript
console.log(value.val)
```

### Option 2

```javascript
const val = $state(false)
export const getVal = () => {
	return val
}
export const setVal = (newVal: boolean) => {
	val = newVal
}
```

##### Consuming the state

```javascript
getVal() // returns false
```

```javascript
setVal(true)
```

### Option 3

```javascript
const val = $state(false)
export const value = {
	getVal: () => val,
	setVal: (newVal: typeof val) => {
		val = newVal
	},
```

##### Consuming the state

```javascript
{
	value.getVal()
}
```

```javascript
value.setVal(true)
```

## Using Server Side Code? Read this

<a>https://mainmatter.com/blog/2025/03/11/global-state-in-svelte-5/</a>
