export class HtmlUtils {
	/**
	 * Gets whether the element is visible in the viewport.
	 *
	 * @param element the element to check visibility.
	 * @returns whether the element is visible in the viewport.
	 */
	static getElementVisibility(element: HTMLElement) {
		const bottom = element.offsetTop + element.offsetHeight;
		return element.offsetTop < window.scrollY + window.innerHeight && bottom >= window.scrollY;
	}

	/**
	 * Gets whether the SVG element is visible in the viewport.
	 *
	 * @param svg the SVG element to check visibility.
	 * @returns whether the SVG element is visible in the viewport.
	 */
	static getSVGVisibility(svg: SVGElement) {
		if (!svg) return false;
		const rect = svg.getBoundingClientRect();
		const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
		return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
	}

	/**
	 * Scrolls the window to the element.
	 *
	 * @param element the element to scroll to. If it's a string, it will be used as a query selector.
	 * @param offset the offset to add to the element's top position.
	 */
	static scrollToElement(element: HTMLElement | string, offset = 0) {
		if (typeof element === 'string') {
			const el = document.querySelector(element);
			if (!el) return;

			element = el as HTMLElement;
		}

		window.scrollTo({ top: element.offsetTop + offset, behavior: 'smooth' });
	}
}
