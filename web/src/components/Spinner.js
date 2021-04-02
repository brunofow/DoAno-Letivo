import styles from '../styles/components/Spinner.module.css'


export default function Spinner({ size, color }) {
  return (
    <div className={styles.load}>
      <div className={styles.spin} style={{ width: size, height: size, borderTopColor: color ? color : '#FFFFFF'}} ></div>
    </div>
  )
}