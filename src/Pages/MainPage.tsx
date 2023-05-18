import React from 'react'

import { JsonForm } from '@/Components'

import styles from './MainPage.module.css'
import { getMockJsonData } from '@/Api'

function MainPage (): JSX.Element {
  return (
    <div className={styles.root}>
      <JsonForm json={getMockJsonData()} onSubmit={data => { console.log(data) }}/>
      <div className='tinyinfo' style={{ textAlign: 'center', margin: '16px 0px' }}>이 콘텐츠는 Google이 만들거나 승인하지 않았습니다.</div>
      <div className='tinyinfo' style={{ textAlign: 'center', margin: '16px 0px', fontSize: '24px' }}>설문지</div>
    </div>
  )
}

export default MainPage
