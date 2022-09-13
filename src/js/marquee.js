var skillboxContainer = document.querySelectorAll(".skillbox_container");
const box = document.querySelectorAll(".skillbox");
const marqueeInner = document.querySelectorAll(".marquee__inner");
const root = document.querySelector(":root");

const boxHeight = box[0].clientHeight;

const setBoxWidth = (box) => {
	box.style.width = boxHeight + "px";
};

box.forEach(setBoxWidth);

const setMarqueeInnerWidth = (node, i) => {
	node.style.width =
		boxHeight * skillboxContainer[i].children.length * 2 + "px";

	console.log(node.style.width);
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

for (let i = 0; i < 3; i++) {
	root.style.setProperty(
		"--marquee-offset-" + (i + 1),
		"-" + marqueeInner[i].clientWidth / 2 + "px"
	);
}

skillboxContainer = document.querySelectorAll(".skillbox_container");
console.log(skillboxContainer);
