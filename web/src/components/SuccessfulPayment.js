import styles from '../styles/components/SuccessfulPayment.module.css';
import { FcCheckmark } from "react-icons/fc";
import { navigate } from '@reach/router';
import Button from './Button';
import QRCode from "react-qr-code";

export default function SuccessfulPayment() {
  return (
    <div className={styles.overlay}>
    <div className={styles.modal}>
      <div className={styles.succesfulText} >
      <div className={styles.successIcon} >
          <FcCheckmark size={30} />
        </div>
      <strong>
        Pagamento bem sucedido
      </strong>
      <p>Você recebeu um <strong>desconto de 10% na livraria lalala</strong>, basta apresentar esse QR Code no momento do pagamento</p>
      </div>
      <QRCode value="8a79e30d-p71d-487a-8481-bf08d101f96y" />
      <div className={styles.loading}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
      <Button onClick={() => navigate("/listStudents")} >Voltar</Button>
    </div>
</div>
  )
}