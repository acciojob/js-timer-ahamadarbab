// write js code here if required
const timer = document.getElementById("timer");

function updateTimer() {
	const now = new Date();

	timer.textContent = now.toLocaleString();
}

setInterval(updateTimer, 1000);