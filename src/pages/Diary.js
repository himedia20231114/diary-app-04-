import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryStateContext } from '../App';
import Viewer from '../components/Viewer'; 


function Diary(props) {
    // 글 상세 내용 출력 

    // /diary/변수값  : 라우터 에서 : /diary/:id 
    //  useParms Hook 에서 Path Variable 에서 넘어오는 변수 값을 불러 올 수 있음. 
    const {id} = useParams(); 

    // useNavigate Hook를 사용해서 뒤로 이동, 앞으로 이동 
    //   navigate (-1) : 이전 페이지로 이동 
    //   navigate (1) : 다음 페이지로 이동 
    //   navigate (-2) : 이전 이전 페이지로 이동 


    //context 의 상태값을 가지고 와서 id 필드의 내용의 객체를 추출 
    // Context 의 Provider에서 내려보준 상태 값을 가지고 옴 : data   :  [ {}, {}, {} ]
    const data = useContext(DiaryStateContext); 

    // useState  :  id 변수의 값으로 배열에서 검색된 객체를 저장 
    const [diary, setDiary] = useState(); 

    // id 변수를 가지고 검색된 내용(객체) 을 setDiary 에 주입 
    useEffect (  () => {    // 의존성 배열 [id, data] 값이 수정되면 함수가 작동됨  

        //객체 내부의 값을 비교 할때 같은 type로 비교 
        const matchDiary = data.find( (it) => String(it.id) === String(id) 
         ); 
         //matchDiary 의 값이 존재, 존재하지 않을 수 있음. 
         if (!matchDiary) {
            //matchDiary 의 값이 존재하지 않을때 작동
            alert ("해당 읽기가 존재하지 않습니다. / 페이지로 이동합니다. ") ; 
            navigate("/" , {replace: true}); 
         } else {
            //matchDiary 의 값이 존재 할때 작동 , setDiary를 사용해서 diary 에 값을 주입 
            setDiary(matchDiary); 
         }


    }
        , [id, data]
    ); 

    const navigate = useNavigate(); 

 //   const { content, emotionId, date} = diary ; 

    if (!diary) {
        return <div> 데이터가 로드 중입니다. </div>
    }else {
        const { content, emotionId, date} = diary ; 
    return (
        <div>
            <Header title = { ` ${id} 글의 상세내용  `}
                leftChild= {<Button text=" < 뒤로가기 " 
                            type="positive" onClick={()=> { navigate(-1)}}  />}
                rightChild= {<Button text=" 수정 하기 " 
                            type="negative" onClick={()=> { navigate(`/edit/${id}`) }}  />}
                />

            <Viewer {...diary} />      
        </div>
    );
}
}
export default Diary;