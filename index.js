try {
	let clicks = 0;
	let on = 0
	let input = prompt("are you ready\ny/n")

	if (input == "y") {
		on = 1;
	}

	while (on >= 1) {
		console.log("clicks: " + clicks);
		prompt("type");
		clicks ++;
	}
} catch(error) {
	console.log("there was an error")
}
