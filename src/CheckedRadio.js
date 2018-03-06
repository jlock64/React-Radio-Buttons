import React from 'react'

const checkedRadio = props => {
  const styles = {}
  return (
    <svg className="checked-radio" height="30" width="30">
      <circle
        cx="15"
        cy="15"
        r="9"
        stroke="#81bc01"
        stroke-width="2"
        fill="#fff"
      />
      <circle cx="15" cy="15" r="5" stroke-width="3" fill="#81bc01" />
    </svg>
  )
}

export default checkedRadio
