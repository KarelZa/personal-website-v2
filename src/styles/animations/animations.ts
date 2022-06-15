// Used for each section
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

// Used in FeaturedProject
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
