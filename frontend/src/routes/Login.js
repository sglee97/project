import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

import './Login.css';

class Login extends React.Component {
	
	constructor() {
		super();
		
		this.state = {
			username : '',
			userpass : ''
		}
		
		this.handleUserName = this.handleUserName.bind(this);
		this.handleUserPass = this.handleUserPass.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(){
		
		
		axios.post('http://localhost:4000/login', { //키값을 들고 서버에 전해준다.
			username : this.state.username, //백엔드에 post로 던져존다.
			userpass : this.state.userpass })
		.then((response)=>{ //응답한 내용이 server로 부터 들어온다.
			
			//let result = reponse.data;
			let { success, error } = response.data; //es6문법
			let { history } = this.props;
			
			if( success === 1) { // 3개면 넘버 타입까지 같은지
				this.props.history.push('./company'); //history등록 후 뒤로가기 기능
				//상위 컴포넌트에서 받는 3가지 히스토리, 매치, 로케이션 url위치
			}else if ( success === 2) {
				this.props.history.push('./register');
			}else if ( error === -1) {
				alert('비밀번호가 맞지 않습니다.');
				return;
				//this.props.history.push('./login');
			}
			
			//console.log(response.data); json데이터가 넘어오는지
		});
	}
	// url {객체 데이터}
	// function(response)
	// jquery의 ajax로 데이터를 서버에 보낸다.
	
	handleUserName(e){ //메소드
		this.setState({ username : e.target.value}); //가져온 것을 넣어준다.
	}
	
	handleUserPass(e){
		this.setState({ userpass : e.target.value});
	}
	
     render(){
      return(
		  <div className="login-bg">
			 <div className="login">
				<Form>
					<Form.Field>
						<label>User Name</label>
						<input placeholder='User Name' onChange=
							{this.handleUserName}/>
					</Form.Field>
					<Form.Field>
						<label>User Password</label>
						<input placeholder='User Password' onChange=
							{this.handleUserPass}/>
					</Form.Field>
					<Button onClick={this.handleSubmit}>Submit</Button>
				  </Form>
			 </div>
		 </div>
      )
   }
}
//symentic UI
export default Login;