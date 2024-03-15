import React, { useState } from 'react';
import './Editor.css'; 
import {emotionList , getFormattedDate} from '../utils'; 
import EmotionItem from './EmotionItem';
import Button from './Button';
import { useNavigate } from 'react-router-dom';


function Editor({initData, onSubmit}) {

    //글 쓴 전체 내용을 담는 state  <== String, Number, Boolean, Object:객체, 배열 
    const [state, setState] = useState({
        date : getFormattedDate(new Date()), 
        emotionId : 3, 
        content : "", 
    }); 

    // 선택된 날짜 수정 하기 
    const handleChangeDate = (e) => {
        setState (
            {...state, date:e.target.value}
        ); 
    }


    // 취소하기 버튼에서 사용 하는 useNavigate 
    const navigate = useNavigate(); 

    // 선택한 이모션의 번호를 받아서 state 의 emotionId 필드의 값을 수정 
    // key <=  e 
    const handleChangeEmotion = (e) => {
       setState({
            ...state, emotionId:e
       }); 
    }
    // textarea 의 값이 변경 되면 작동 되는 함수 
    const handleChangeContent = (e) => {
        setState({
            ...state, content: e.target.value
        }); 
    }

    // 기존의 state 의 값을 호출 하는 컴포넌트로 전송 
    const handleSubmit = () => {
        onSubmit(state); 
    }



    return (
        <div className="Editor">
            <h4> 오늘의 날짜 </h4>
            <div className="input_wrapper">
                <input type="date" value={state.date}
                    onChange = {handleChangeDate}
                /> 
            </div>

            {/* 이모티지를 출력 하는 블락 */}
            <div className="editor_section">
                <h4> 오늘의 감정</h4>
                <div className="input_wrapper emotion_list_wrapper">
                   {
                   emotionList.map( (it) => (
                        <EmotionItem key={it.id} {...it} 
                            onClick={handleChangeEmotion}  
                            isSelected={state.emotionId === it.id}
                            />
                   ) )} 
                </div>
            </div>

            {/* textarea 글을 쓰는 블락  */}
            <div className="editor_section">
                <h4> 오늘의 일기 </h4>
                <div className="input_wrapper"> 
                    <textarea 
                        placeholder='오늘은 어땟나요'
                        value = {state.content}
                        onChange = {handleChangeContent}
                        /> 
                </div>

            </div>

            {/* 버튼 블락 : 취소하기, 작성 완료  */}
            <div className="editor_section bottom_section">
                <Button text= {"취소하기"} type = {"negative"} onClick = { ()=> {navigate('/', {replace:true})}}   />
                <Button text={"작성완료"} type = {"positive"} onClick= {handleSubmit} />
            </div>
        </div>
    );
}

export default Editor;