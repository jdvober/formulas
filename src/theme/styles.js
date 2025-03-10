import { mode } from "@chakra-ui/theme-tools"

export const Styles = {
	initialColorMode: "dark",
	useSystemColorMode: true,
	global: (props) => ({
		body: {
			height: window.innerHeight,
			bgGradient: mode(
				"linear(to-t,#2d2d2a, #32213A)",
				"linear(to-tr, #241919, #274046)"
			)(props),
		},
	}),
}
