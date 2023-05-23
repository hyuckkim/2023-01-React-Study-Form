export interface JsonFormFile {
  title: string
  page: JsonFormPage[]
}

export interface JsonFormPage {
  text: string
  name: string
  item: JsonFormItem[]
}

interface JsonFormItem {
  type: 'label' | 'field' | 'radio' | 'box'
  name: string
  text: string
  items?: string[]
  other?: true
}
