import React, { useRef, useEffect } from 'react'
import usePlaygroundTypeMode from './hooks/usePlaygroundTypeMode'
import usePlaygroundFunMode from './hooks/usePlaygroundFunMode'

const PlayGround = ({ fontSize, isTypeMode }) => {
  const { text, typeModeHandleKeyDown } = usePlaygroundTypeMode(isTypeMode);
  const { FunImage, funModehandleKeyDown } = usePlaygroundFunMode(isTypeMode);
  const playGroundRef = useRef(null);

  useEffect(
    () => {
      playGroundRef.current.focus();
    }, [isTypeMode]
  );

  return (
    <div onKeyDown={isTypeMode ? typeModeHandleKeyDown : funModehandleKeyDown}
      tabIndex="-1"
      className="playground"
      id="playGround"
      ref={playGroundRef}
      style={{
        fontSize: fontSize
      }}
    >
      { isTypeMode ? text : FunImage()}
    </div>
  )
}

export default React.memo(PlayGround);