import React from 'react';
import './DiaryItem.css';
import {getEmotionImgById} from '../utils'; 
import Button from './Button'; 

function DiaryItem({id , emotionId, content, date}) {
    return (
        <div className="DiaryItem">
            <div className="img_section">
                <img src = {getEmotionImgById(emotionId)}  alt= {`emotion${emotionId}`} />
            </div>
            <div className="info_section">
                <div className="date_wrapper">
                    {new Date(parseInt(date)).toLocaleString}
                </div>
                <div className="content_wrapper">
                    {content.slice(0,25)}
                </div>
            </div>
            <div className="button_section">
                <Button text={"수정하기"} type={"default"} onClick = { () => {console.log("수정하기 클릭")}} /> 
            </div>

        </div>
    );
}

export default DiaryItem;