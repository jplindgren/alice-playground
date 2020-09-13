import { useState, useCallback, useEffect } from 'react'

const usePlaygroundTypeMode = (isTypeMode) => {
  const [text, setText] = useState('');

  const validateInput = (keyCode) => {
    //number or letter
    if (keyCode >= 48 && keyCode <= 90)
      return true;
    //spacebar
    if (keyCode === 32)
      return true;

    return false;
  }

  const validateCommand = (keyCode) => {
    //backspace
    if (keyCode === 8)
      return true;

    if (keyCode === 13)
      return true;

    return false
  }

  const handleCommand = useCallback((keyCode) => {
    //backspace
    if (keyCode === 8)
      setText(text.slice(0, -1))

    if (keyCode === 13)
      return true;

    return false
  }, [text, setText])

  const typeModeHandleKeyDown = useCallback((e) => {
    e.persist()
    if (validateInput(e.keyCode))
      return setText(prev => prev + e.key)

    if (validateCommand(e.keyCode))
      return handleCommand(e.keyCode)

    //tab is 9, windows key is 93(l) 91 (r) cannot prevent default?
    if (e.keyCode === 9) {
      e.preventDefault();
    }
  }, [setText, handleCommand])

  useEffect(() => {
    if (!isTypeMode)
      setText('')
  }, [isTypeMode])

  return {
    typeModeHandleKeyDown,
    text
  }
}

export default usePlaygroundTypeMode;