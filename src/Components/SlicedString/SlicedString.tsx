import React from 'react'

interface SlicedStringProps {
  text: string
}

function SlicedString (prop: SlicedStringProps): JSX.Element {
  const split = prop.text.split('\n')
  return (
  <span>
    {split.map((item, index) => {
      return index === split.length - 1
        ? <React.Fragment key={index}>{item}</React.Fragment>
        : <React.Fragment key={index}>{item}<br/></React.Fragment>
    })}
  </span>
  )
}

export default SlicedString
