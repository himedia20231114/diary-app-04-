import React, { useEffect, useState }  from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import {DiaryDispatchContext, DiaryStateContext} from '../App'; 
import Editor from '../components/Editor';



function Edit(props) {
    // /eidt/:id  <== 파라미터의 id 값을 가져오기 
    const params = useParams();         // params.id
    const {id} = useParams();           // id           <== 구조 분해 할당 : ES6 

    const navigate = useNavigate(); 
    
    // App.js 에서 context 에서 DiaryStateContext로 부터 data <== 배열 [객체, 객체, 객체]
    const data = useContext(DiaryStateContext); 

    //data 배열로 부터 id 값이 들어간 일기를  저장하는 state 
    const [diary, setDiary] = useState(); 

    // useEffect 를 사용해서 Eidi 컴포넌트가 처음 렌더링 될때  작동, 의존성 배열의 state가 수정될때 
        //함수 작동 
    // data 배열의  id 에 해당 하는 읽기 정보를 끄집어 내서 setDiary 를 수정 
        // 의존성 배열 : id, data 의 값이 수정될때 함수가 랜더링 
    useEffect(
        ()=>{
            // setDiary를 사용해서 diary 상태를 변경 , diary : id 값에 해당 하는 일기 
            const matchDiary = data.find( (it) => String (it.id) === String(id)  ); 
            if (matchDiary) {  // data 배열에서 해당 일기가 검색되었을때 
                setDiary(matchDiary); 
            }else { // data 배열에서 값이 검색이 안되었을때 
                window.alert('해당 일기가 존재하지 않습니다. ');  
                navigate('/' , {replace:true}); 
            }


        }, [id, data]
    );


    //useContext 를 사용해서 하위 컴포넌트에서 props 연결없이 바로 호출 해서 사용함. 
    //App.js  :  Context 에서 onUpdate, onDelete 이베트를 가지고 옴  
    const {onUpdate, onDelete} = useContext (DiaryDispatchContext); 

    //뒤로가기 버튼 

    const goBack = () => {
        navigate(-1);
    }
    // 삭제 하기 클릭 : /edit/id 
    //  confirm : 확인(true), 취소 (false)
    const onClickDelete = () => {
      if (
         window.confirm(`정말로 일기를 삭제 하시겠습니까? 일기 번호 : ${params.id}` )
         ){
            // confirm 에서 확인(true) 블락이 실행 
            onDelete(id); 
            //삭제 이후 이동 할 페이지 
            navigate('/', {replace:true})
         }
    }

    const onSubmit = () => {
        // 수정한 내용을 처리하는 함수 
    }

    return (
        <div>
            <Header title = "글 수정 하기" 
                leftChild= {<Button text=" < 뒤로가기 " 
                            type="positive" onClick={goBack}  />}
                rightChild= {<Button text=" 삭제 하기 " 
                            type="negative" onClick={onClickDelete}  />}
                />
            <Editor initData= {diary} onSubmit={onSubmit} />
            
        </div>
    );
}

export default Edit;