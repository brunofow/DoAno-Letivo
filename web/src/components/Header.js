import { Link } from 'react-router-dom';
import styles from '../styles/components/Header.module.css';

export default function Header({ pageTitle, setIsLoginModalOpen }) {
  return (
    <header className={styles.header} >
      <Link to="/">
        <h2>DoAno Letivo</h2>
      </Link>

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
        <a onClick={() => setIsLoginModalOpen(true)}>
          Entrar
        </a>
      </div>
    </header>
  )
}