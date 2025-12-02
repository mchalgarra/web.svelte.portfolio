import type { IExperience } from '$lib/interfaces/experience.interface';

export const EXPERIENCES: IExperience[] = [
	{
		company: 'Uber',
		title: 'Software Engineer',
		type: 'Full-time',
		startDate: 'Aug 2024',
		endDate: 'Current',
		tags: ['React', 'TypeScript', 'Go', 'Kotlin'],
		description: [
			'Worked on cross-platform projects that unlocked over <b>$34M</b> in revenue',
			'Collaborated on a Uber Eats feature that increased the <b>CTR</b> on one ad surface by approximately <b>60%</b>.',
			'Delivered a full-stack Web project enhancing metrics tracking, with an estimated <b>$1M</b> impact over a 12-month forecast.',
			'Built observability dashboards, implemented alert systems, and handled on-call rotations to monitor rollouts, detect incidents faster, and mitigate issues in ads-related operations.',
			'Performed code reviews and ran <b>A/B</b> tests to ensure technical quality, validate hypotheses, and drive improvements in user experience and ad performance.',
			'Partnered with cross-functional teams and stakeholders to deliver solutions aligned with business goals and technical requirements.'
		]
	},
	{
		company: 'micro1',
		title: 'Mid-level Software Engineer',
		type: 'Part-time • Contract • Temporary',
		startDate: 'Apr 2024',
		endDate: 'Jun 2024',
		tags: ['Python', 'TypeScript', 'Prompt Engineering'],
		description: [
			'<b>Prompt engineering</b> for language model training and optimization',
			'<b>Input/output engineering</b> for language model training',
			'<b>Software/algorithm development</b> to be applied to train models'
		]
	},
	{
		company: 'Cadmus',
		title: 'Developer Analyst III',
		type: 'Full-time',
		startDate: 'Oct 2023',
		endDate: 'Aug 2024',
		tags: ['Angular', 'TypeScript', '.NET', 'C#', 'SQL', 'NestJS'],
		description: [
			'Led the <b>code architecture</b> and <b>UI/UX</b> design for a new version of the <b>Beefor</b> web platform, being part and guiding an agile team of developers through its implementation',
			'Maintained and implemented <b>new features</b> for the <b>Beefor</b> platform to ensure its success and functionality'
		]
	},

	{
		company: 'Liquid Galaxy • Facens',
		title: 'Full-stack Software Developer',
		type: 'Part-time • Internship',
		startDate: 'Jul 2021',
		endDate: 'Apr 2023',
		tags: [
			'Vue.js',
			'TypeScript',
			'Node.js',
			'Flutter',
			'Dart',
			'Python',
			'Bash',
			'SQL',
			'MongoDB',
			'Firebase',
			'GCP'
		],
		description: [
			'Architected and developed more than <b>15 WEB</b>, <b>mobile</b> and <b>API</b> applications using a variety set of technologies',
			'Coordinated a <b>4-member</b> team to meet <b>tight deadlines</b> and constantly deliver an <b>8-month</b> product',
			'Designed <b>architectures</b> and <b>patterns</b> focusing on <b>code reusability</b>, <b>scalability</b> and <b>easy maintenance</b>',
			'Reviewed, maintained and enhanced more than <b>10 internal</b> and <b>third-party</b> projects'
		]
	},
	{
		company: 'Google',
		title: 'Mobile Development Contributor',
		type: 'Temporary',
		startDate: 'Jun 2022',
		endDate: 'Sep 2022',
		tags: ['Flutter', 'Dart', 'SSH', 'Bash'],
		description: [
			'Implemented a <b>mobile app</b> that focus on showing information from <b>satellites</b> and <b>ground stations</b> on Google Earth',
			'Achieved more than <b>10000</b> downloads on Google Play',
			'Achieved <b>100%</b> of all <b>deadlines</b> and <b>goals</b> given by mentors',
			'<b>Communicated</b> the status of all ongoing and completed <b>issues</b> and <b>milestones</b> frequently'
		]
	},
	{
		company: 'Liquid Galaxy • Facens',
		title: 'Software Developer',
		type: 'Volunteer • 20h/week average',
		startDate: 'Aug 2020',
		endDate: 'Jul 2021',
		tags: ['Vue.js', 'JavaScript', 'Node.js', 'Bash', 'Express', 'Firebase', 'GCP'],
		description: [
			"Development of projects that match customer's <b>requirements</b> in terms of functionality, scalability and performance",
			'<b>Teamwork</b> and development of the ability to <b>lead</b> teams and projects</li>'
		]
	},
	{
		company: 'Facens',
		title: 'Scientific Researcher',
		type: 'Scientific Research',
		startDate: 'Sep 2020',
		endDate: 'Jun 2021',
		tags: ['Vue.js', 'JavaScript', 'Node.js', 'Firebase', 'GCP'],
		description: [
			'Implemented an <b>academic</b> assessment WEB application for <b>CIANA</b> (Aramar Nuclear Instruction and Training Center)',
			'<b>Overhauled</b> and <b>improved</b> existent interfaces and features',
			'Decreased <b>90%</b> of all Firebase requests by applying <b>pagination</b>, <b>query</b> and <b>filter</b> concepts',
			'<b>Analyzed</b> and <b>enhanced</b> the application performance from <b>44%</b> to <b>86%</b> using Google Lighthouse'
		]
	}
];
