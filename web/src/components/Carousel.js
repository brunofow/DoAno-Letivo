import { useState, useEffect } from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { FcCheckmark } from 'react-icons/fc';

import styles from "../styles/components/Carousel.module.css";

export default function CarouselComponent({ data }) {
  const [current, setCurrent] = useState();

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('1')?.click();
    }, 1000)
  }, [])

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
        {data.map(item => (
          <div key={item.id} id={item.id} className={styles.card} onClick={event => handleCarouselNext(event.target)} >
            <div className={styles.bean} ></div>
            <header><h3>{item.title}</h3></header>
            <ul>
            {item.description.map(descriptionItem => (
              <li>
                <span> <FcCheckmark /> {descriptionItem} </span>
              </li>
            ))}
            </ul>
            <button className={styles.} >

            </button>
          </div>
        ))}       
      </Carousel>
    </div>
  );
}
