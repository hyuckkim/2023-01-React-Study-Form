import { type JsonFormFile } from './JsonFormDataType'
import FormJson from './test.json'

export function getMockJsonData (): JsonFormFile {
  return FormJson as JsonFormFile
}
