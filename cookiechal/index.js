const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const flag = 'flag{like_sugar_cookies}';

app.use(cookieParser());

app.get('/',(req,res)=>{
	if(!req.cookies.admin) res.cookie('admin',0);
	if(req.cookies.admin === '1')
		return res.send(flag);
	return res.send('Sorry, only admins can view the flag.');

});

app.listen(8080,()=>{
	console.log('Listening on port 8080');
});
