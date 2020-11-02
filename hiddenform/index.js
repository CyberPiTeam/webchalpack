const express = require('express');
const fs = require('fs');
const app = express();
const index = fs.readFileSync('index.html').toString();
const token = '<!---->';
const flag = 'flag{goofy_auth_checks}';

app.get('/',(req,res)=>{
	res.send(index);
});

app.get('/flag',(req,res)=>{
	let message;
	if(!req.query.reason)
		message = 'Request reason required.';
	else if(!req.query.name)
		message = 'Requester name required.';
	else if(!req.query.isAdmin || req.query.isAdmin === '0')
		message = 'Only admins may request the flag.';
	else message = flag;
	res.send(index.replace(token,message));
});

app.listen(8080,()=>{
	console.log('Listening on port 8080');
});
