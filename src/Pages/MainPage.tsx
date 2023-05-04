import { BlueCap, Title, Panel} from "@/Components"

import styles from './MainPage.module.css';

function MainPage() {
    return (
        <div className={styles.root}> 
            <div className={styles.contentmenu}>
                <Panel cap={{height: 10}}>
                    <Title title="GDSC 한국공학대학교 멤버 모집" />
                </Panel>
                <Panel cap={{height: 48, text:"개인 정보 관련 질문"}}>
                </Panel>
            </div>
        </div>
    )
   }
   
export default MainPage
   