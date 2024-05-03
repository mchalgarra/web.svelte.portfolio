/**
 * Represents a section of the portfolio.
 */
export interface ISection {
	/**
	 * The name of the section.
	 */
	name: string;

	/**
	 * The path to the section.
	 */
	path: string;

	/**
	 * Whether the section is active.
	 */
	active: boolean;
}
