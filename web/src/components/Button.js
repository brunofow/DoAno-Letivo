import styles from '../styles/components/Button.module.css';

export default function Button({ children, ...rest }) {
  return (
    <button {...rest} className={styles.button} >
      {children}
    </button>
  )
}