import React, { useState, useCallback, useEffect } from "react";
import alice1 from './../../images/alice1.jpg'
import mamae1 from './../../images/mamae1.jpg'
import papai1 from './../../images/papai1.jpg'

const usePlaygroundFunMode = (isTypeMode) => {
  const [letter, setLetter] = useState('');
  //const [image, setImage] = useState(null);

  const validateInput = (keyCode) => {
    //a, m, p
    const validCodes = [65, 77, 80]

    return validCodes.includes(keyCode)
  }

  const funModehandleKeyDown = useCallback((e) => {
    e.persist()
    if (validateInput(e.keyCode)) {
      return setLetter(e.keyCode);
    }
  }, [setLetter])

  // const loadImage = imageName => {
  //   import(`../../images/${imageName}.jpg`).then(image => {
  //     setImage(image);
  //   });
  // };

  const getImage = (keyCode) => {
    if (keyCode === 65)
      return alice1;
    else if (keyCode === 77)
      return mamae1;
    else if (keyCode === 80)
      return papai1;
  }

  useEffect(() => {
    if (isTypeMode)
      setLetter('');

  }, [setLetter, isTypeMode])

  const FunImage = () => (
    letter && <img src={getImage(letter)} alt="" />
  );

  return {
    FunImage,
    funModehandleKeyDown
  }
}

export default usePlaygroundFunMode