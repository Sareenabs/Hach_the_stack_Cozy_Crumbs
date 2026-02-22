async function LoadImages() {
	const container = document.getElementById('sipsnapimages');
	if (!container) return;

	try {
		const response = await fetch('./images.json');
		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
		const images = await response.json();

		for (const imageName of images) {
			await new Promise((resolve) => {
				const img = document.createElement('img');
				img.src = `static/images/${imageName}`;
				img.alt = "";
				img.onload = () => {
					container.appendChild(img);
					resolve();
				};
				img.onerror = () => {
					console.error(`Failed to load image: ${imageName}`);
					resolve();
				};
			});
		}
	} catch (error) {
		console.error('Error loading images:', error);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	LoadImages();
});
