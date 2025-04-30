import { VariableColors as vc } from '../../theme/colors/Colors'
export const DENSITY = {
	value: { long: 'Density', short: 'ρ' },
	color: vc[0],
	units: {
		long: 'grams per centimeter³',
		short: 'g/cm³',
	},
	example: '1',
	description:
		'a measurement that compares the amount of matter an object has to its volume. An object with much matter in a certain volume has high density. An object with little matter in the same amount of volume has a low density.',
}
export const MASS = {
	value: { long: 'Mass', short: 'm' },
	color: vc[1],
	units: {
		long: 'Kilograms',
		short: 'kg',
	},
	example: '75',
	description: 'a measure of the amount of matter an object has.',
}
export const VOLUME = {
	value: { long: 'Volume', short: 'V' },
	color: vc[2],
	units: {
		long: 'Centimeters²',
		short: 'cm²',
	},
	example: '10',
	description: 'the amount of three dimensional space occupied by an object.',
}
export const FORCE = {
	value: { long: 'Force', short: 'F' },
	color: vc[3],
	units: {
		long: 'Newtons',
		short: 'N',
	},
	description: 'a push or pull between objects.',
	example: '100',
}
export const AREA = {
	value: { long: 'Area', short: 'A' },
	color: vc[4],
	units: {
		long: 'Cubic Centimeters',
		short: 'cm³',
	},
	example: '50',
	description:
		'the amount of space a two dimensional (flat) surface takes up.',
}
export const PRESSURE = {
	value: { long: 'Pressure', short: 'P' },
	color: vc[5],
	units: {
		long: 'Atmospheres',
		short: 'atm',
	},
	example: '1.2',
	description: 'the amount of force applied over a specific area.',
}
export const TEMPERATURE = {
	value: { long: 'Temperature', short: 'T' },
	color: vc[6],
	units: {
		long: 'Degrees Celsius',
		short: '°C',
	},
	example: '28',
	description: 'how hot or cold something is.',
}
export const THERMAL_ENERGY = {
	value: { long: 'Thermal Energy', short: 'TE' },
	color: vc[7],
	units: {
		long: 'Joules',
		short: 'J',
	},
	example: '100',
	description: 'the sum of the kinetic energy of atoms or molecules.',
}
export const SPECIFIC_HEAT = {
	value: { long: 'Specific Heat', short: 'c' },
	color: vc[8],
	units: {
		long: 'Joules per (gram • degree Celsius)',
		short: 'J/(g•°C)',
	},
	example: '100',
	description:
		'the amount of heat required for a single unit of mass of a substance to be raised by one degree of temperature.',
}
export const SPEED = {
	value: { long: 'Speed', short: 's' },
	color: vc[9],
	units: {
		long: 'Meters per Second',
		short: 'm/s',
	},
	example: '22',
	description:
		'the same as velocity, but without specifying any specific direction.',
}
export const DISTANCE = {
	value: { long: 'Distance', short: 'd' },
	color: vc[10],
	units: {
		long: 'Meters',
		short: 'm',
	},
	example: '100',
	description:
		'how far one thing is from another thing, or the amount of space between two things.',
}
export const TIME = {
	value: { long: 'Time', short: 't' },
	color: vc[11],
	units: {
		long: 'Seconds',
		short: 's',
	},
	example: '10',
	description: 'the never-ending continued proсess of existence and events.',
}
export const VELOCITY = {
	value: { long: 'Velocity', short: 'v' },
	color: vc[12],
	units: {
		long: 'Meters per second',
		short: 'm/s',
	},
	example: '82',
	description:
		'a measure of how fast something moves in a particular direction.',
}
export const POSITION = {
	value: { long: 'Position', short: 'x' },
	color: vc[13],
	units: {
		long: 'Meters',
		short: 'm',
	},
	example: '10',
	description: 'where something is.',
}
export const ACCELERATION = {
	value: { long: 'Acceleration', short: 'a' },
	color: vc[14],
	units: {
		long: 'Meters per seconds²',
		short: 'm/s²',
	},
	example: '18',
	description: 'a measure of how fast velocity changes.',
}
export const MOMENTUM = {
	value: { long: 'Momentum', short: 'p' },
	color: vc[15],
	units: {
		long: 'kilogram metre per second',
		short: 'kg•m/s',
	},
	example: '100',
	description:
		'the "power" when a body is moving, meaning how much force it can have on another body. For example, a bowling ball (large mass) moving very slowly (low velocity) can have the same momentum as a baseball (small mass) that is thrown fast (high velocity).',
}
export const MU = {
	value: { long: 'Coefficient of Friction', short: 'μ' },
	color: vc[16],
	units: {
		long: '',
		short: '',
	},
	example: '5',
	description:
		'a value that shows the relationship between two objects and the normal reaction between the objects that are involved. It has no units.',
}
export const WORK = {
	value: { long: 'Work', short: 'w' },
	color: vc[17],
	units: {
		long: 'Joules or Newton-Meters',
		short: 'J or N•m',
	},
	example: '100',
	description: 'what force does.',
}
export const POWER = {
	value: { long: 'Power', short: 'P' },
	color: vc[18],
	units: {
		long: 'Watts',
		short: 'W',
	},
	example: '80',
	description:
		'(1) how fast work is done. or (2) how quickly energy is given from one thing to another.',
}
export const KINETIC_ENERGY = {
	value: { long: 'Kinetic Energy', short: 'KE' },
	color: vc[19],
	units: {
		long: 'Joules',
		short: 'J',
	},
	example: '100',
	description: 'the energy that an object has because of its motion.',
}
export const GPE = {
	value: { long: 'Gravitational Potential Energy', short: 'GPE' },
	color: vc[20],
	units: {
		long: 'Joules',
		short: 'J',
	},
	example: '200',
	description: 'energy that depends on its height off the ground and mass',
}
export const HEIGHT = {
	value: { long: 'Height', short: 'h' },
	color: vc[21],
	units: {
		long: 'Meters',
		short: 'm',
	},
	example: '20',
	description: 'the distance between the earth and highest end of an object.',
}
export const VOLTAGE = {
	value: { long: 'Voltage', short: 'V' },
	color: vc[22],
	units: {
		long: 'Volts',
		short: 'V',
	},
	example: '9',
	description:
		"what makes electric charges move. It is the 'push' that causes charges to move in a wire or other electrical conductor.",
}
export const CURRENT = {
	value: { long: 'Current', short: 'I' },
	color: vc[23],
	units: {
		long: 'Amps',
		short: 'A',
	},
	example: '3',
	description: 'the flow of electric charge through a conductor.',
}
export const RESISTANCE = {
	value: { long: 'Resistance', short: 'R' },
	color: vc[24],
	units: {
		long: 'Ohms',
		short: 'Ω',
	},
	example: '100',
	description:
		'the difficulty of passing an electric current through a substance.  With more resistance in a circuit, less electricity will flow through the circuit.',
}
export const WAVE_SPEED = {
	value: { long: 'Wave Speed', short: 's' },
	color: vc[25],
	units: {
		long: 'centimeters per second',
		short: 'cm/s',
	},
	example: '10',
	description: 'how fast a wave is travelling through a medium.',
}
export const FREQUENCY = {
	value: { long: 'Frequency', short: 'f' },
	color: vc[26],
	units: {
		long: 'Hertz',
		short: 'Hz',
	},
	example: '826',
	description:
		'the number of wave crests that pass a point in one second (a wave crest is the peak of the wave).',
}
export const WAVELENGTH = {
	value: { long: 'Wavelength', short: 'λ' },
	color: vc[27],
	units: {
		long: 'Centimeters',
		short: 'cm',
	},
	example: '42',
	description:
		'the distance between a crest and another crest of a wave (highest point above equilibrium) or the distance between a trough and another trough of a wave (lowest point below the equilibrium of a wave). ',
}
