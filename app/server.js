
let axios = require("axios");
let express = require("express");
let app = express();

// load key from JSON file
let apiFile = require("../key.json");
let apiKey = apiFile["key"];

let port = 8000;
let hostname = "localhost"

app.get("/", function (req, res) {
	let zip = 19104;
	axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`).then(function (response) {
		console.log(`Sent GET request to api.openweathermap.org/data/2.5/weather for zip ${zip}`);
		res.json(response.data);
	});
	console.log("Sending request...")
});

app.listen(port, hostname, () => {
	console.log(`Listening at: http://${hostname}:${port}`);
});

/*
YOUR ANSWERS HERE

1.

2.

3.

4.

5.

*/
