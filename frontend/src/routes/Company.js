import React from 'react';
import './Company.css';
import axios from 'axios';

import Card from '../components/Card'

class Company extends React.Component {
	
	constructor(){
		super();
		
		this.state = {
			companyArray : [	]
		}
	}
	
	//react http통신 or ajax
	
	componentDidMount(){ //최초에 1회 실행하고 렌더링을 뿌린다. 그리고 state
		
		axios.get('http://localhost:4000/company')  //키값을 들고 서버에 전해준다.
		.then((response)=>{	
			//console.log(resonse.data);
			const data = this.state.companyArray.concat(response.data.company);
			
			this.setState({ 
				companyArray : data
			});
		});
	}
	//concat 배열과 배열을 합친다.
	/*componentWillUpdate(){}*/
	
     render(){
		 
		/* const companyArray = [ //배열과 객체로 만들어 준다.
			 { company :"GS SHOP", recuit:"프론트엔드", rebate:1000000,
					 recom:13, favorite:0},
			 { company :"망고플레이트", recuit:"벡엔드", rebate:1000000,
					 recom:13, favorite:1}
		 ]*/
		 /*
		 1. HTTP, AJAX 의 GET 방식 으로 데이터를 서버로 부터 받아온다.
		 2. this.state 넣어준다.
		 3. 렌더링이 map값을 뿌려 줄 때 키값를 잘 맞춰준다.
		 어느 시점에 통신을 하고 데이터를 보여 줄 것인지 중요하다.
		 */
		 
		 		 
		 const { companyArray } = this.state;
		 
		 const list = companyArray.map((v)=>{ //es6방식으로 내부에서 맵구현
				return (
					<Card
						key={v.id}
						company={v.name}
						recruit={v.recruit}
						rebate={v.rebate}
						recom={v.recommendation}
						favorite={v.favorite}
					/>
					)
		 });

      return(
		  <div>
			  <div className="list">
				  {list}
				
			  </div>
		 </div>
      )
   }
}
/*
 <Card 
	company="GS SHOP"
	recuit="프론트엔드" 
	rebate={1000000} //숫자는 자바스크립트로 넘긴다. , 는 데이터보다 디스플레이할 때 넣는다.
	recom={13}
	favorite={0}
	/>
*/
/*
react map function으로 리스트(데이터) 기반으로 화면에 뿌려주기
card는 하나의 컴포넌트다.
thums 이미지
{}자바스크립트 변수
*/
export default Company;