// Section
export const sectionVariant = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
};

// Hero
export const parentVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.3,
		},
	},
};

export const childVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

// FeaturedProject
export const projectVariant = {
	hidden: (i: number) => ({
		opacity: 0,
		x: i % 2 === 0 ? (i === 0 ? 15 : i * 15) : i * -15,
	}),
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.8,
		},
	},
};

// ProjectCard
export const cardVariant = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			ease: 'easeOut',
			delay: i * 0.2,
			duration: 0.7,
		},
	}),
};
