import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Custom Hook to reveal element when it meets requirements --> Utilizes Motion framer + Intersection Observer
 * @param {string} startAnimation animation variant label (that carries animation)
 * @param {number | number[]} thresholdValue threshold point for animation to trigger (0-1)
 * @param {number | number[]} [logMessage] message to be shown in console log when requirements are met
 */
export const useMotionObserver = (
	startAnimation: string,
	thresholdValue?: number | number[],
	logMessage?: string
) => {
	const controls = useAnimation();
	const [ref, inView] = useInView({ threshold: thresholdValue || 0 });
	// Side-effect handling
	useEffect(() => {
		// console?.log(logMessage);
		if (inView) {
			controls.start(startAnimation);
		}
	}, [controls, inView]);
	// tuple , only known elements are returned
	return [controls, ref] as const;
};
