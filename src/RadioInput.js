import React from 'react'
import CheckedRadio from './CheckedRadio'
import UncheckedRadio from './UncheckedRadio'

const RadioInput = props => {
  console.log(props)
  const styles = {
    radioAppearance: {
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      appearance: 'none'
      //   borderRadius: '50%',
      //   width: '16px',
      //   height: '16px',
      //   border: '2px solid #81bc01',
      //   transition: '0.2s all linear',
      //   outline: 'none',
      //   marginRight: '5px',
      //   position: 'relative'
    }
  }

  const handleChangeOption = event => {
    console.log('target.value: ', event.target.value)
    if (event.target.value) {
      console.log('valid!')
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
        id={props.item.id}
        name={props.name}
        value={props.item.value}
        onChange={handleChangeOption}
      />
      <label className="gray helvetica" htmlFor={props.item.id}>
        {props.item.label}
      </label>
    </div>
  )
}

export default RadioInput
