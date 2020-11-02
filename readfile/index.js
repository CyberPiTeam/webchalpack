const express = require('express');
const fs = require('fs');
const app = express();

app.get('/',(req,res)=>{
	res.setHeader('content-type', 'text/html');
	if(req.query.file)
		return res.send(fs.readFileSync(req.query.file).toString());
	return res.send(fs.readFileSync('index.html').toString());
});

app.listen(8080,()=>{
	console.log('Listening on 8080.');
});
