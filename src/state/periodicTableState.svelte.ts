/*
See ./SvelteStateManagementStrategies.md for different ways to manage state in Svelte.
*/
import { defaultElementInfo } from '../components/PeriodicTable/ElementInfo.svelte'

export const infoBox = $state({ info: defaultElementInfo })
