import React, { useState } from 'react'

import styles from './JsonForm.module.css'
import { Title } from '../Title'
import { FormPage } from '../FormPage'
import { NavButton } from '../NavButton'

import { Label, InputField, RadioMenu, CheckBox, type ComponentProps } from '@/Components'

import { type JsonFormPage, type JsonFormFile } from '@/Api'

interface JsonFormProps {
  json: JsonFormFile
  onSubmit: (value: string) => void
}
type PageResult = Record<string, string | string[] | null>

function JsonForm (prop: JsonFormProps): JSX.Element {
  const jsonData: JsonFormFile = prop.json

  const [page, setPage] = useState(0)
  const [data, setData] = useState<Record<string, PageResult>>(
    jsonData.page.reduce(
      (acc, cur) => ({ ...acc, [cur.name]: cur.item.reduce((acc, cur) => ({ ...acc, [cur.name]: null }), {}) }),
      {})
  )
  const setDataIndex = (idx: string, value: PageResult): void => {
    const newdatas = Object.assign(data)
    newdatas[idx] = value

    setData(newdatas)
  }

  return (
    <div className={styles.contentmenu}>
      <Title title={jsonData.title} cap={{ height: 10 }}/>

      {jsonData.page.map((p, idx) => {
        return <BuildPage
          data={data[p.name]}
          onvaluechange={value => { setDataIndex(p.name, value) }}
          dataPage={p}
          visible={idx === page}
          key={idx} />
      })}

      <NavButton
        leftClick={() => { setPage(page - 1) }}
        rightClick={() => { setPage(page + 1) }}
        submitClick={() => { prop.onSubmit(JSON.stringify(data)) }}
      isFirstPage={page === 0} isLastPage={page === jsonData.page.length - 1}/>
      <div className='tinyinfo'>Form을 통해 비밀번호를 제출하세요.</div>
    </div>
  )
}

interface BuildPageProp {
  data: PageResult
  onvaluechange: (value: PageResult) => void
  dataPage: JsonFormPage
  visible: boolean
}
function BuildPage (prop: BuildPageProp): JSX.Element {
  const [datas, setDatas] = useState(prop.data)
  const setDataIndex = <T,>(idx: string, value: T): void => {
    const newdatas = Object.assign(datas)
    newdatas[idx] = value

    setDatas(newdatas)
    prop.onvaluechange(datas)
  }
  return (
    <FormPage visible={prop.visible}>
      {prop.dataPage.item.map((i, idx) => {
        const newProp: ComponentProps & { key: number } = {
          cap: (idx === 0) ? { height: 48, text: prop.dataPage.text } : undefined,
          text: i.text,
          key: idx
        }
        const getNewDataProp: <T,>() => { value: T, onValuechange: (value: T | null) => void } = <T,>() => {
          return {
            value: (datas[idx] as T),
            onValuechange: (value: T | null) => { setDataIndex(i.name, value) },
            other: i.other
          }
        }
        const newItemProp = {
          items: i.items ?? []
        }
        switch (i.type) {
          case 'label':
            return <Label {...newProp}/>
          case 'field':
            return <InputField {...newProp} {...getNewDataProp<string>()} />
          case 'radio':
            return <RadioMenu {...newProp} {...getNewDataProp<string>()} {...newItemProp} />
          case 'box':
            return <CheckBox {...newProp} {...getNewDataProp<string[]>()} {...newItemProp} />
          default:
            throw new Error()
        }
      })}
    </FormPage>
  )
}

export default JsonForm
