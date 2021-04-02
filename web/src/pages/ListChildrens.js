import styles from "../styles/pages/ListChildrens.module.css";
import api from '../services/api';
import { FiX, FiPlus } from "react-icons/fi";
import { HiOutlinePencil, HiPencil } from 'react-icons/hi';
import { useEffect, useState } from "react";
import { navigate } from '@reach/router';
import Spinner from "../components/Spinner";



export default function ListChildrens() {
  const [ isPencilHovered, setIsPencilHovered ] = useState(false);
  const [ childrens, setChildrens ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

   useEffect(() => {
    if(!localStorage.getItem("parent_id")){
      navigate('/parent')
    }
  }, [])

  async function loadChildrens() {
    setIsLoading(true);
    const parent_id = localStorage.getItem("parent_id");
    const response = await api.get(`/students/parent/${parent_id}`)

    setChildrens(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    loadChildrens();
  }, [])

  function handleLogout() {
    localStorage.removeItem("parent_id");
    navigate("/parent");
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div onClick={handleLogout} >
          <FiX size={25} />
        </div>
        <h1>Filhos cadastrados</h1>
      </header>
      {isLoading ? <Spinner size={50} color="#1E212B" /> : (
        <>
        <div className={styles.cards}>
        {childrens.map(item => (
          <div className={styles.card}>
          <img src={`http://localhost:8080/files/${item.avatar}`} alt="Estudante" />
          <article>
          <strong>{item.name}</strong>
          <p>Escola Municipal Degrau do Saber</p>
          <p>{item.description}</p>
          </article>
          <div className={styles.edit}
            onMouseEnter={() => setIsPencilHovered(true)}
            onMouseLeave={() => setIsPencilHovered(false)}
          >
            { isPencilHovered ? <HiPencil size={32} /> : <HiOutlinePencil size={30} />}
          </div>
        </div>
        ))}
      </div>

        </>
      )}
      <button onClick={() => navigate("/registerStudent", { state: { registered: true }})} >
        <FiPlus size={40} />
      </button>
    </div>
  );
}
