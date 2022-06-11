export interface CardProps {
	title: string;
	description: string;
	tags: string[];
	id: string;
	links: {
		icon: string;
		url: string;
	}[];
}
