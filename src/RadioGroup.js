import React from 'react'
import RadioInput from './RadioInput'

const RadioGroup = props => {
  return (
    <div className="pl2">
      <p className="flex mb2 f5 fw6 helvetica">
        {props.radioGroup.header}
        <span className="red ml1">*</span>
      </p>
      <div className="flex">
        {props.radioGroup.radios.map((item, index) => {
          return (
            <RadioInput
              key={'${name}${index}'}
              name={props.radioGroup.name}
              item={item}
            />
          )
        })}
      </div>
      <div className="flex">{/* <button type="submit">Submit</button> */}</div>
    </div>
  )
}

export default RadioGroup
