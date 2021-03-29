import {useState, useEffect} from 'react';
import api from '../services/api';
import Carousel from '../components/Carousel'
import Button from '../components/Button'
import styles from '../styles/pages/Donor.module.css'
import {FiChevronsDown} from 'react-icons/fi'
import logo from '../styles/images/hero.svg'
import useWindowDimensions from '../hooks/useWindowDimension';

export default function Donor() {
  const { height } = useWindowDimensions();
  const [ kits, setKits ] = useState([]);

  async function loadKits() {
    const response = await api.get('/kits');
    setKits(response.data);
  }

  useEffect(() => {
    loadKits();
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.stripe}></div>
      <div className={styles.firstSection} style={{ height }}>
        <div className={styles.detailsContainer}>
          <section>
            <article>
              <h1>Doar material escolar para quem precisa? Vem com a gente!</h1>
              <span>Doe kits escolares por série para quem necessita</span>
            </article>
            <Button>QUERO FAZER UMA DOAÇÃO</Button>
          </section>
          <img src={logo} alt="Doação material escolar" />
        </div>
        <div className={styles.seeMore}>
          <a href="#steps">
            <FiChevronsDown size={35} />
          </a>
        </div>
      </div>
      <h1 id="steps" className={styles.stepsTitle} >Veja como doar</h1>
      <div className={styles.steps}>
        <div>
          <h2>Primeiramente</h2>
          <span>Você pode efetuar seu cadastro, mas não se preocupe, não é obrigatório.</span>
        </div>
        <div>
          <h2>Logo em seguida</h2>
          <span>Você pode verificar uma listagem com todos os alunos.</span>
        </div>
        <div>
          <h2>Pra finalizar</h2>
          <span>Você pode escolher um de nossos kits e pagar com PIX.</span>
        </div>
      </div>
      <div className={styles.kitSection} >
        <h2 id="kits" >Escolha  o kit para doar agora</h2>
        <p>Cada ano tem um kit específico pois os materiais diferem conforme a necessidade do que se estuda</p>
      </div>
      <Carousel data={kits} price />
    </div>
  );
}

  