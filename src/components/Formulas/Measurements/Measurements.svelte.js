import { VariableColors as vc } from '../../../theme/colors/colors.ts'
export const DENSITY = {
	value: { long: 'Density', short: 'ρ' },
	color: vc[0],
	units: {
		type: 'FRACTIONAL',
		long: { value1: 'grams', value2: 'centimeter³' },
		short: { value1: 'g', value2: 'cm³' },
	},
	exampleValue: '1',
	description:
		'a measurement that compares the amount of matter an object has to its volume. An object with a lot of matter in a certain volume has high density. An object with little matter in the same amount of volume has a low density.',
}
export const MASS = {
	value: { long: 'Mass', short: 'm' },
	color: vc[1],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Kilograms', value2: null },
		short: { value1: 'kg', value2: null },
	},
	exampleValue: '75',
	description: 'a measure of the amount of matter an object has.',
}
export const VOLUME = {
	value: { long: 'Volume', short: 'V' },
	color: vc[2],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Centimeters²', value2: null },
		short: { value1: 'cm²', value2: null },
	},
	exampleValue: '10',
	description: 'the amount of three dimensional space occupied by an object.',
}
export const FORCE = {
	value: { long: 'Force', short: 'F' },
	color: vc[3],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Newtons', value2: null },
		short: { value1: 'N', value2: null },
	},
	description: 'a push or pull between objects.',
	exampleValue: '100',
}
export const WEIGHT = {
	value: { long: 'Weight', short: 'Fg' },
	color: vc[3],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Newtons', value2: null },
		short: { value1: 'N', value2: null },
	},
	description: 'a push or pull between objects due to gravity.',
	exampleValue: '100',
}
export const AREA = {
	value: { long: 'Area', short: 'A' },
	color: vc[4],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Cubic Centimeters', value2: null },
		short: { value1: 'cm³', value2: null },
	},
	exampleValue: '50',
	description:
		'the amount of space a two dimensional (flat) surface takes up.',
}
export const PRESSURE = {
	value: { long: 'Pressure', short: 'P' },
	color: vc[5],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Atmospheres', value2: null },
		short: { value1: 'atm', value2: null },
	},
	exampleValue: '1.2',
	description: 'the amount of force applied over a specific area.',
}
export const TEMPERATURE = {
	value: { long: 'Temperature', short: 'T' },
	color: vc[6],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Degrees Celsius', value2: null },
		short: { value1: '°C', value2: null },
	},
	exampleValue: '28',
	description: 'how hot or cold something is.',
}
export const THERMAL_ENERGY = {
	value: { long: 'Thermal Energy', short: 'TE' },
	color: vc[7],

	units: {
		type: 'SIMPLE',
		long: { value1: 'Joules', value2: null },
		short: { value1: 'J', value2: null },
	},
	exampleValue: '100',
	description: 'the sum of the kinetic energy of atoms or molecules.',
}
export const SPECIFIC_HEAT = {
	value: { long: 'Specific Heat', short: 'c' },
	color: vc[8],
	units: {
		type: 'FRACTIONAL',
		long: { value1: 'Joules', value2: 'gram • degree Celsius' },
		short: { value1: 'J', value2: 'g•°C' },
	},
	exampleValue: '100',
	description:
		'the amount of heat required for a single unit of mass of a substance to be raised by one degree of temperature.',
}
export const SPEED = {
	value: { long: 'Speed', short: 's' },
	color: vc[9],
	units: {
		type: 'FRACTIONAL',
		long: { value1: 'meters', value2: 'second' },
		short: { value1: 'm', value2: 's' },
	},
	exampleValue: '22',
	description:
		'the same as velocity, but without specifying any specific direction.',
}
export const DISTANCE = {
	value: { long: 'Distance', short: 'd' },
	color: vc[10],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Meters', value2: null },
		short: { value1: 'm', value2: null },
	},
	exampleValue: '100',
	description:
		'how far one thing is from another thing, or the amount of space between two things.',
}
export const TIME = {
	value: { long: 'Time', short: 't' },
	color: vc[11],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Seconds', value2: null },
		short: { value1: 's', value2: null },
	},
	exampleValue: '10',
	description: 'the never-ending continued proсess of existence and events.',
}
export const VELOCITY = {
	value: { long: 'Velocity', short: 'v' },
	color: vc[12],
	units: {
		type: 'FRACTIONAL',
		long: { value1: 'meters', value2: 'second' },
		short: { value1: 'm', value2: 's' },
	},
	exampleValue: '82',
	description:
		'a measure of how fast something moves in a particular direction.',
}
export const POSITION = {
	value: { long: 'Position', short: 'x' },
	color: vc[13],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Meters', value2: null },
		short: { value1: 'm', value2: null },
	},
	exampleValue: '10',
	description: 'where something is.',
}
export const ACCELERATION = {
	value: { long: 'Acceleration', short: 'a' },
	color: vc[14],
	units: {
		type: 'FRACTIONAL',
		long: { value1: 'Meters', value2: 'seconds²' },
		short: { value1: 'm', value2: 's²' },
	},
	exampleValue: '18',
	description: 'a measure of how fast velocity changes.',
}
export const GRAVITATIONAL_ACCELERATION = {
	value: { long: 'Gravitational Acceleration', short: 'g' },
	color: vc[14],
	units: {
		type: 'FRACTIONAL',
		long: { value1: 'Meters', value2: 'seconds²' },
		short: { value1: 'm', value2: 's²' },
	},
	exampleValue: '10',
	description:
		'a special case of acceleration that is due to the Gravity of an object pulling on another object.  On earth, this value is 10',
}
export const MOMENTUM = {
	value: { long: 'Momentum', short: 'p' },
	color: vc[15],
	units: {
		type: 'FRACTIONAL',
		long: { value1: 'kilogram • meters', value2: 'second' },
		short: { value1: 'kg•m', value2: 's' },
	},
	exampleValue: '100',
	description:
		'the "power" when a body is moving, meaning how much force it can have on another body. For exampleValue, a bowling ball (large mass) moving very slowly (low velocity) can have the same momentum as a baseball (small mass) that is thrown fast (high velocity).',
}
export const MU = {
	value: { long: 'Coefficient of Friction', short: 'μ' },
	color: vc[16],
	units: {
		type: 'SIMPLE',
		long: { value1: '', value2: null },
		short: { value1: '', value2: null },
	},
	exampleValue: '5',
	description:
		'a value that shows the relationship between two objects and the normal reaction between the objects that are involved. It has no units.',
}
export const WORK = {
	value: { long: 'Work', short: 'w' },
	color: vc[17],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Joules or Newton-Meters', value2: null },
		short: { value1: 'J or N•m', value2: null },
	},
	exampleValue: '100',
	description: 'what force does.',
}
export const POWER = {
	value: { long: 'Power', short: 'P' },
	color: vc[18],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Watts', value2: null },
		short: { value1: 'W', value2: null },
	},
	exampleValue: '80',
	description:
		'(1) how fast work is done. or (2) how quickly energy is given from one thing to another.',
}
export const KINETIC_ENERGY = {
	value: { long: 'Kinetic Energy', short: 'KE' },
	color: vc[19],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Joules', value2: null },
		short: { value1: 'J', value2: null },
	},
	exampleValue: '100',
	description: 'the energy that an object has because of its motion.',
}
export const GPE = {
	value: { long: 'Gravitational Potential Energy', short: 'GPE' },
	color: vc[20],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Joules', value2: null },
		short: { value1: 'J', value2: null },
	},
	exampleValue: '200',
	description: 'energy that depends on its height off the ground and mass',
}
export const HEIGHT = {
	value: { long: 'Height', short: 'h' },
	color: vc[21],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Meters', value2: null },
		short: { value1: 'm', value2: null },
	},
	exampleValue: '20',
	description: 'the distance between the earth and highest end of an object.',
}
export const VOLTAGE = {
	value: { long: 'Voltage', short: 'V' },
	color: vc[22],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Volts', value2: null },
		short: { value1: 'V', value2: null },
	},
	exampleValue: '9',
	description:
		"what makes electric charges move. It is the 'push' that causes charges to move in a wire or other electrical conductor.",
}
export const CURRENT = {
	value: { long: 'Current', short: 'I' },
	color: vc[23],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Amps', value2: null },
		short: { value1: 'A', value2: null },
	},
	exampleValue: '3',
	description: 'the flow of electric charge through a conductor.',
}
export const RESISTANCE = {
	value: { long: 'Resistance', short: 'R' },
	color: vc[24],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Ohms', value2: null },
		short: { value1: 'Ω', value2: null },
	},
	exampleValue: '100',
	description:
		'the difficulty of passing an electric current through a substance.  With more resistance in a circuit, less electricity will flow through the circuit.',
}
export const WAVE_SPEED = {
	value: { long: 'Wave Speed', short: 's' },
	color: vc[25],
	units: {
		type: 'FRACTIONAL',
		long: { value1: 'centimeters', value2: 'second' },
		short: { value1: 'cm', value2: 's' },
	},
	exampleValue: '10',
	description: 'how fast a wave is travelling through a medium.',
}
export const FREQUENCY = {
	value: { long: 'Frequency', short: 'f' },
	color: vc[26],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Hertz', value2: null },
		short: { value1: 'Hz', value2: null },
	},
	exampleValue: '826',
	description:
		'the number of wave crests that pass a point in one second (a wave crest is the peak of the wave).',
}
export const WAVELENGTH = {
	value: { long: 'Wavelength', short: 'λ' },
	color: vc[27],
	units: {
		type: 'SIMPLE',
		long: { value1: 'Centimeters', value2: null },
		short: { value1: 'cm', value2: null },
	},
	exampleValue: '42',
	description:
		'the distance between a crest and another crest of a wave (highest point above equilibrium) or the distance between a trough and another trough of a wave (lowest point below the equilibrium of a wave). ',
}
