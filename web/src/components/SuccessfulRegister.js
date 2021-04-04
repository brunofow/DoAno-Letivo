import { FcCheckmark } from "react-icons/fc";
import { Link } from '@reach/router';
import Button from "./Button";
import styles from "../styles/components/SuccessfulRegister.module.css";

export default function SuccessfulRegister({ setIsModalOpen }) {

  function handleRegisterAgain() {
    setIsModalOpen(false);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div>
          <FcCheckmark size={30} />
        </div>
        <p>Filho(a) cadastrado com sucesso!</p>
        <p>Deseja cadastrar mais um filho?</p>
        
          <Button onClick={handleRegisterAgain}>Cadastrar</Button>
        <Link to="/filhos">
          <Button >Voltar</Button>
        </Link>
      </div>
    </div>
  );
}
