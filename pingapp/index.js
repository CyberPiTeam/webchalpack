const express = require('express');
const fs = require('fs');
const {execSync} = require('child_process');
const app = express();
const index = fs.readFileSync('pub/index.html').toString();
const token = '<!---->';

app.use(express.static('./pub'));

app.get('/flag',(req,res)=>{
	let message;
	if(!req.query.ip)
		message = 'Ip required to ping.';
	else
		message = execSync(`ping -c 1 ${req.query.ip}`);
	res.send(index.replace(token,message));
});

app.listen(8080,()=>{
	console.log('Listening on port 8080.');
});
