import React from 'react'
import CheckedRadio from './CheckedRadio'
import UncheckedRadio from './UncheckedRadio'

const RadioInput = props => {
  const styles = {
    radioAppearance: {
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      appearance: 'none'
    }
  }

  const handleChange = (event, checked) => {
    console.log('onchangeValue when clicked', props.radio.value)
    if (props.radio.value) {
      console.log('i was checked')
    }
  }

  return (
    <div className="mr3 flex items-center">
      <UncheckedRadio />
      <CheckedRadio />
      <input
        style={styles.radioAppearance}
        className="mr2"
        type="radio"
        id={props.radio.id}
        name={props.name}
        checked={props.checked}
        onChange={handleChange}
      />
      <label className="gray" htmlFor={props.radio.id}>
        {props.radio.label}
      </label>
    </div>
  )
}

export default RadioInput
