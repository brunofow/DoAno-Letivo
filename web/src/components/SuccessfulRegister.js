import { FcCheckmark } from "react-icons/fc";
import { Link } from '@reach/router';
import Button from "./Button";
import styles from "../styles/components/SuccessfulRegister.module.css";

export default function SuccessfulRegister({ setIsModalOpen }) {

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div>
          <FcCheckmark size={30} />
        </div>
        <p>Filho(a) cadastrado com sucesso!</p>
        <p>Deseja cadastrar mais um filho?</p>

        <Link to="/registerStudent">
          <Button>Cadastrar</Button>
        </Link>
        <Link to="/listChildrens">
          <Button >Voltar</Button>
        </Link>
      </div>
    </div>
  );
}
