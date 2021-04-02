import styles from "../styles/pages/ListChildrens.module.css";
import { FiX, FiPlus } from "react-icons/fi";
import { HiOutlinePencil, HiPencil } from 'react-icons/hi';
import { useEffect, useState } from "react";
import { navigate } from '@reach/router';

export default function ListChildrens() {
  const [ isPencilHovered, setIsPencilHovered ] = useState(false);
 useEffect(() => {
    if(!localStorage.getItem("parent_id")){
      navigate('/parent')
    }
  }, [])
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <FiX size={25} />
        </div>
        <h1>Filhos cadastrados</h1>
      </header>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="http://2.bp.blogspot.com/-CG0eRicN0Ds/UP6e7ZPgNPI/AAAAAAAAAo4/v9q_15DMHIU/s1600/homeless-children.jpg" alt="Estudante" />
          <article>
          <strong>Maurício Pereira</strong>
          <p>Escola Municipal Degrau do Saber</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo consequatur sunt, eius cum, velit dolore pariatur</p>
          </article>
          <div className={styles.edit}
            onMouseEnter={() => setIsPencilHovered(true)}
            onMouseLeave={() => setIsPencilHovered(false)}
          >
            { isPencilHovered ? <HiPencil size={32} /> : <HiOutlinePencil size={30} />}
          </div>
        </div>
      </div>

      <button>
        <FiPlus size={40} />
      </button>
    </div>
  );
}
