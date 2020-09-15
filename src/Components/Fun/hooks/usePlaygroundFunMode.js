import React, { useState, useCallback } from "react";

const usePlaygroundFunMode = () => {
  const [letter, setLetter] = useState('');

  const validateInput = (keyCode) => {
    //a, b, c m, p
    const validCodes = [65, 66, 67, 77, 80]

    return validCodes.includes(keyCode)
  }

  const funModehandleKeyDown = useCallback((e) => {
    const keyCode = e.keyCode;
    if (validateInput(keyCode)) {
      e.target.value = ''
      return setLetter(keyCode);
    }
  }, [setLetter])

  const generateRandomSufix = (max) => Math.floor(Math.random() * Math.floor(max))

  const FunImage = () => (
    letter && <img src={`/images/${String.fromCharCode(letter)}${generateRandomSufix(2)}.jpg`} alt="" style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
  )

  return {
    FunImage,
    funModehandleKeyDown
  }
}

export default usePlaygroundFunMode