import React from 'react'
import PropTypes from 'prop-types'

/**
 * Radio Component
 *
 * This component uses render props to allow for the user to
 * control the look and feel of the radio button, but it keeps
 * track of the state of the button, it can either be true or false
 */
const Radio = ({ checked, onChange, children }) => (
  <div style={{ display: 'inline' }}>
    <input
      type="radio"
      checked={checked}
      onChange={onChange}
      style={{ display: 'none' }}
    />
    {children({
      checked,
      handleClick: () => {
        if (onChange) {
          onChange()
        }
      }
    })}
  </div>
)

Radio.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.func
}

export default Radio
