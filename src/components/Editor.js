import React from 'react';
import './Editor.css'; 
import {emotionList} from '../utils'; 
import EmotionItem from './EmotionItem';

function Editor({initData, onSubmit}) {

    const handleChangeEmotion = () => {
        console.log('이벤트 전송 잘됨 (Editor : handleChangeEmotion 함수')
    }

    return (
        <div className="Editor">
            <h4> 오늘의 날짜 </h4>
            <div className="input_wrapper">
                <input type="date" /> 
            </div>

            {/* 이모티지를 출력 하는 블락 */}
            <div className="editor_section">
                <h4> 오늘의 감정</h4>
                <div className="input_wrapper emotion_list_wrapper">
                   {
                   emotionList.map( (it) => (
                        <EmotionItem key={it.id} {...it} 
                            onClick={handleChangeEmotion}  
                            isSelected={true}
                            />
                   ) )} 
                </div>
            </div>
            <div className="editor_section"></div>
            <div className="editor_section bottom_section"></div>
        </div>
    );
}

export default Editor;