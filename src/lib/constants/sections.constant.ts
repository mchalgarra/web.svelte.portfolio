import type { ISection } from '../interfaces/section.interface';

/**
 * Defines the sections of the portfolio.
 */
export const SECTIONS: ISection[] = [
	{
		name: 'About',
		path: '/',
		active: true
	},
	{
		name: 'Work',
		path: '/work',
		active: false
	},
	{
		name: 'Skills',
		path: '/skills',
		active: false
	},
	{
		name: 'Experience',
		path: '/experience',
		active: false
	},
	{
		name: 'Contact',
		path: '/contact',
		active: false
	},
	{
		name: 'Resume',
		path: '/resume',
		active: false
	}
];
