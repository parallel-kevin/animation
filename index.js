//xukaiwen@baixing.com
setAnimation("hongbao.jpg", 10, 3000);

function setAnimation(src, num, duration = 0, delay = 0) {
	for (let i=0; i<num; i++) {
		let image = new Image();
		image.src = src;
		image.style.animationDelay = delay + "ms";
		image.style.animationName = "animation-drop";
		image.addEventListener('animationend', function () {
			image.style.marginTop = "100vh";
		})

		image.onload = function () {
			let width = getComputedStyle(image).getPropertyValue('width');
			let height = getComputedStyle(image).getPropertyValue('height');
			image.style.marginTop = "-" + height;

			let container = document.getElementById('animation-drop');
			image.style.webkitAnimationDuration = Math.random()*500 + duration + "ms";
			image.style.left = Math.random()*100 + "%";
			container.appendChild(image);
		}
	}
}