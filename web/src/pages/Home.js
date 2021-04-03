import { Link, navigate } from "@reach/router";
import { FiChevronsDown } from "react-icons/fi";
import useWindowDimensions from "../hooks/useWindowDimension";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/pages/Home.module.css";

import logo from "../styles/images/hero.svg";
import family from "../styles/images/Croods - Party Time (1) 1.svg";
import hand from "../styles/images/Hands - Show 1.svg";
import book from "../styles/images/Hands - Book 1.svg";
import { useEffect } from "react";

export default function Home() {
  const { height } = useWindowDimensions();


  return (
    <>
      <Header pageTitle="Como doar" />
      <div className={styles.container}>
        <div className={styles.stripe}></div>
        <div className={styles.firstSection} style={{ height }}>
          <div className={styles.detailsContainer}>
            
              <article>
                <h1>
                  Deseja doar ou receber material escolar? Vem com a gente!
                </h1>
                <span>
                  Conectamos famílias que precisam a pessoas que querem ajudar
                </span>
              </article>
            
            <img src={logo} alt="Menina segurando lápis" />
          </div>
          <div className={styles.seeMore}>
            <a href="#choose">
              <FiChevronsDown size={35} />
            </a>
          </div>
        </div>
        <div className={styles.chooseProfile}>
          <h1 id="choose">Escolha seu perfil</h1>
        </div>

        <div className={styles.profiles}>
          <Link to="/parent">
            <section>
              <h4>Famílias</h4>
              <img src={family} alt="Família" />
              <span>
                Se você quer saber como fazer para receber uma doação <br />
                clique aqui
              </span>
            </section>
          </Link>
          <Link to="/donor">
            <section>
              <h4>Doadores</h4>
              <img src={hand} alt="Mão segurando coração" />
              <span>
                Se você quer saber como fazer uma doação <br />
                <Link to="/donor">clique aqui</Link>
              </span>
            </section>
          </Link>
        </div>

        <div className={styles.about}>
          <h1>Por que este projeto é importante?</h1>
          <p>
            Confira as informações que tem relevância no cenário social das
            crianças que realmente precisam de material escolar
          </p>

          <div>
            <img src={book} alt="Livro" />
            <section>
              <article>
                <h5>+ de 70%</h5>
                <p>Dos alunos são matriculados em escolas públicas</p>
              </article>
              <article>
                <h5>+ de 9 milhões</h5>
                <p>De crianças e adolescentes vivem na extrema pobreza</p>
              </article>
              <article>
                <h5>+ de 11 milhões</h5>
                <p>De crianças ainda não foram alfabetizadas</p>
              </article>
              <article>
                <h5>8,8%</h5>
                <p>Dos jovens estão fora da escola</p>
              </article>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
