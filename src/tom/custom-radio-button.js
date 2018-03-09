import React from 'react'
import 'tachyons'

const customRadioButton = label => ({ checked, handleClick }) => (
  <div>
    <div className="" onClick={handleClick}>
      {checked ? (
        <Checked onClick={handleClick} />
      ) : (
        <Unchecked onClick={handleClick} />
      )}
      <div className="dib">
        <span className="relative" style={{ top: '-8px' }}>
          {label}
        </span>
      </div>
    </div>
  </div>
)

const Checked = ({ onClick }) => {
  return (
    <svg className="checked-radio" height="30" width="30" onClick={onClick}>
      <circle
        cx="15"
        cy="15"
        r="9"
        stroke="#81bc01"
        strokeWidth="2"
        fill="#fff"
      />
      <circle cx="15" cy="15" r="5" strokeWidth="3" fill="#81bc01" />
    </svg>
  )
}

const Unchecked = ({ onClick }) => {
  return (
    <svg className="unchecked-radio" height="30" width="30" onClick={onClick}>
      <circle
        cx="15"
        cy="15"
        r="9"
        stroke="#757575"
        strokeWidth="2"
        fill="#fff"
      />
    </svg>
  )
}

export default customRadioButton
