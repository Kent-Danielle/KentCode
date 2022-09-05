const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const prevBtn = document.querySelector("#carousel_button-left");
const nextBtn = document.querySelector("#carousel_button-right");
const pagination = document.querySelector(".carousel__nav");
const paginationBtns = Array.from(pagination.children);

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

Number.prototype.mod = function (b) {
	// Calculate
	return ((this % b) + b) % b;
};

const moveToSlide = async (isNext, currentSlide, targetIndex) => {
	const targetSlide = slides[targetIndex];
	if (isNext) {
		currentSlide.classList.add("exit-right");
		await sleep(300);
		currentSlide.classList.remove("current-slide");
		targetSlide.classList.add("enter-right", "current-slide");
		await sleep(300);
		currentSlide.classList.remove("exit-right");
		targetSlide.classList.remove("enter-right");
	} else {
		currentSlide.classList.add("exit-left");
		await sleep(300);
		currentSlide.classList.remove("current-slide");
		targetSlide.classList.add("enter-left", "current-slide");
		await sleep(300);
		currentSlide.classList.remove("exit-left");
		targetSlide.classList.remove("enter-left");
	}
};

const updatePagination = (currentBtn, targetBtnIndex) => {
	const targetBtn = paginationBtns[targetBtnIndex];
	currentBtn.classList.remove("current-slide");
	targetBtn.classList.add("current-slide");
};

// left button
prevBtn.addEventListener("click", (e) => {
	const currentSlide = track.querySelector(".current-slide");
	const currentSlideIndex = slides.findIndex((slide) => slide === currentSlide);
	const prevSlideIndex = (currentSlideIndex - 1).mod(slides.length);

	const currentBtn = pagination.querySelector(".current-slide");
	const currentBtnIndex = paginationBtns.findIndex((btn) => btn === currentBtn);
	const prevBtnIndex = (currentBtnIndex - 1).mod(paginationBtns.length);

	console.log(prevSlideIndex);
	moveToSlide(false, currentSlide, prevSlideIndex);
	updatePagination(currentBtn, prevBtnIndex);
});

// right button
nextBtn.addEventListener("click", (e) => {
	const currentSlide = track.querySelector(".current-slide");
	const currentSlideIndex = slides.findIndex((slide) => slide === currentSlide);
	const nextSlideIndex = (currentSlideIndex + 1) % slides.length;

	const currentBtn = pagination.querySelector(".current-slide");
	const currentBtnIndex = paginationBtns.findIndex((btn) => btn === currentBtn);
	const nextBtnIndex = (currentBtnIndex + 1) % paginationBtns.length;

	console.log((0 - 1) % 3);
	moveToSlide(true, currentSlide, nextSlideIndex);
	updatePagination(currentBtn, nextBtnIndex);
});

// pagination
pagination.addEventListener("click", (e) => {
	const targetBtn = e.target.closest("button");
	const currentBtn = pagination.querySelector(".current-slide");

	if (!targetBtn || currentBtn == targetBtn) return;

	const currentSlide = track.querySelector(".current-slide");
	const currentIndex = paginationBtns.findIndex((btn) => btn === currentBtn);
	const targetIndex = paginationBtns.findIndex((btn) => btn === targetBtn);

	moveToSlide(currentIndex < targetIndex, currentSlide, targetIndex);
	updatePagination(currentBtn, targetIndex);
});
