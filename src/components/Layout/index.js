import React from 'react'
import './Layout.css'

export default function (props) {
  const { children } = props
  return (
    <div className='main-layout'>
      <div className='content'>
        {children}
      </div>
    </div>
  )
}
