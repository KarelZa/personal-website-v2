import React, { useEffect, useState } from 'react';
import { useViewportScroll } from 'framer-motion';

/**
 * Custom Hook to reveal element Header on scrollUp otherwise hides it
 * @param {string} initialState initial state ( default false)
 */
export const useScroll = (initialState: boolean = false) => {
	const [hidden, setHidden] = useState(initialState); // for header animation: ;
	const { scrollY } = useViewportScroll(); // for header scroll

	function update() {
		// Scrolling up
		if (scrollY?.get() < scrollY?.getPrevious()) {
			setHidden(false);
			// +100 Scrolling down or higher than previous
		} else if (scrollY?.get() > 100 && scrollY?.get() > scrollY?.getPrevious()) {
			setHidden(true);
		}
	}
	/** update the onChange callback to call for `update()` **/
	useEffect(() => {
		return scrollY.onChange(() => update());
	});
	// tuple , only known elements are returned
	return [hidden, scrollY] as const;
};
