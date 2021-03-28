import Button from "../components/Button";
import styles from "../styles/pages/Home.module.css";
import logo from '../styles/images/hero.svg';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.stripe}></div>
      <div className={styles.firstSection}>
        <section>
          <article>
            <h1>Doar material escolar para quem precisa? Vem com a gente!</h1>
            <span>Doe kits escolares por série para quem necessita</span>
          </article>
          <Button>QUERO FAZER UMA DOAÇÃO</Button>
        </section>

        <img src={logo} />
      </div>
    </div>
  );
}
