import React from 'react';
import {emotionList} from '../utils'; 
import  './Viewer.css'; 

function Viewer({content, emotionId,name}) {
// emotionID 를 가지고 emotionList에서 해당 ID에 대한 객체를 추출 
// emotionList : [ {}, {}, {}, {}, {} ]
const emotionItem = emotionList.find(
    (it) => String (emotionId) === String (it.id)
); 


    return (
        <div className="Viewer">
            {/* 이미지를 적용 */}
            <section>
                <h4> 오늘의 감정</h4>
                <div> 
                    <img alt={emotionItem.name} src={emotionItem.img} /> 
                    <div className="emotion_descript"> {emotionItem.name}</div>
                </div>
            </section>

            {/* 읽기의 내용을 출력 */ }
            <section>
                <h4> 오늘의 읽기 </h4>
                <div className="content_wrapper">
                    <p>{content}</p>
                </div>
            </section>
            
        </div>
    );
}

export default Viewer;