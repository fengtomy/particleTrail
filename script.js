const container = document.querySelector(".anime-container");
let a = 20;
let l = 110;

for (let i = 0; i < l; i++) {
	const angle = 0.1 * i;
	const x = a * angle * Math.cos(angle) + window.innerWidth / 2;
	const y = a * angle * Math.sin(angle) + window.innerHeight / 2;
	const n = 15;
	for (let j = 0; j < n; j++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		container.appendChild(dot);
		const size = anime.random(5, 10);
		dot.style.width = size + "px";
		dot.style.height = size + "px";
		dot.style.left = x + anime.random(-15, 15) + "px";
		dot.style.top = y + anime.random(-15, 15) + "px";
		dot.style.opacity = "0";
	}
}

anime({
	loop: true,
	easing: "linear",
	targets: document.querySelectorAll(".dot"),
	opacity: [
		{ value: 1, duration: 50, delay: anime.stagger(2) },
		{ 
			value: 0, 
			duration: function() { return anime.random(500, 1500); }
		}
	],
	width: { value: 2, duration: 500, delay: anime.stagger(2) },
	height: { value: 2, duration: 500, delay: anime.stagger(2) },
	translateX: {
		value: function() {
			return anime.random(-30, 30);
		},
		duration: 1500,
		delay: anime.stagger(2)
	},
	translateY: {
		value: function() {
			return anime.random(-30, 30);
		},
		duration: 1500,
		delay: anime.stagger(2)
	}
});
