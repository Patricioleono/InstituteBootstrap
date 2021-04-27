const time = document.getElementById('time');
const date = document.getElementById('date');

const invertal = setInterval(() => {
	const local = new Date();

	time.innerHTML = local.toLocaleTimeString();
	date.innerHTML = local.toLocaleDateString();
}, 1000);


var base = document.querySelectorAll('#base, .nav-item').length;
console.log(base);


