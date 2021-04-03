import styles from '../styles/components/Input.module.css';
import {FiEyeOff, FiEye} from 'react-icons/fi';
import { useField } from '@unform/core';
import { useEffect, useRef, useState } from 'react';

export default function Input({ name, placeholder, type, ...rest }) {
  const inputRef = useRef();
  const [isPasswordVisible, setIsPasswordVisible ] = useState(false);
  const [ inputType, setInputType ] = useState(type);

  useEffect(() => {
    if(type == 'password') {
      { isPasswordVisible ? setInputType('text') : setInputType('password')}
    }
  }, [isPasswordVisible])

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
      <input {...rest} type={inputType} ref={inputRef} id={name} placeholder=" " />
      <label htmlFor={name} >{placeholder}</label>
      { type == "password" && (
        <>
         { isPasswordVisible ? <FiEye onClick={() => setIsPasswordVisible(false)} size={20}/> : <FiEyeOff onClick={() => setIsPasswordVisible(true)}   size={20} />}
        </>
      )}
      { error && <p>{error}</p>}
    </div>
  )
}