// set Interval(func|code, delay(ms), arg1, arg2, ...)



let seconds = 0;
function Clock() {
	seconds += 1;
	console.log(`Seconds passed: ${seconds}`);
}
ClockId = setInterval(Clock, 1000);


// To stop it:
setTimeout(clearInterval, 5000, ClockId);
