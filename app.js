const express = require('express'),
	app = express();

app.get('/', (req, res) => {
	res.send('Home Route');
});

app.listen(8080, () => {
	console.log('Server running on 127.0.0.1:8080');
});
