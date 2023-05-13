import {Title, RadioMenu, InputField, FormPage, Label, NavButton, CheckBox} from "@/Components";

import styles from './MainPage.module.css';
import { useState } from "react";

function MainPage() {
    const [formData, setFormData] = useState(new Array(23));
    const [page, setPage] = useState(0);
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
                <FormPage visible={page == 0}>
                    <RadioMenu summary="개인정보 수집 동의 (GDSC 멤버 모집 안내에 사용 후 파기됩니다)" items={["예", "아니오"]}
                    cap={{height: 48, text:"개인 정보 관련 질문"}}
                    onValuechange={(value) => {setFormDataIndex(0, value)}}/>
                    <InputField summary="이름" onValuechange={(value) => {setFormDataIndex(1, value)}} value={formData[1]}/>
                    <InputField summary="전공" onValuechange={(value) => {setFormDataIndex(2, value)}} value={formData[2]}/>
                    <RadioMenu summary="재학 상태" items={["재학중", "휴학중"]} value={formData[3]}
                    onValuechange={(value) => {setFormDataIndex(3, value)}}/>
                    <RadioMenu summary="학년(휴학생은 복학할 학년을 선택해 주세요)" items={["1학년", "2학년", "3학년", "4학년"]} value={formData[4]}
                    onValuechange={(value) => {setFormDataIndex(4, value)}}/>
                    <InputField summary="전화번호" onValuechange={(value) => {setFormDataIndex(5, value)}} value={formData[5]}/>
                    <InputField summary="이메일" onValuechange={(value) => {setFormDataIndex(6, value)}} value={formData[6]}/>
                </FormPage>
                <FormPage visible={page == 1}>
                    <Label summary="GDSC Member의 일원으로 임하는 자세에 대해서 설명해 주세요. \n이 활동에 얼마나 집중할 수 있는지, GDSC 활동으로 이루고 싶은 것들을 설명해 주세요."
                    cap={{height: 48, text:"기본 정보 관련 질문"}} />
                    <RadioMenu summary="3개월 동안 꾸준하게 활동 가능 한가요? (학기중과 방학 모두 포함)" items={["예", "아니오"]} value={formData[8]}
                    onValuechange={(value) => {setFormDataIndex(8, value)}}/>
                    <RadioMenu summary="1주일에 투자할 수 있는 시간을 선택해 주세요" items={["1시간 이내", "3시간 이내", "5시간 이내", "10시간 이내"]} other value={formData[9]}
                    onValuechange={(value) => {setFormDataIndex(9, value)}}/>
                    <RadioMenu summary="매월 월요일 10시 정기 세미나 참여 여부 (1시간 이내, 카메라 필수)" items={["네", "아니오"]} value={formData[10]}
                    onValuechange={(value) => {setFormDataIndex(10, value)}}/>
                    <InputField summary="GDSC 일반 멤버로 지원하게 된 지원 동기를 작성해 주세요 \n(700자내외)" onValuechange={(value) => {setFormDataIndex(11, value)}} value={formData[11]}/>
                    <InputField summary="동아리 또는 커뮤니티 또는 스터디를 운영하거나 참여한 경험이 있다면 적어 주세요(선택)" onValuechange={(value) => {setFormDataIndex(12, value)}} value={formData[12]}/>
                    <InputField summary="팀을 이끌어보거나 다른 사람들에게 무엇을 가르쳐준 경험에 대해 이야기 해 주세요." onValuechange={(value) => {setFormDataIndex(13, value)}} value={formData[13]}/>
                    <InputField summary="GDSC 활동으로 이루고 싶은 것들을 간단히 설명해주세요" onValuechange={(value) => {setFormDataIndex(14, value)}} value={formData[14]}/>
                    <InputField summary="GDSC 활동 중에 어떤 것이 가장 기대되나요?" onValuechange={(value) => {setFormDataIndex(15, value)}} value={formData[15]}/>
                </FormPage>
                <FormPage visible={page == 2}>
                    <Label summary="관심 있는 기술 분야와 프로젝트 진행 경험 그리고 본인의 갈등과 문제 해결방법에 대해서 설명해 주세요"
                    cap={{height: 48, text:"기술 관련 질문"}} />
                    <CheckBox summary="다룰 줄 아는 언어를 선택해주세요" items={["C", "C++", "C#", "Python", "Javascript", "Kotlin", "PHP", "Java"]} other value={formData[16]}
                    onValuechange={(value) => {setFormDataIndex(16, value)}}/>
                    <CheckBox summary="GDSC 스터디 참여 희망 분야(없다면 기타를 선택해 주세요)" items={["Android (자바 또는 코틀린 지식 필수)", "IOS", "Spring or Spring Boot (자바 지식 필수)", "Front-End", "Go - Backend (다른 언어 경험 필수)", "Computer Science", "DevOps"]} other value={formData[17]}
                    onValuechange={(value) => {setFormDataIndex(17, value)}}/>
                    <InputField summary="희망 스터디와 관련된 공부 또는 프로젝트를 해본 경험이 있다면 적어주세요" onValuechange={(value) => {setFormDataIndex(18, value)}} value={formData[18]}/>
                    <InputField summary="가장 관심 있는 기술 분야와 이유는 무엇인가요?\n그리고 이 기술에 대한 어떤 경험을 하셨나요?" onValuechange={(value) => {setFormDataIndex(19, value)}} value={formData[19]}/>
                    <InputField summary="프로젝트를 진행해 보신 적이 있다면 어떠한 갈등 상황 또는 문제점이 발생했고 이를 어떻게 해결하셨나요?" onValuechange={(value) => {setFormDataIndex(20, value)}} value={formData[20]}/>
                    <InputField summary="Github, 블로그, 포트폴리오 주소 등 (선택)" onValuechange={(value) => {setFormDataIndex(21, value)}} value={formData[21]}/>
                    <InputField summary="지원서에 담지 못한 내용이 있다면 적어주세요(선택)" onValuechange={(value) => {setFormDataIndex(22, value)}} value={formData[22]}/>
                </FormPage>
                <NavButton leftClick={() => setPage(page - 1)} rightClick={() => setPage(page + 1)} submitClick={() => console.log(formData)}
                    isFirstPage={page == 0} isLastPage={page == 2}/>
            </div>
        </div>
    )
   }
   
export default MainPage
   