import { useState, useEffect } from "react";
import Header from '../components/Header';
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import RegisterModal from '../components/RegisterModal';
import Footer from "../components/Footer";
import { FiChevronsDown } from "react-icons/fi";
import api from "../services/api";
import styles from "../styles/pages/Parent.module.css";

import logo from "../styles/images/Mask Group.svg";
import useWindowDimensions from "../hooks/useWindowDimension";

export default function Parent() {
  const { height } = useWindowDimensions();
  const [kits, setKits] = useState([]);
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    const body = document.querySelector('body');
    isModalOpen ? body.classList.add(styles.noscroll) : body.classList.remove(styles.noscroll);
  }, [isModalOpen])

  async function loadKits() {
    const response = await api.get("/kits");
    setKits(response.data);
  }

  useEffect(() => {
    loadKits();
  }, []);

  return (
    <>
    <Header pageTitle="Como receber doação" />
      <div className={`${styles.container}`} >
        <div className={styles.stripe}></div>
        <div className={styles.firstSection} style={{ height }}>
          <div className={styles.detailsContainer}>
            <section>
              <article>
                <h1>Receber material escolar gratuito? Vem com a gente!</h1>
                <span>Doe kits escolares por série para quem necessita</span>
              </article>
              <Button onClick={() => setIsModalOpen(true)} >QUERO RECEBER MATERIAL</Button>
            </section>
            <img src={logo} alt="Materiais escolares" />
          </div>
          <div className={styles.seeMore}>
            <a href="#steps">
              <FiChevronsDown size={35} />
            </a>
          </div>
        </div>
        <h1 id="steps">Passo-a-passo</h1>
        <div className={styles.steps}>
          <div>
            <h2>1º</h2>
            <span>Cadastre seu filho em nossa plataforma</span>
          </div>
          <div>
            <h2>2º</h2>
            <span>
              Veja seu filho em nossa lista pronto para receber a doação
            </span>
          </div>
          <div>
            <h2>3º</h2>
            <span>Receba a doação na escola do seu filho</span>
          </div>
        </div>
        <div className={styles.kitSection}>
          <h2>Escolha o kit para seu filho</h2>
          <p>
            Confira o que contém cada kit e se ele está de acordo com o ano em
            que seu filho está matriculado
          </p>
        </div>
        <Carousel data={kits} />
      </div>
      <Footer />
      { isModalOpen && <RegisterModal setIsModalOpen={setIsModalOpen} /> }
    </>
  );
}
