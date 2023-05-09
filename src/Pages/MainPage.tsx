import {Title, RadioMenu} from "@/Components"

import styles from './MainPage.module.css';

function MainPage() {
    return (
        <div className={styles.root}> 
            <div className={styles.contentmenu}>
                <Title title="GDSC 한국공학대학교 멤버 모집" 
                cap={{height: 10}}/>
                <RadioMenu summary="개인정보 수집 동의 (GDSC 멤버 모집 안내에 사용 후 파기됩니다)" items={["예", "아니오"]} 
                cap={{height: 48, text:"개인 정보 관련 질문"}}/>
            </div>
        </div>
    )
   }
   
export default MainPage
   