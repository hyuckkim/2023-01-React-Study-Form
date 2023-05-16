import React from 'react'

import { JsonForm } from '@/Components'

import styles from './MainPage.module.css'
import { getMockJsonData } from '@/Api'

function MainPage (): JSX.Element {
  return (
    <div className={styles.root}>
      <JsonForm json={getMockJsonData()} onSubmit={data => { console.log(data) }}/>
    </div>
  )
}

export default MainPage
