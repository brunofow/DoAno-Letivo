import { useContext, useEffect } from 'react';
import { Link } from '@reach/router';
import { FormContext } from '../contexts/FormContext';
import styles from '../styles/components/Header.module.css';

export default function Header({ pageTitle, donor, home }) {
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
        <div className={styles.detailButtons}>
        <a href="#steps" >
          {pageTitle}
        </a>
        <a href="#kits">
          Escolha um kit
        </a>
        </div>

        { !home && <span >|</span>}

        { !home && (
          <div className={styles.accountButtons}>
          <a onClick={() => setIsRegisterModalOpen(true)} >
            Cadastrar
          </a>
          <a onClick={() => setIsLoginModalOpen(true)}>
            Entrar
          </a>
          </div>
        )}
      </div>
    </header>
  )
}