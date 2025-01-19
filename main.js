document.addEventListener('DOMContentLoaded', main);

function main() {
	setCarouselImages();
	listenToArrouButtons();
}

function listenToArrouButtons() {
	const arrowLeftButton = document.getElementById('arrow-left');
	const arrowRightButton = document.getElementById('arrow-right');
	const carousel = document.getElementById('carousel');

	if (!arrowLeftButton || !arrowRightButton || !carousel) {
		return;
	}

	const carouselItemWidth = carousel.children[0].clientWidth;
	arrowLeftButton.addEventListener('click', () => {
		carousel.scrollTo({
			left: carousel.scrollLeft - carouselItemWidth,
			behavior: 'smooth',
		});
	});

	arrowRightButton.addEventListener('click', () => {
		carousel.scrollTo({
			left: carousel.scrollLeft + carouselItemWidth,
			behavior: 'smooth',
		});
	});
}

function setCarouselImages() {
	const carouselImages = [
		{
			text: 'Multicolored square',
			url: './images/square.png',
		},
		{
			text: 'Among us, marbled',
			url: './images/amongus.png',
		},
		{
			text: 'Multicolored round',
			url: './images/round.png',
		},
		{
			text: 'Multicolored square',
			url: './images/square.png',
		},
		{
			text: 'Among us, marbled',
			url: './images/amongus.png',
		},
		{
			text: 'Multicolored round',
			url: './images/round.png',
		},
		{
			text: 'Multicolored square',
			url: './images/square.png',
		},
		{
			text: 'Among us, marbled',
			url: './images/amongus.png',
		},
		{
			text: 'Multicolored round',
			url: './images/round.png',
		},
		{
			text: 'Multicolored square',
			url: './images/square.png',
		},
		{
			text: 'Among us, marbled',
			url: './images/amongus.png',
		},
		{
			text: 'Multicolored round',
			url: './images/round.png',
		},
	];

	const carousel = document.getElementById('carousel');

	if (!carousel) {
		return;
	}

	const fragment = document.createDocumentFragment();
	carouselImages.forEach(({ text, url }) => {
		const carouselItem = document.createElement('div');
		carouselItem.classList.add('carousel-item');

		const img = document.createElement('img');
		img.src = url;

		const textElement = document.createElement('span');
		textElement.textContent = text;

		const button = document.createElement('button');
		button.textContent = 'BUY';
		button.classList.add('small');

		carouselItem.appendChild(img);
		carouselItem.appendChild(textElement);
		carouselItem.appendChild(button);

		fragment.appendChild(carouselItem);
	});

	carousel.appendChild(fragment);
}
