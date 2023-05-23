import React, { useState } from 'react'

import styles from './JsonForm.module.css'
import { Title } from '../Title'
import { FormPage } from '../FormPage'
import { NavButton } from '../NavButton'

import { Label } from '@/Components/Label'
import { InputField } from '@/Components/InputField'
import { RadioMenu } from '@/Components/RadioMenu'
import { CheckBox } from '@/Components/CheckBox'
import { type ComponentProps } from '@/Components'

import { type JsonFormPage, type JsonFormFile } from '@/Api'

interface JsonFormProps {
  json: JsonFormFile
  onSubmit: (value: string) => void
}

function JsonForm (prop: JsonFormProps): JSX.Element {
  const jsonData: JsonFormFile = prop.json

  const [page, setPage] = useState(0)
  const [data, setData] = useState<any[][]>(
    jsonData.page.map(i => {
      return new Array<any>(i.item.length)
    })
  )
  const setDataIndex = (idx: number, value: string[]): void => {
    const newdatas = [...data]
    newdatas[idx] = value

    setData(newdatas)
  }

  return (
    <div className={styles.contentmenu}>
      <Title title={jsonData.title} cap={{ height: 10 }}/>

      {jsonData.page.map((p, idx) => {
        return <BuildPage
          data={data[idx]}
          onvaluechange={value => { setDataIndex(idx, value) }}
          dataPage={p}
          visible={idx === page}
          key={idx} />
      })}

      <NavButton leftClick={() => { setPage(page - 1) }} rightClick={() => { setPage(page + 1) }} submitClick={() => { prop.onSubmit(JSON.stringify(data)) }}
      isFirstPage={page === 0} isLastPage={page === jsonData.page.length - 1}/>
      <div className='tinyinfo'>Form을 통해 비밀번호를 제출하세요.</div>
    </div>
  )
}

interface BuildPageProp {
  data: any[]
  onvaluechange: (value: any[]) => void
  dataPage: JsonFormPage
  visible: boolean
}
function BuildPage (prop: BuildPageProp): JSX.Element {
  const [datas, setDatas] = useState(prop.data ?? new Array<any>(prop.dataPage.item.length))
  const setDataIndex = (idx: number, value: any): void => {
    const newdatas = [...datas]
    newdatas[idx] = value

    setDatas(newdatas)
    prop.onvaluechange(datas)
  }
  return (
    <FormPage visible={prop.visible}>
      {prop.dataPage.item.map((i, idx) => {
        const newProp: ComponentProps & { key: number } = {
          cap: (idx === 0) ? { height: 48, text: prop.dataPage.name } : undefined,
          text: i.text,
          key: idx
        }
        const getNewDataProp: <T,>() => { value: T, onValuechange: (value: T | null) => void } = <T,>() => {
          return {
            value: (datas[idx] as T),
            onValuechange: (value: T | null) => { setDataIndex(idx, value) },
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
