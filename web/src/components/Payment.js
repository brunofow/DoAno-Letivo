import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import styles from "../styles/components/Payment.module.css";

export default function Payment({
  qrCode,
  setIsPaymentModalOpen,
  setSuccessfulPaymentOpen,
}) {
  const [hasPaid, setHasPaid] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasPaid(true);
      finishPayment();
    }, 4000);
  }, []);

  function finishPayment() {
    setTimeout(() => {
      setIsPaymentModalOpen(false);
      setSuccessfulPaymentOpen(true);
    }, 2000);
  }

  function Checkmark() {
    return (
      <div className={styles.successCheckmark}>
        <div className={styles.checkIcon}>
          <span className={`${styles.iconLine} ${styles.lineTip}`}></span>
          <span className={`${styles.iconLine} ${styles.lineLong}`}></span>
          <div className={styles.iconCircle}></div>
          <div className={styles.iconFix}></div>
        </div>
      </div>
    );
  }

  function Dots() {
    return (
      <div className={styles.loading}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    );
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <strong>
          {qrCode
            ? "Escaneie o QR Code para efetuar o pagamento"
            : "Faça um pix utilizando esta chave"}
        </strong>
        {!qrCode && (
          <div className={styles.pixKey}>
            8a79e307-p72d-487a-8481-bf08d101f96y
          </div>
        )}
        {qrCode && <QRCode value="8a79e30d-p71d-487a-8481-bf08d101f96y" />}
        <div className={styles.animation}>
          {hasPaid ? <Checkmark /> : <Dots />}
        </div>
      </div>
    </div>
  );
}
