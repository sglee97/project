import React from 'react';
import './Company.css';
import axios from 'axios';

import Card from '../components/Card'

class Company extends React.Component {
	
	constructor(){
		super();
		
		this.state = {
			companyArray : [],
			type : '전체'
		}
		
		this.handleClick = this.handleClick.bind(this);
		this.handleCategory = this.handleCategory.bind(this);
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
	
	handleClick(company_id){
		console.log(company_id)
		this.props.history.push(`/company/${company_id}`) //push는 저장을 시키는 것. 히스토리 저장된다.
	}
	
	handleCategory(e){ //e는 클릭되는 정보를 가지고 온다.
		this.setState({ type : e.target.innerHTML }) //클릭할 때 마다 state변경 즉, 렌더링 다시한다. //e.target.innerHTML. e.target에서 innerHTML을 가져온다.
	}
	
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
		 
		 		 
		 const { companyArray, type } = this.state; //state를 자져와서 렌더링을 다시 해준다.
		 
		 const newArray = companyArray.filter((v)=>{
			 
			 if( type === '전체' ){ //타입이 전체면 전체를 리턴
			 	return v;
			 }
			 
			 return v.type === type;
		 
		 }); //전체는 13개 배열이다. 배열을 타입에 따라 나눠서 새로운 배열로 만들어 준다.
		 
		 const list = newArray.map((v)=>{ //es6방식으로 내부에서 맵구현
				return (
					<Card
						cardLink={this.handleClick} //함수를 넘겨 받는아서 card.js로 넘긴다.
						key={v.id} //맵을 돌릴 때 필요한 것
						company_id = {v.id}
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
			  <ul className="category">
				  <li onClick={this.handleCategory}>전체</li>
				  <li onClick={this.handleCategory}>프론트엔드개발자</li>
				  <li onClick={this.handleCategory}>백엔드개발자</li>
				  <li onClick={this.handleCategory}>앱개발자</li>
			  </ul>	  
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