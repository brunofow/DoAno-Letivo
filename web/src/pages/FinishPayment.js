import { useRef, useState, useEffect } from 'react';
import SuccessfulPayment from '../components/SuccessfulPayment';
import Payment from '../components/Payment';
import Button from '../components/Button'
import { FiChevronLeft } from 'react-icons/fi';
import { navigate } from '@reach/router';
import { Form } from '@unform/web';
import Input from '../components/Input'
import styles from '../styles/pages/FinishPayment.module.css'

export default function FinishPayment(){
  const formRef = useRef(null); 
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [ isSuccessfulPaymentOpen, setSuccessfulPaymentOpen ] = useState(false);
  const [ isQrCode, setIsQrCode ] = useState(false);
  
  
  function handlePay(data, { reset }) {
    setIsPaymentModalOpen(true);
  }

  useEffect(() => {
    console.log('Qr code', isQrCode);
  }, [isQrCode])
  
    return(
       <>
        <div className={styles.container}>
            <div className={styles.paymentContainer}>
            <FiChevronLeft onClick={() => navigate('/listStudents')} size={40} />
            <div className={styles.studentDetails} >   
                <img src="http://2.bp.blogspot.com/-CG0eRicN0Ds/UP6e7ZPgNPI/AAAAAAAAAo4/v9q_15DMHIU/s1600/homeless-children.jpg" alt="Estudante" /> 
              <p>Kit Educação Infantil - Infantil I e II</p>
            </div>
            <div className={styles.paymentDetails}>
                <div>
                <span>Valor do produto</span> <span>32,99</span>
                </div>
                <p>Vendido e entregue por livraria taltaltal</p>
                <span className={styles.line}></span>
            </div>
            <Form formRef={formRef} onSubmit={handlePay} className={styles.form} >
            <Input name="name" type="text" placeholder="Nome completo" autocomplete="off"/>
            <div className={styles.buttonsContainer} >
                <Button onClick={() => setIsQrCode(true)} type="submit">Pagar por QR Code</Button>
                <Button onClick={() => setIsQrCode(false)} type="submit">Pagar por chave PIX</Button>
            </div>
            </Form>
         
            </div>
        </div>
        {isPaymentModalOpen && <Payment setIsPaymentModalOpen={setIsPaymentModalOpen} setSuccessfulPaymentOpen={setSuccessfulPaymentOpen} qrCode={isQrCode} />}
        { isSuccessfulPaymentOpen && <SuccessfulPayment />}
       </>
    )
}