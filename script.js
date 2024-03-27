let menu = document.querySelector(".menu");
let unorderList = document.querySelector("nav ul");
let menuLines = document.querySelectorAll(".menu-line");

menu.addEventListener("click", () => {
	unorderList.classList.toggle("showmenu");

	// Toggle the active class on each menu line
	menuLines.forEach((line) => line.classList.toggle("active"));
});

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
	if (window.pageYOffset > 100) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove("active");
	}
});

const sections = document.querySelectorAll(".section");

const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("active");
			observer.unobserve(entry.target);
		}
	});
}, options);

sections.forEach((section) => {
	observer.observe(section);
});

const movingText = document.querySelector(".moving-text");
const topText = document.querySelector(".logo-text-top");
const bottomText = document.querySelector(".logo-text-bottom");

document.addEventListener("mousemove", (e) => {
	const mouseX = e.clientX;
	const windowWidth = window.innerWidth;
	const moveRange = 100; // Adjust the range of movement

	// Calculate the horizontal movement for both text elements
	const moveTop = (mouseX / windowWidth - 0.5) * moveRange;
	const moveBottom = -moveTop;

	// Apply the horizontal movement to the text elements
	topText.style.transform = `translateX(${moveTop}px)`;
	bottomText.style.transform = `translateX(${moveBottom}px)`;
});

const checkbox = document.getElementById("checkbox");
const dropdown = document.querySelector(".dropdown");

if (checkbox != null) {
	checkbox.addEventListener("click", function () {
		dropdown.classList.toggle("active");
	});
}


// Get today's date
let today = new Date();

// Get the date for February 16th of the next year
let nextFeb16 = new Date(today.getFullYear(), 1, 16);

// If today's date is after February 16th, get the date for February 16th of the next year
if (today.getMonth() > 1 || (today.getMonth() === 1 && today.getDate() > 16)) {
    nextFeb16.setFullYear(nextFeb16.getFullYear() + 1);
}

// Calculate the difference in time between the two dates
let diffTime = Math.abs(nextFeb16 - today);

// Calculate the difference in days
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

// Get the .text-wrapper and .text-wrapper-2 elements
let textWrapper = document.querySelector('.text-wrapper');
let textWrapper2 = document.querySelector('.text-wrapper-2');

// Update the text in the .text-wrapper and .text-wrapper-2 elements
textWrapper.textContent = diffDays;
textWrapper2.textContent = "days left";