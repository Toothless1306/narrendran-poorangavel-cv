import React, { useEffect } from 'react';
import resumeIcon from '../resume.ico';

const DynamicFavicon = () => {
	useEffect(() => {
		console.log('Imported icon:', resumeIcon); // Check this in browser console

		const setFavicon = () => {
			let link =
				document.querySelector("link[rel*='icon']") ||
				document.createElement('link');
			link.type = 'image/x-icon';
			link.rel = 'icon';
			link.href = resumeIcon;
			console.log('Setting favicon to:', resumeIcon);
			document.head.appendChild(link);
		};

		setFavicon();
	}, []);

	return null;
};

export default DynamicFavicon;
