import React, { useRef, useEffect } from 'react'
import usePlaygroundFunMode from './hooks/usePlaygroundFunMode'

const LettersPlayGround = () => {
  const { FunImage, funModehandleKeyDown } = usePlaygroundFunMode();
  const playGroundRef = useRef(null);

  useEffect(
    () => {
      playGroundRef.current.focus();
    }, []
  );

  return (
    <>
      <input type="text" onKeyDown={funModehandleKeyDown}
        tabIndex="-1"
        id="playGround"
        ref={playGroundRef}
        style={{
          fontSize: '0.5rem',
          maxWidth: '1vw'
        }}
      >
      </input>
      { FunImage()}
    </>
  )
}

export default React.memo(LettersPlayGround);