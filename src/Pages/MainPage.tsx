import {Title, RadioMenu} from "@/Components"

import styles from './MainPage.module.css';
import { useState } from "react";

function MainPage() {
    const [formData, setFormData] = useState([0,0,0,0,0]);
    function setFormDataIndex(idx: number, value: any) {
        const data = [...formData];
        data[idx] = value;
        setFormData(data);
    }
    return (
        <div className={styles.root}> 
            <div className={styles.contentmenu}>
                <Title title="GDSC 한국공학대학교 멤버 모집" 
                cap={{height: 10}}/>
                <RadioMenu summary="개인정보 수집 동의 (GDSC 멤버 모집 안내에 사용 후 파기됩니다)" items={["예", "아니오"]} 
                cap={{height: 48, text:"개인 정보 관련 질문"}}
                onValuechange={(value) => {setFormDataIndex(0, value)}}/>
                
                <button onClick={() => {console.log(formData)}}>제출</button>
            </div>
        </div>
    )
   }
   
export default MainPage
   