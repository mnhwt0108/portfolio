let ageEl = document.getElementById("age");

// explain the Date() number: https://www.epochconverter.com/
setInterval(() => {
	let time = (new Date() - new Date(996598800000)) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
	ageEl.innerText = time.toString().substring(0, 12);
}, 50);