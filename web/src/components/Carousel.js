import { useState, useRef } from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import styles from "../styles/components/Carousel.module.css";

export default function CarouselComponent() {
  const [current, setCurrent] = useState();

  function handleCarouselNext(target) {
    if (current !== target) {
      current?.classList.remove(styles.selected);

      setCurrent(target);
      setTimeout(() => {
        target.classList.add(styles.selected);
      }, 100);
    }

    setCurrent(target);
    setTimeout(() => {
      target.classList.add(styles.selected);
    }, 100);
  }

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        plugins={[
          "centered",
          "infinite",
          "clickToChange",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        animationSpeed={300}
      >
        <div
          onClick={(event) => handleCarouselNext(event.target)}
          className={`${styles.card}`}
        >
          <header>Kit Educação Infantil - Infantil I e II </header>
          <span>Agenda Educação Infantil - 01 unidade</span>
          <span>Agenda Educação Infantil - 01 unidade</span>
          <span>Agenda Educação Infantil - 01 unidade</span>
          <span>Agenda Educação Infantil - 01 unidade</span>
          <span>Agenda Educação Infantil - 01 unidade</span>

          <button>Escolher Kit</button>
        </div>
        <div
          onClick={(event) => handleCarouselNext(event.target)}
          className={`${styles.card}`}
        >
          <header>Kit Educação Infantil - GRande </header>
          <span>Agenda Educação Infantil - 01 unidade</span>
          <span>Agenda Educação Infantil - 01 unidade</span>
          <span>Agenda Educação Infantil - 01 unidade</span>
          <span>Agenda Educação Infantil - 01 unidade</span>
          <span>Agenda Educação Infantil - 01 unidade</span>

          <button>Escolher Kit</button>
        </div>
        <div
          onClick={(event) => handleCarouselNext(event.target)}
          className={`${styles.card}`}
        >
          <header>Kit Educação Infantil - Médio </header>
          <span>Agenda Educação Infantil - 01 unidade</span>
          <span>Agenda Educação Infantil - 01 unidade</span>
          <span>Agenda Educação Infantil - 01 unidade</span>
          <span>Agenda Educação Infantil - 01 unidade</span>
          <span>Agenda Educação Infantil - 01 unidade</span>

          <button>Escolher Kit</button>
        </div>
      </Carousel>
    </div>
  );
}
