const skillboxContainer = document.querySelectorAll(".skillbox_container");
const box = document.querySelectorAll(".skillbox");
const marqueeInner = document.querySelectorAll(".marquee__inner");
const root = document.querySelector(":root");

const boxHeight = box[0].clientHeight;

const setBoxWidth = (box) => {
	box.style.width = boxHeight + "px";
};

box.forEach(setBoxWidth);

const setMarqueeInnerWidth = (node) => {
	node.style.width = boxHeight * (box.length / marqueeInner.length) * 2 + "px";
};

marqueeInner.forEach(setMarqueeInnerWidth);

const cloneContainer = (node) => {
	const clone = node.cloneNode(true);
	node.after(clone);
};

skillboxContainer.forEach(cloneContainer);

root.style.setProperty(
	"--marquee-offset",
	"-" + marqueeInner[0].clientWidth / 2 + "px"
);
