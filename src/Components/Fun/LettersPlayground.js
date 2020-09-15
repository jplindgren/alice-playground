import React, { useRef, useEffect } from 'react'
import usePlaygroundFunMode from './hooks/usePlaygroundFunMode'

const LettersPlayGround = () => {
  const { FunImage, funModehandleKeyDown } = usePlaygroundFunMode();
  const playGroundRef = useRef(null);

  useEffect(
    () => {
      playGroundRef.current.focus();
      document.addEventListener("keydown", function (inEvent) {
        funModehandleKeyDown(inEvent)
      });
      return () => {
        document.removeEventListener("keydown")
      }
    }, [funModehandleKeyDown]
  );

  return (
    <>
      <div
        tabIndex="-1"
        className="playground"
        id="playGround"
        ref={playGroundRef}
        style={{
          fontSize: 40
        }}
      >
        {FunImage()}
      </div>
    </>
  )
}

export default React.memo(LettersPlayGround);