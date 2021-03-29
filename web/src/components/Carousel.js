import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FcCheckmark } from "react-icons/fc";
import Button from "./Button";
import styles from "../styles/components/Carousel.module.css";

export default function CarouselComponent({ data }) {

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
          console.log(currentSlide)
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
          <div key={item.id} id={item.id} className={styles.card}>
            <div className={styles.bean}></div>
            <header>
              <h3>{item.title}</h3>
            </header>
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
              <Button>Escolher kit</Button>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
