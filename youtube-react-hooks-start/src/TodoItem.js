import React, { useState }  from 'react'

export default function TodoItem({title, id, completed}) {
  const [checked,setCecked]= useState (completed)
  const cls = ['cls']

  if (checked)
  {
    cls.push ('completed')
  }
  return (
    <li className= {cls.join(' ')} >
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange ={() => setCecked(!checked)}
          />
        <span>{title}</span>

        <i
          className="material-icons red-text"
        >
          delete
        </i>
      </label>
    </li>
  )
} 