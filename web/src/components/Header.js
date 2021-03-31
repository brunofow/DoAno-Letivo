import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormContext } from '../contexts/FormContext';
import styles from '../styles/components/Header.module.css';

export default function Header({ pageTitle, donor }) {
  const { setIsLoginModalOpen, setIsRegisterModalOpen, setDonor } = useContext(FormContext);

  useEffect(() => { 
    donor ? setDonor(true) : setDonor(false);
  }, [donor])

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

        <a onClick={() => setIsRegisterModalOpen(true)} >
          Cadastrar
        </a>
        <a onClick={() => setIsLoginModalOpen(true)}>
          Entrar
        </a>
      </div>
    </header>
  )
}