export { RadioMenu } from './RadioMenu'
export { InputField } from './InputField'
export { Label } from './Label'
export { CheckBox } from './CheckBox'

export interface ComponentProps {
  cap?: { height: number, text?: string }
  summary: string
}

export type ComponentValueProps<T> = ComponentProps & {
  value?: T
  onValuechange?: (value: T | null) => void
  other?: true | boolean
}
