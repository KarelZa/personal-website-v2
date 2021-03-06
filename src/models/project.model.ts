export interface ProjectProps {
	title: string;
	description: string;
	tech: string[];
	image: {
		path: string;
		alt: string;
	};
	id: string;
	links: {
		name: string;
		url: string;
	}[];
}
