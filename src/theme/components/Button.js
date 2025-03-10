import { mode } from "@chakra-ui/theme-tools"
export const button = {
	baseStyle: {},
	sizes: {},
	variants: {
		"glass-dark": {
			bg: mode("rgba(0,0,0,0.4", "rgba(0,0,0,0.3"),
			border: mode(
				"1px solide rgba(0,0,0,0.15",
				"1px solid rgba(0,0,0,0.15"
			),
			boxShadow: "md",
			_hover: {
				bg: mode("rgba(0,0,0,0.6", "rgba(0,0,0,0.5)"),
			},
		},
	},
}
