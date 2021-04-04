import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../contexts/FormContext';
import styles from '../styles/components/Footer.module.css';

export default function Footer({ home }) {
  const { setIsRegisterModalOpen, setActualEmail } = useContext(FormContext);
  const [ emailValue, setEmailValue ] = useState('');

  useEffect(() => {
    setActualEmail('');
  }, [])

  function handleRegister() {
    if (emailValue === '') {
      alert("Digite um e-mail para se cadastrar");
      return;
    }
    setIsRegisterModalOpen(true);
    setActualEmail(emailValue)
    window.scrollTo(0, 0);
  }

  return (
    <footer className={styles.footer} >
      <div>
        <section>
          <h5>PARA DOADORES</h5>
          <span>Doações por kits escolares</span>
          <span>Faça sua doação por pix</span>
        </section>

        <section>
          <h5>PARA FAMÍLIAS</h5>
          <span>Kits escolares</span>
          <span>Escolas</span>
        </section>
      </div>

     { !home &&  <div>
        <input value={emailValue} onChange={(event) => setEmailValue(event.target.value)} placeholder="Insira seu e-mail" type="email"/>
        <button onClick={handleRegister} >CADASTRAR</button>
      </div>}
    </footer>
  )
}