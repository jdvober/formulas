import React from "react"

import {
	Box,
	Input,
	NativeSelectField,
	NativeSelectRoot,
} from "@chakra-ui/react"

// If no values, use this:
type InputsProps = Record<string, never>
// If values, fill in the object below
//type InputsProps = {}

export const Inputs: React.FC<InputsProps> = () => {
	return (
		<Box className="Inputs">
			<Input className="dayInput" placeholder="Day" w="10vw" />
			<Input className="monthInput" placeholder="Month" w="10vw" />
			<Input className="yearInput" placeholder="Year" w="10vw" />
			<NativeSelectRoot>
				<NativeSelectField placeholder="Marking Period">
					<option value="1">MP1</option>
					<option value="2">MP2</option>
					<option value="3">MP3</option>
					<option value="4">MP4</option>
				</NativeSelectField>
			</NativeSelectRoot>
		</Box>
	)
}
