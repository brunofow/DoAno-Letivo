import { ChangeEvent, useRef, useEffect, useCallback, useState } from 'react';
import { useField } from '@unform/core';

import uploadIcon from '../styles/images/icons8-usuário-homem-com-círculo-100 1.svg'

import styles from '../styles/components/ImageInput.module.css';

const ImageInput = ({name, placeholder, ...rest}) => {
  
  const inputRef = useRef();

  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [ preview, setPreview ] = useState(defaultValue);
  const [updatedFile, setUpdatedFile ] = useState('');

  const handlePreview = useCallback((e) => {
    const file = e.target.files?.[0];

    if(file) {
      setPreview(null)
    }

    const validTypes = ['png', 'PNG', 'jpg', 'JPG', 'jpeg', 'JPEG'];

    const valid = validTypes.filter(e => {
      if(file?.name.includes(e)){
        return e;
      }
    })

    if(!file?.name.includes(valid[0])) {
      setPreview(null);
      setUpdatedFile('');
      alert('Por favor insira a imagem no formato, .png ou .jpg')
      return;
    }

    const previewURL = URL.createObjectURL(file);
    setUpdatedFile(file.name);

    setPreview(previewURL);
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      }
    })
  }, [fieldName, registerField])

  function pickNewImage() {
    document.getElementById(name).click();
  }

  return (
    <>
      
      <div className={styles.inputBox}>
      <div onClick={pickNewImage} className={styles.preview}>{preview && <img src={preview} alt="Preview" width="100" />}</div>
        <input id={name} type="file" ref={inputRef} onChange={handlePreview} accept="image/x-png,image/gif,image/jpeg" {...rest} />
        <label htmlFor={name}>
          <img src={uploadIcon} alt="Upload" />
        </label>
      </div>
      
    </>
  )
}

export default ImageInput;