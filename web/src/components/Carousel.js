import { useContext, useEffect, useState } from "react";
import { IntlProvider, FormattedNumber } from "react-intl";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FcCheckmark } from "react-icons/fc";
import Button from "./Button";
import styles from "../styles/components/Carousel.module.css";
import { FormContext } from '../contexts/FormContext';

export default function CarouselComponent({ data, price }) {
  const { setIsRegisterModalOpen, setActualKit } = useContext(FormContext);
  const [previousItem, setPreviousItem] = useState(null);
  const [currentItem, setCurrentItem] = useState(0);

  function handleOpenRegisterModal(kit) {
    window.scrollTo(0, 0);
    setIsRegisterModalOpen(true);
    setActualKit(kit);
  }

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".react-multi-carousel-item--active"
    );
    const actualItem = elements[1]?.getElementsByClassName("actualCard")[0];
    actualItem?.classList.add(styles.selected);
    setPreviousItem(actualItem);

    if (previousItem != actualItem) {
      previousItem?.classList.remove(styles.selected);
    }
  }, [currentItem]);

  useEffect(() => {
    setTimeout(() => {
      const elements = document.querySelectorAll(
        ".react-multi-carousel-item--active"
      );
      console.log(elements[1]);
      console.log(elements[1]?.getElementsByClassName("actualCard")[0]);
      const actualItem = elements[1]?.getElementsByClassName("actualCard")[0];
      actualItem?.classList.add(styles.selected);
      setPreviousItem(actualItem);

      if (previousItem != actualItem) {
        previousItem?.classList.remove(styles.selected);
      }
    }, 1000);
  }, [data]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        afterChange={(previousSlide, { currentSlide, onMove }) => {
          setCurrentItem(currentSlide);
        }}
        responsive={responsive}
        arrows={true}
        className="carousel-container"
        containerClass="carousel-container"
        itemClass="carousel-item"
        keyBoardControl={false}
        draggable
        focusOnSelect={false}
        infinite
      >
        {data.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className={`${styles.card} actualCard`}
          >
            <div className={styles.bean}></div>
            <IntlProvider locale="pt">
              <header>
                <h3>{item.title}</h3>
                { price && <h1>
                  <FormattedNumber
                    value={item.price}
                    style="currency"
                    currency="BRL"
                  />
                </h1>}
              </header>
            </IntlProvider>
            <ul>
              {item.description.map((descriptionItem) => (
                <li>
                  <span>
                    {" "}
                    <FcCheckmark /> {descriptionItem}{" "}
                  </span>
                </li>
              ))}
            </ul>
            <a>
              <Button onClick={() => handleOpenRegisterModal(item)} >Escolher kit</Button>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
