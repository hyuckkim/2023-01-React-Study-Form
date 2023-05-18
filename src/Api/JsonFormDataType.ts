export interface JsonFormFile {
  title: string
  page: JsonFormPage[]
}

export interface JsonFormPage {
  name: string
  item: JsonFormItem[]
}

interface JsonFormItem {
  type: 'label' | 'field' | 'radio' | 'box'
  text: string
  items?: string[]
  other?: true
}
