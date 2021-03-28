import { useState, useEffect } from 'react';
import Button from "../components/Button";
import styles from "../styles/pages/Parent.module.css";
import { FiChevronsDown } from "react-icons/fi";

import logo from "../styles/images/Mask Group.svg";
import useWindowDimensions from '../hooks/useWindowDimension';


export default function Parent() {
  const { height, width } = useWindowDimensions();
  const [ teste, setTeste ] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.stripe}></div>
      <div className={styles.firstSection} style={{ height }} >
        <div className={styles.detailsContainer} >
        <section>
          <article>
            <h1>Receber material escolar gratuito? Vem com a gente!</h1>
            <span>Doe kits escolares por série para quem necessita</span>
          </article>
          <Button  >QUERO FAZER UMA DOAÇÃO</Button>
        </section>
        <img src={logo} alt="Materiais escolares" />
        </div>
        <div className={styles.seeMore}>
      <a href="#">
        <FiChevronsDown size={35} />
      </a>
      </div>
      </div>
      <h1>Passo-a-passo</h1>
    </div>
  );
}
