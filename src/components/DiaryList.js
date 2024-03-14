import React from 'react';
import './DiaryList.css'; 
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';

function DiaryList({data}) {

    // useNavigate : 함수, 이벤트 특정 요청 ==> 라우터 요청에대한 컴포넌트 출력 
    const navigate = useNavigate();


    return (
        <div className="DiaryList">
            {/* select box, 새글쓰기 버튼  */}
            <div className="menu_wrapper">
                <div className="left_col">
                    <select> 
                        <option value="newer"> 최신 순 </option>
                        <option value="order"> 오래된 순 </option>
                    </select>
                </div>
                <div className="right_col">
                    <Button text={"새 글쓰기"} type= {"positive"} onClick = {() => {navigate('/new')}}  />
                </div>
            </div>

            {/*DiaryItem을 처리 블락 */}
            <div className="list_wrapper">
                {
                    data.map( (it) => (
                            <DiaryItem key={it.id} {...it} />
                    )    ) 
                }
                
            </div>  

        </div>
    );
}

export default DiaryList;