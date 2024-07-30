import React from 'react'

function PillButton(props) {
  return (
    <button
    onClick={props.onClick}
    className={`btn btn-warning rounded-pill mx-1 ${props.active ? "btn-light" : ""} hover:bg-gray-100` }>
        {props.content ? props.content : 'Hello'}
    </button>
  )
}

export default PillButton