// nav fadein

const navSlide = () => {
	const hamburger = document.querySelector(".hamburger");
	const nav = document.querySelector(".dropdown");
	const navLinks = document.querySelectorAll(".dropdown li");

	//Toggle Nav
	hamburger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");
		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 1s ease forwards ${index / 7 +
					0.5}s`;
			}
		});
	});
};

navSlide();

// dim on click
const dimOnClick = () => {
	const toDoCard = document.querySelectorAll(".item");

	toDoCard.forEach(item => {
		item.addEventListener("click", function() {
			item.classList.toggle("complete");
		});
	});
};

dimOnClick();

// Adding Points (need to refactor)

const addPoints = () => {
	const taskCard = document.querySelector(".counter-one");
	let score = 0;

	const updateScore = () => {
		const playerScore = document.querySelector(".counter-one h2");
		playerScore.textContent = score;
	};

	taskCard.addEventListener("click", function() {
		console.log("working");
		score = score + 30;
		updateScore();
	});
};

const addPoints2 = () => {
	const taskCard = document.querySelector(".counter-two");
	let score = 0;

	const updateScore = () => {
		const playerScore = document.querySelector(".counter-two h2");
		playerScore.textContent = score;
	};

	taskCard.addEventListener("click", function() {
		console.log("working");
		score++;
		updateScore();
	});
};

const addPoints3 = () => {
	const taskCard = document.querySelector(".counter-three");
	let score = 0;

	const updateScore = () => {
		const playerScore = document.querySelector(".counter-three h2");
		playerScore.textContent = score;
	};

	taskCard.addEventListener("click", function() {
		console.log("working");
		score++;
		updateScore();
	});
};
addPoints();
addPoints2();
addPoints3();

// extra for memory

/*for (var i = 0; i < toDoCard.length; i++) {
		toDoCard.addEventListener("click", function() {
			toDoCard.classList.toggle("dim");
		});
    }*/
