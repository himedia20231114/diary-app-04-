import React, { useContext } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import DiaryList from '../components/DiaryList';
import { DiaryStateContext } from '../App';

function Home(props) {

    // Context provider에서 내려보내주는 상태 값을 불러옴 : useContext  
    //  data <== mockData       [ {}, {} , {}]
    const data = useContext(DiaryStateContext); 



    return (
        <div>
            <Header 
                title = "2024년 3월"
                leftChild={<Button text={" < "} type="positive" onClick={ ()=> {console.log("왼쪽 버튼 클릭!!")}} />}
                rightChild={<Button text={" > "} type="negative" onClick={ ()=> {console.log("오른쪽 버튼 클릭!!")}}/>}
            />
            <DiaryList data={data} />

        </div>
    );
}

export default Home;