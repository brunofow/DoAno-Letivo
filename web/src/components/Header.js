import styles from '../styles/components/Header.module.css';

export default function Header({ pageTitle }) {
  return (
    <header className={styles.header} >
      <h2>DoAno Letivo</h2>

      <div>
        <a href="#steps" >
          {pageTitle}
        </a>
        <a href="#kits">
          Escolha um kit
        </a>
        <span>
          |
        </span>

        <a href="#" >
          Cadastrar
        </a>
        <a href="#">
          Entrar
        </a>
      </div>
    </header>
  )
}