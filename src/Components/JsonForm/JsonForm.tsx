import React, { useState } from 'react'

import styles from './JsonForm.module.css'
import { Title } from '../Title'
import { Label } from '../Label'
import { InputField } from '../InputField'
import { RadioMenu } from '../RadioMenu'
import { CheckBox } from '../CheckBox'
import { FormPage } from '../FormPage'
import { NavButton } from '../NavButton'

interface JsonFormProps {
  json: string
  onSubmit: (value: string) => void
}

function JsonForm (prop: JsonFormProps): JSX.Element {
  const jsonData: JsonFormFile = JSON.parse(prop.json)

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
        switch (i.type) {
          case 'label':
            return <Label summary={i.text} key={idx} cap={(idx === 0) ? { height: 48, text: prop.dataPage.name } : undefined}/>
          case 'field':
            return <InputField summary={i.text} key={idx} cap={(idx === 0) ? { height: 48, text: prop.dataPage.name } : undefined}
              value={datas[idx]} onValuechange={(value: string | null) => { setDataIndex(idx, value) }}/>
          case 'radio':
            return <RadioMenu summary={i.text} key={idx} cap={(idx === 0) ? { height: 48, text: prop.dataPage.name } : undefined}
              items={i.items ?? []} value={datas[idx]} onValuechange={(value: string | null) => { setDataIndex(idx, value) }}/>
          case 'box':
            return <CheckBox summary={i.text} key={idx} cap={(idx === 0) ? { height: 48, text: prop.dataPage.name } : undefined}
              items={i.items ?? []} value={datas[idx]} onValuechange={(value: string[] | null) => { setDataIndex(idx, value) }}/>
          default:
            throw new Error()
        }
      })}
    </FormPage>
  )
}

interface JsonFormFile {
  title: string
  page: JsonFormPage[]
}

interface JsonFormPage {
  name: string
  item: JsonFormItem[]
}

interface JsonFormItem {
  type: 'label' | 'field' | 'radio' | 'box'
  text: string
  items?: string[]
  other?: true
}

export default JsonForm
