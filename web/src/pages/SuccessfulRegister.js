import { FcCheckmark } from "react-icons/fc";
import { Link } from '@reach/router';
import Button from "../components/Button";
import styles from "../styles/pages/SuccessfulRegister.module.css";
import { navigate } from "@reach/router";
import { useEffect } from "react";

export default function SuccessfulRegister() {

  return (
    <div className={styles.container}>
      <div className={styles.successfulBox}>
        <div>
          <FcCheckmark size={30} />
        </div>
        <p>Filho(a) cadastrado com sucesso!</p>
        <p>Deseja cadastrar mais um filho?</p>

        <Link to="/registerStudent">
          <Button>Cadastrar</Button>
        </Link>
        <Link to="/parent">
          <Button >Voltar</Button>
        </Link>
      </div>
    </div>
  );
}
