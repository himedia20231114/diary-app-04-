import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

function New(props) {
    return (
        <div>
            <Header title = "새 읽기 쓰기" 
                leftChild= {<Button text=" < 뒤로가기 " 
                            type="positive" onClick={()=>{console.log("뒤로가가 클릭됨!!")}}  />}
                />
            
        </div>
    );
}

export default New;