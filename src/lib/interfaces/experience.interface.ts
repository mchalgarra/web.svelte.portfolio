/**
 * Represents a professional experience data.
 */
export interface IExperience {
	/**
	 * The role title.
	 *
	 * @example "Software Engineer"
	 */
	title: string;

	/**
	 * The company name.
	 *
	 * @example "Google"
	 */
	company: string;

	/**
	 * The job description.
	 *
	 * @example
	 * [
	 *   "<b>Prompt engineering</b> for language model training and optimization",
	 *   "<b>Software/algorithm development</b> to be applied to train models"
	 * ]
	 */
	description: string[];

	/**
	 * The job tags (mainly technologies).
	 *
	 * @example ["JavaScript", "React", "Node.js"]
	 */
	tags: string[];

	/**
	 * The job type (e.g. full-time, part-time, internship).
	 *
	 * @example "Full-time"
	 */
	type: string;

	/**
	 * The start date.
	 *
	 * @example "April 2024"
	 */
	startDate: string;

	/**
	 * The end date.
	 *
	 * @example "Current" or "July 2024"
	 */
	endDate: string;
}
