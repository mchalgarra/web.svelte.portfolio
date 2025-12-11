import type { IWork } from '../../../lib/interfaces/work.interface';

export const PORTFOLIO: IWork = {
	title: 'Portfolio',
	description:
		'A standout addition to my body of work – a project that channels innovation and creativity. Its significance lies in its power to showcase my capabilities and aspirations in Software Engineering. Explore my work and discover how each project reflects my commitment to excellence and my drive to make a meaningful impact.',
	image: 'work/portfolio.png',
	link: 'https://github.com/mchalgarra/web.svelte.portfolio',
	linkText: 'Check source code',
	color: 'portfolio',
	tags: ['Svelte', 'Tailwind CSS', 'TypeScript', 'SCSS']
};

export const ASTEROIDS: IWork = {
	title: 'AsteroidsJS',
	description:
		'AsteroidsJS is a dynamic singleplayer/multiplayer game reminiscent of the classic Asteroids but with exciting new mechanics. Players navigate their spaceships in a fast-paced battlefield, using their keyboard or phone controls for an immersive experience. Engage in thrilling competition as you vie for the top score.',
	image: 'work/asteroids.png',
	link: 'https://github.com/AsteroidsJS-Official',
	color: 'asteroids',
	tags: ['JavaScript', 'HTML', 'SCSS', 'Socket.io']
};

export const BEEFOR: IWork = {
	title: 'Beefor',
	description:
		'Beefor is the first Teams & Performance Management platform for HR leaders and teams. Connect teams to corporate strategy and enhance a culture of high performance through agile practices, maturity models, data analysis, and artificial intelligence.',
	image: 'work/beefor.png',
	link: 'https://beefor.io/',
	color: 'beefor',
	company: 'Cadmus',
	tags: ['Angular', 'TypeScript', '.NET', 'C#', 'SQL', 'NestJS']
};

export const PAPERBOOK: IWork = {
	title: 'Paperbook',
	description:
		'PaperBook is a project developed for educational purposes, simulating an e-commerce platform for books and stationery. Explore the functionalities and design crafted with learning in mind.',
	image: 'work/paperbook.png',
	link: 'https://github.com/paperbook-official',
	color: 'paperbook',
	company: 'Facens',
	tags: ['React', 'NestJS', 'TypeScript', 'Styled Components']
};
