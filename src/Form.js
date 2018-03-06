import React from 'react'

const Form = props => {
  return <form onSubmit={props.action}>{props.children}</form>
}

export default Form
