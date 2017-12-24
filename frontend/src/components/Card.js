import React from 'react';

const Card = (props) => { //함수형 컴포넌트. 클래스 개념이 아니다. props를 파라메터로 받는 것.단순히 데이터를 받아서 뿌려준다.
//	let classes = (props.favorite === 1) ? 'favorite active' : 'favorite'; //0 1;

	let classes ='';
	
	if (props.favorite === 1 ){
		classes = 'favorite active';
	}else{
		classes = 'favorite';
	}
      return (
        <div className="card" 
			onClick={()=>{props.cardLink(props.company_id)}}>
			<div className="thums">
				<div className="img"></div>
				<div className="logo"></div>
			  </div>
			<div className="info">
			  <h3>{props.recruit}</h3>
			  <div className="company">{props.company}</div>
			  <div className="rebate">채용보상금 
				  {props.rebate.toLocaleString('en')}원</div>
			</div>
			<div className="opt">
			  <div className="recom">
				  {(props.recom > 0) && <span>{props.recom} 명 추천</span>}</div>
			  <div className={classes}></div>
			</div>
		</div>
     )
}
//클릭할 때만 실행하기 위해서 함수를 한번 거쳐서 넘겨준다.
//하위의 컴포넌트를 실행하면 상위 것이 불려진다.
//<span>은 하나라는 뜻이다.
//props.   this.props와 같다.
//&&은 앞의 내용이 옳으면 표현
export default Card;