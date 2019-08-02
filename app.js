const express = require('express'),
	app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(8080, () => {
	console.log('Server running on 127.0.0.1:8080');
});
