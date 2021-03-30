import styles from '../styles/components/Footer.module.css';


export default function Footer() {
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

      <div>
        <input placeholder="Insira seu e-mail" type="email"/>
        <button>CADASTRAR</button>
      </div>
    </footer>
  )
}