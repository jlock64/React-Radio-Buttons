import React from 'react'
import PropTypes from 'prop-types'
import Radio from './radio'
import { map } from 'ramda'

/**
 * RadioGroup
 *
 * Create a group of radio buttons using a custom Radio Button
 *
 */
const RadioGroup = ({ items, value, onChange, customRadioButton }) => {
  const radio = item => (
    <Radio
      key={item.id}
      checked={value === item.value}
      onChange={_ => onChange(item.value)}
    >
      {customRadioButton(item.label)}
    </Radio>
  )
  return <div>{map(radio, items)}</div>
}

RadioGroup.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
  customRadioButton: PropTypes.func
}

export default RadioGroup
