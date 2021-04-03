import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';

import styles from '../styles/components/Select.module.css';

export default function Select({ name, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "#FFC800" : "#FFFFFF",
      "&:hover": {
        background: state.isSelected ? "#FFC800" : 'rgba(255, 200, 0, 0.2)'
      }
    }),
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ?'2px solid #FFC800' : '2px solid #D1D5DB',
      borderRadius: 8,
      "&:hover": {
        borderColor: state.isFocused ?'2px solid #FFC800' : '2px solid #D1D5DB'
      }
    })
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <div className={styles.selectBox} style={{ marginBottom: error && '3rem'}}>
    <ReactSelect
      styles={customStyles}
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      {...rest}
    />
    { error && <span>{error}</span>}
    </div>
  );
};