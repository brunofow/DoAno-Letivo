import {useEffect} from "react";
import QRCode from "react-qr-code";
import styles from '../styles/components/Payment.module.css';

export default function Payment({ qrCode, setIsPaymentModalOpen, setSuccessfulPaymentOpen }) {

  useEffect(() => {
    setTimeout(() => {
      setIsPaymentModalOpen(false);
      setSuccessfulPaymentOpen(true);
    }, 2000)
  }, [])

    return (
      <div className={styles.overlay}>
          <div className={styles.modal}>
            <strong>
              {qrCode ? 'Escaneie o QR Code para efetuar o pagamento' : 'Faça um pix utilizando esta chave'}
            </strong>
            { !qrCode && <div className={styles.pixKey} >8a79e307-p72d-487a-8481-bf08d101f96y</div>}
            { qrCode && <QRCode value="8a79e30d-p71d-487a-8481-bf08d101f96y" />}
            <div className={styles.loading}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
      
    )
  }