export { RadioMenu } from './RadioMenu'
export { InputField } from './InputField'
export { Label } from './Label'
export { CheckBox } from './CheckBox'

export interface FormComponentProps {
  cap?: { height: number, text?: string }
  text: string
}

export type ComponentValueProps<T> = FormComponentProps & {
  value?: T
  onValuechange?: (value: T | null) => void
  other?: true | boolean
}
