import logo from './logo.svg';
import './App.css';
import React, { useReducer, useEffect } from 'react';

//Routing  처리 라이브러리 import  <== 요청 (/company) ==> 컴포넌트를 연결 
// Routes, Route  <== Controller 역활 : 요청 ==> View (컴포넌트) 연결 
// Link , useNavigete : 요청을 보내는 역활 
import {Routes, Route, Link, useNavigate} from 'react-router-dom';

import Header from './include/Header';
import Footer from './include/Footer';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import ButtonTest from './test/ButtonTest';
import ImgTest from './test/ImgTest';

// mockData 가짜 데이터 , 
const mockData = [
  {
    id : "mock1",
    date: new Date().getTime() - 1,
    content:"mock1", 
    emotionId : 1 
  },
  {
    id : "mock2",
    date: new Date().getTime() - 2,
    content:"mock2", 
    emotionId : 2 
  },
  {
    id : "mock3",
    date: new Date().getTime() - 3,
    content:"mock3", 
    emotionId : 3 
  },

]; 


/* 상태 관리 : context , 리덕스, 몹엑스 .... 
    - context 는 별도의 라이브러리 설치 없이 사용 
    - SPA 에서 컴포넌트 사이에 상태 (변수의 값) 을 전송 , 
    - 부모 => 자식  props를 사용해야만 전송 

    1. const DiaryStateContext = React.createContext() 를 사용해서 context 생성 
    2. Provider 를 사용해서 컴퍼넌트를 묶어 줘야함. , state 를 내려 보내 줄수 있다. 이벤트를 받아올 수 있다. 

    3. useContext : 상태 값을 가져와서 사용할. 
    4. useReducer 를 사용해서 context 의 상태 값을 변경함. 
*/

// 1. Context 선언 : 상태 값을 처리 , 이벤트 처리 
export const DiaryStateContext = React.createContext();   //상태값을 전송 하는 context
export const DiaryDispatchContext = React.createContext();  // 이벤트를 처리하는 context , 상태값을 변경 

//상태 값을 변경하는 reducer 함수 정의  
function reducer ( state, action) {
  switch (action.type) {
    case "INIT": 
      return action.data; 
    case "CREATE":
      return [action.data, ...state]; 

  }
}


function App() {

  //상태를 처리하는 변수 
  const [data , dispatch] = useReducer(reducer,[]); 


  // useEffect 컴포넌트가 로드될때 1번만 실행 
  // 컴포넌트가 처음 로드될때 dispatch 를 호출해서 data 에 mockData 의 값을 할당. 
  useEffect( () => {
    dispatch ({
        type:"INIT", 
        data:mockData,
    }); 
  }
    ,[]
  ); 

  // 하위 컴포넌트에서 요청하는 이벤트 처리 : onCreate, onUpdate, onDelete 
  const onCreate = (date, content, emotionId) => {

  }
  const onUpdate = () => {

  }
  const onDelete = () => {

  }

  return (
      // 2. context provider를 사용해서 상태를 처리할 하위 컴포넌트를 그룹핑 
      <DiaryStateContext.Provider value= {data} > 
      <DiaryDispatchContext.Provider value= {{onCreate, onUpdate, onDelete}}>

    <div className="App">
        <h1> 다이어리 APP </h1>

      <Header />
      <hr />
      <p /><p /><p /><p /><p /><p />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element= {<New />}></Route>
        <Route path="/diary/:id" element= {<Diary />}> </Route>
        <Route path="/edit/:id" element= {<Edit />}> </Route>

        <Route path="/btntest" element =  {<ButtonTest />}> </Route>
        <Route path="/imgtest" elememt = {<ImgTest />}> </Route>
      </Routes>

      <p /><p /><p /><p /><p /><p />
      <hr />
      <Footer /> 
    </div>

    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>

  );
}

export default App;
