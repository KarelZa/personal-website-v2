import { useEffect, useState } from 'react';

// Solves scenario where conditional rendering in  JSX  condition differs on the server and the client
// --> DarkMode / LightMode JSX icons
export const useLoaded = () => {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => setLoaded(true), []);
	return loaded;
};
