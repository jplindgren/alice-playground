import React from 'react'

const TextEditor = () => {
  return (
    <textarea
      className="full-editor"
      style={{
        background: 'lightgray',
        height: '100vh',
        width: '100vw',
        border: 0,
        fontSize: '10rem'
      }}
    />
  )
}

export default TextEditor