import React from 'react';
import './DiaryList.css'; 
import Button from './Button';
import DiaryItem from './DiaryItem';

function DiaryList({data}) {
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
                    <Button text={"새 글쓰기"} type= {"positive"} onClick = {() => {console.log("새 글쓰기 클릭됨!!!")}}  />
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