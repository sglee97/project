const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')();

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json()); // axios 통신시 필요한 구문. body로 넘어오는 것 중에 json을 인지
app.use(cors);

const user=[
	{ username : 'admin', userpass : '1234' },
	{ username : 'front', userpass : 'abcd' },
	{ username : 'back', userpass : 'end' },
]

app.post('/login', function(req,res){ //post받아오면 로그인
	
	let id = req.body.username;
	let pass = req.body.userpass;
	
	
	// 아이디 검증
	var idcheck = user.filter(function(v){ //배열만큼 펑션이 실행되면 같은 것들은 있는지
		return id === v.username;
	});
	
	if( idcheck.length > 0){ //아이디가 있다는 것
		if( idcheck[0].userpass === pass ){
			res.json({ success : 1, message : 'login success'});
		}else{
			res.json({ error : -1, message : 'no match password'});
		}
	} else {
		res.json({ success : 2, message : 'go to register' });
	}
	// 자바스크립트는 비동식이라서 한 줄씩 코드를 바로 실행 시킨다. 그래서 콜백 함수를 구현해서 알려줘서 함수를 실행 해야한다.
	// es6 promise pattern. es7 sync & async
	
	// 서버사이트 렌더링 방식(폼 태그 방식)은 자동새로고침이 없다.
});

const companyList = require('./data');

app.get('/company', function(req, res){ //받는 것
	res.json(companyList);
}); //http://localhost:4000/company

const server = app.listen(4000);
//-------------프론트엔드














