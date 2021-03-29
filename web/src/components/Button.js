import styles from '../styles/components/Button.module.css';

export default function Button({ children }) {
  return (
    <button className={styles.button} >
      {children}
    </button>
  )
}