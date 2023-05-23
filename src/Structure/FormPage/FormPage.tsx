import React from 'react'

interface FormPageProps {
  children?: JSX.Element[] | JSX.Element
  visible?: boolean
}

function FormPage (prop: FormPageProps): JSX.Element {
  return <>{(prop.visible ?? false) && prop.children}</>
}

export default FormPage
