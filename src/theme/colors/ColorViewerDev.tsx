import { Swatches } from '@/theme/colors/colors.ts'
import {
	Box,
	Center,
	ColorSwatch,
	Flex,
	Group,
	HStack,
	Text,
	VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'

type Props = {}
type ColorViewerDevProps =
	Props extends Record<string, never>
		? React.FC<Record<string, never>>
		: React.FC<Props>

export const ColorViewerDev: ColorViewerDevProps = () => {
	const [colorInfo, setColorInfo] = useState(['', '', ''])
	const mainColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

	return (
		<Center w='100vw' h='auto'>
			<Flex direction='column' width='100%' p='5%'>
				<Center w='100%' h='2em'>
					<Text color='white'>
						{colorInfo[0]}
						{colorInfo[0] === '' ? '' : ' '}
						{colorInfo[0] != colorInfo[1] ? colorInfo[1] : ''}
						{colorInfo[0] === '' ? '' : ' - '}
						{colorInfo[2]}
					</Text>
				</Center>
				<Center
					flexGrow={1}
					border='1px solid green'
					alignItems='flex-start'
				>
					<VStack>
						<HStack>
							{mainColors.map((color) => (
								<ColorSwatch
									value={color}
									onMouseOver={() => {
										setColorInfo([color, color, color])
									}}
									onMouseLeave={() => {
										setColorInfo(['', '', ''])
									}}
									onClick={() => {
										window.navigator.clipboard.writeText(
											color
										)
									}}
								/>
							))}
						</HStack>
						<HStack>
							<Box border='1px solid orange'>
								{Swatches.map(
									(swatch: {
										name: string
										colors: {
											name: string
											value: string
										}[]
									}) => {
										return (
											<Group
												attached
												width='20vw'
												maxW='20vw'
												grow
												m='2vh'
											>
												{swatch.colors
													.filter((color) => {
														return !color.name.includes(
															'Dracula'
														)
													})
													.map((color) => {
														return (
															<ColorSwatch
																value={
																	color.value
																}
																onMouseOver={() => {
																	setColorInfo(
																		[
																			color.name,
																			swatch.name,
																			color.value,
																		]
																	)
																}}
																onMouseLeave={() => {
																	setColorInfo(
																		[
																			'',
																			'',
																			'',
																		]
																	)
																}}
																onClick={() => {
																	window.navigator.clipboard.writeText(
																		color.value
																	)
																}}
															/>
														)
													})}
											</Group>
										)
									}
								)}
							</Box>

							<Box border='1px solid blue'>
								{Swatches.map((swatch) => {
									return (
										<Group
											attached
											width='20vw'
											maxW='20vw'
											grow
											m='2vh'
										>
											{swatch.colors
												.filter((color) => {
													return color.name.includes(
														'Dracula'
													)
												})
												.map((color) => {
													return (
														<ColorSwatch
															value={color.value}
															onMouseOver={() => {
																setColorInfo([
																	color.name,
																	swatch.name.startsWith(
																		'Dracula'
																	)
																		? swatch.name.slice(
																				8
																			)
																		: swatch.name,
																	color.value,
																])
															}}
															onMouseLeave={() => {
																setColorInfo([
																	'',
																	'',
																	'',
																])
															}}
															onClick={() => {
																window.navigator.clipboard.writeText(
																	color.value
																)
															}}
														/>
													)
												})}
										</Group>
									)
								})}
							</Box>
						</HStack>
					</VStack>
				</Center>
			</Flex>
		</Center>
	)
}
