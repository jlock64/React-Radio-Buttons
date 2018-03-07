import React, { Component } from 'react'
import PropTypes from 'prop-types'
import combine from '../lib/combine-string-lists'
import R from 'ramda'

const RadioButtonGroup = props => {
  const { chronic, acute_prn } = props

  let _chronic, _acute_prn

  const submit = e => {
    e.preventDefault()
    console.log('chronic', _chronic.checked)
    console.log('acute_prn', _acute_prn.checked)
    _chronic.checked = false
    _acute_prn.checked = false
  }

  const className = combine(`mr2`, props.className)

  const styles = {
    radioGreen: {
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      appearance: 'none',
      borderRadius: '50%',
      width: '16px',
      height: '16px',
      border: '2px solid #81bc01',
      transition: '0.2s all linear',
      outline: 'none',
      marginRight: '5px',
      position: 'relative'
    }
  }

  const handleChange = event => {
    console.log('event.target.value:', event.target.value)
  }

  const isChecked = () => {
    const selectedInput = document.getElementById('pain-type1')
    if (selectedInput.checked) {
      console.log('I am checked!')
      selectedInput.style.border = '5px solid #81bc01'
      console.log('selectedInput.style.border', selectedInput.style.border)
    }
  }

  return (
    <form className="flex items-center" onSubmit={submit}>
      <div className="flex mr2">
        <input
          id="pain-type1"
          className={styles.radioGreen}
          style={styles.radioGreen}
          name="pain-type"
          type="radio"
          defaultChecked={chronic}
          ref={input => (_chronic = input)}
          onChange={isChecked}
        />
        <label htmlFor="pain-type1">Chronic</label>
      </div>
      <div className="flex mr2">
        <input
          id="pain-type2"
          className={className}
          name="pain-type"
          type="radio"
          defaultChecked={acute_prn}
          ref={input => (_acute_prn = input)}
          onChange={event => {
            handleChange(event)
          }}
        />
        <label htmlFor="pain-type2">Acute or PRN</label>
      </div>
      <button>Console values</button>
    </form>
  )
}

RadioButtonGroup.defaultProps = {
  chronic: false,
  acute_prn: false
}

RadioButtonGroup.propTypes = {
  chronic: PropTypes.bool.isRequired,
  acute_prn: PropTypes.bool.isRequired
}

export default RadioButtonGroup
