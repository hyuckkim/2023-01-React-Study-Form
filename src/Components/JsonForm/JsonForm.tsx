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
  console.log(jsonData)

  return (
    <div className={styles.contentmenu}>
      <Title title={jsonData.title} cap={{ height: 10 }}/>
      {jsonData.page.map((p, idx) => {
        return BuildPage(data[idx], value => { setDataIndex(idx, value) }, p, idx === page)
      })}
      <NavButton leftClick={() => { setPage(page - 1) }} rightClick={() => { setPage(page + 1) }} submitClick={() => { prop.onSubmit(JSON.stringify(data)) }}
      isFirstPage={page === 0} isLastPage={page === jsonData.page.length - 1}/>
    </div>
  )
}
function BuildPage (
  data: any[],
  onvaluechange: (value: string[]) => void,
  dataPage: JsonFormPage,
  visible: boolean): JSX.Element {
  const [datas, setDatas] = useState(data ?? new Array<string>(dataPage.item.length))
  const setDataIndex = (idx: number, value: string): void => {
    const newdatas = [...datas]
    newdatas[idx] = value

    setDatas(newdatas)
    onvaluechange(datas)
  }
  return (
    <FormPage visible={visible}>
      {dataPage.item.map((i, idx) => {
        console.log(i)
        const itemProp: any = {
          summary: i.text,
          items: i.items,
          value: datas[idx],
          other: i.other,
          onvaluechange: (value: string) => { setDataIndex(idx, value) }
        }
        if (idx === 0) {
          itemProp.cap = { height: 48, text: dataPage.name }
        }
        switch (i.type) {
          case 'label':
            return Label(itemProp)
          case 'field':
            return InputField(itemProp)
          case 'radio':
            return RadioMenu(itemProp)
          case 'box':
            return CheckBox(itemProp)
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
