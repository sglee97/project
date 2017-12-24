import React from 'react';
import axios from 'axios';
import './Details.css';

class Details extends React.Component {
	
	constructor(){ //response data 
		super();
		
		this.state = { //React.Component->componentDidMount()->렌더링
			details : null,
		}
	}
	
	//요청하는 것
	componentDidMount(){
		
		const company_id = this.props.match.params.id; //id를 부르는 방법
		console.log(this.props.match.params.id)
		//axios.get('http://localhost:4000/company/1' + company_id)
		axios.get(`http://localhost:4000/company/${company_id}`) //~ 더불 쿼터
			.then((response)=>{
				this.setState({ details : response.data} )
			console.log(response.data);
		});
	}
     render(){
		
	const {details}= this.state;
	
		 
      return(
         /*<div>{this.props.match.params.id}</div> //mat단에 요청 시작과 동시에 번호를 넣으면 나올 수 있게*/
		  <div className="details">
		  	<div className="left">
				<div className="photo"></div>
				<div className="desc">
					<div className="desc_info">
						<h2>{details && details.recruit}</h2>
						<div>{details && details.name}</div>
					</div>
					<div className="desc_body">
						{details && details.name} 채용상세내용
					</div>
				</div>
			</div>
			<div className="right">
				{details && details.recommendation} 추천
			</div>
		  </div>
      )
   }
}
//<h2>채용정보{details.recruit}</h2> 처음 렌더링에서는 0이고 두번쨰부터는 data 가 있기 때문에 나온다. 그래서 데이터가 없을 때는 실행을 하지 않게 한다.
//details && details.name 디테일이 있으면 실행
export default Details;