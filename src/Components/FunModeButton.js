import React from 'react'

const FunModeButton = ({ onClick, isTypeMode }) => {
  return (
    <button id="btnFun" className="fun-button" onClick={onClick} >{isTypeMode ? 'Type Mode' : 'Fun Mode'}</button>
  )
}


export default React.memo(FunModeButton)