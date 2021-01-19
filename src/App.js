import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Comment {
//   state = {
//     isLoading : true,
//     groups : []
//   };

//   async commponetDidMount() {
//     const response = await fetch('/api/groups');
//     const body = await response.json();
//     this.setState({ groups : body, isLoading : false });
//   }

//   render() {
//     const {groups, isLoading} = this.state;

//     if(isLoading) {
//       return <p>Loading...</p>
//     }

//     return (
//       <div className="App">
//         <header className="black-nav">
//           <div className="App-intro">
//             <h2>회원 정보</h2>
//             {groups.map(group => 
//               <div key={group.id}>
//                 {group.name}
//               </div>)}
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

// index.js 파일이 App.js 의 파일을 index.html 에 박아 넣어 주세요.
// 리액트에서는 html -> jsx
function App() {
  let posts = '강남 고기 맛집';

  // [] 배열이 남는다. -> [a,b]
  // a : '남자 코트 추천' -> State Data
  // b : 데이터 변경 함수 -> State Modify Data Function
  // [10, 100]; -> 변수에 담고 싶다. -> var [a,b] = [10, 100];
  // a : 10, b : 100
  // 변경사항이 생겼을때 스무스하게 변경하고 싶다. -> useState 를 사용해야함
  let [a,b] = useState(['남자 코트 추천', '여자 코트 추천']); 

  const [message, setMessage] = useState("");

  React.useEffect(() => {
    fetch('/api/hello')
      .then(Response => Response.text())
      .then(message => {
        setMessage(message);
    });
  }, []);

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">{message}</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
    // <div className="App">
    //   <div className="black-nav">
    //     <div>개발 Blog</div>
    //   </div>
    //   <div>
    //     <h1>Hello SHOP</h1>
    //     <p className="blcak-nav">회원 기능</p>
    //     <p>
    //       <a href="http://localhost:8080/members/new">회원 등록</a>
    //     </p>
    //     <p>상품 기능</p>
    //     <p>주문 기능</p>
    //   </div>
      
    //   <div className="list">
    //     <select style={{fontSize : '20px'}}>
    //       <option value="">회원선택</option>
    //     </select>
    //     <h3> {a} </h3>
    //     <p>2월 17일 발행</p>
    //     <hr/>
    //   </div>
    // </div>
  );
}

export default App;
