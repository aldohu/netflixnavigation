const close = document.querySelector('.close');
const white = document.querySelector('.white');
const red = document.querySelector('.red');
const black = document.querySelector('.black');
const hamburger = document.querySelector('.hamburger-menu');

hamburger.addEventListener('click', () => {
	// Display the menu elements

	// Hide them after a delay
	setTimeout(function () {
		white.classList.remove('hide');
	}, 1000); // 1000 milliseconds (1 second)

	setTimeout(function () {
		red.classList.remove('hide');
	}, 2000); // 2000 milliseconds (2 seconds)

	setTimeout(function () {
		black.classList.remove('hide');
	}, 3000); // 3000 milliseconds (3 seconds)
});

close.addEventListener('click', () => {
	setTimeout(function () {
		white.classList.add('hide');
	}, 1000); // 1000 milliseconds (1 second)

	setTimeout(function () {
		red.classList.add('hide');
	}, 2000); // 2000 milliseconds (2 seconds)

	setTimeout(function () {
		black.classList.add('hide');
	}, 3000);
});
