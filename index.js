const app = require('express')();
const config = require('./config');
const path = require('path');

require('./middleware')(app);
require('./api')(app);

if(process.env.NODE_ENV === "production"){
	app.use(express.static('client/build'));
	app.get('*', (req, res)=>{
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

app.listen(config.port, () => {
	console.log(`listening to port ${config.port}`);
});
