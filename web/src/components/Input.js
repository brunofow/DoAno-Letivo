import styles from '../styles/components/Input.module.css';
import { useField } from '@unform/core';
import { useEffect, useRef } from 'react';

export default function Input({ name, placeholder, ...rest }) {
  const inputRef = useRef();

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <div className={styles.inputBox} style={{ marginBottom: error && '3rem'}} >
      <input {...rest} ref={inputRef} id={name} placeholder=" " />
      <label htmlFor={name} >{placeholder}</label>
      { error && <p>{error}</p>}
    </div>
  )
}