const express = require('express');
const app = express();

app.get('/',(req,res)=>{
	res.send('I am node');
});

app.listen(80,()=>{
	console.log('Listening on 80.');
});
