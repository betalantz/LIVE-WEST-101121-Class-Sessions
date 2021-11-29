// const fetch = require('node-fetch')
import fetch from "node-fetch"
import 'dotenv/config'


fetch("https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
		"x-rapidapi-key": process.env.X_RAPIDAPI_KEY
	}
})
.then(response => response.json())
.then(console.log)
.catch(err => {
	console.error(err);
});