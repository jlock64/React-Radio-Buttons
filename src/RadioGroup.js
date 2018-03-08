import React from 'react'
import RadioInput from './RadioInput'

const RadioGroup = props => {
  console.log('radioGroup Props: ', props)
  return (
    <div className="pl2">
      <p className="flex mb2 f5 fw6 helvetica">
        {props.radioGroup.header}
        <span className="red ml1">*</span>
      </p>
      <div className="flex">
        {props.radioGroup.radios.map((radio, index) => {
          console.log('radio: ', radio)
          return (
            <RadioInput
              key={index}
              name={props.radioGroup.name}
              radio={radio}
            />
          )
        })}
      </div>
    </div>
  )
}

export default RadioGroup
