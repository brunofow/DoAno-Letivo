import { useState, useEffect } from "react";
import { FiX } from 'react-icons/fi';
import { navigate } from "@reach/router";
import Select from "react-select";
import Spinner from "../components/Spinner";
import styles from "../styles/pages/ListStudents.module.css";
import api from "../services/api";

export default function ListStudents() {
  const [students, setStudents] = useState([]);
  const [schools, setSchools] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleLogout() {
    localStorage.removeItem("donor_id");
    navigate("/donor");
  }

  async function loadStudents() {
    setIsLoading(true);
    const response = await api.get("/students");

    setStudents(response.data);
    setIsLoading(false);
  }

  async function loadSchools() {
    const response = await api.get("/schools");

    console.log(response.data);

    const options = response.data.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });

    setSchools(options);
  }

  useEffect(() => {
    loadStudents();
    loadSchools();
  }, []);

  const customStyles = {
    control: (provided, state) => ({
      display: "flex",
      backgroundColor: "#FFF",
      height: 60,
      border: state.isFocused ? "2px solid #000" : "2px solid #000",
      borderRadius: 6,
    }),
    dropdownIndicator: (provided, state) => ({
      width: "6rem",
      display: "flex",
      justifyContent: "flex-end",
      marginRight: ".4rem",
    }),
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div onClick={handleLogout} >
            <FiX size={25} />
          </div>
          <h1>DoAno Letivo</h1>
          <Select
            className={styles.select}
            styles={customStyles}
            placeholder=" "
            options={schools}
          />
        </header>
        {isLoading ? (
          <Spinner size={50} color="#1E212B" />
        ) : (
          <>
            {students.length < 1 ? (
              <h1 className={styles.noStudents}>
                Nenhum aluno cadastrado no momento
              </h1>
            ) : (
              <div className={styles.list}>
                {students.map((item) => (
                  <div
                    onClick={() => navigate("/finishPayment")}
                    key={item.id}
                    className={styles.card}
                  >
                    <img
                      src="http://2.bp.blogspot.com/-CG0eRicN0Ds/UP6e7ZPgNPI/AAAAAAAAAo4/v9q_15DMHIU/s1600/homeless-children.jpg"
                      alt="Estudante"
                    />
                    <article className={styles.article}>
                      <p>
                        <strong>{item.name}</strong>
                      </p>
                      <p>Escola Municipal Degrau do Saber</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                      </p>
                    </article>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
