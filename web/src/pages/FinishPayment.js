import { useRef, useState, useEffect } from 'react';
import { IntlProvider, FormattedNumber } from 'react-intl';
import SuccessfulPayment from '../components/SuccessfulPayment';
import Payment from '../components/Payment';
import Button from '../components/Button'
import { FiChevronLeft } from 'react-icons/fi';
import { navigate } from '@reach/router';
import { Form } from '@unform/web';
import Input from '../components/Input'
import styles from '../styles/pages/FinishPayment.module.css'

export default function FinishPayment(props){
  const formRef = useRef(null); 
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [ isSuccessfulPaymentOpen, setSuccessfulPaymentOpen ] = useState(false);
  const [ isQrCode, setIsQrCode ] = useState(false);
  const [ student, setStudent ] = useState(props.location.state?.item);

  useEffect(() => {
    if(!props.location.state?.item) {
      navigate('/');
    }
  }, [])
  
  
  function handlePay(data, { reset }) {
    setIsPaymentModalOpen(true);
  }
    return(
       <>
        <div className={styles.container}>
            <div className={styles.paymentContainer}>
            <FiChevronLeft onClick={() => navigate('/listStudents')} size={40} />
            <div className={styles.studentDetails} >   
                <img src={`http://localhost:8080/files/${student?.avatar}`} alt="Estudante" /> 
              <p>{student?.kit.title}</p>
            </div>
            <IntlProvider locale="pt">
            <div className={styles.paymentDetails}>
                <div>
                <span>Valor do produto</span> <span>
                  <FormattedNumber value={student?.kit.price} style="currency" currency="BRL" />
                </span>
                </div>
                <p>Vendido e entregue por livraria taltaltal</p>
                <span className={styles.line}></span>
            </div>
            </IntlProvider>
            <Form formRef={formRef} onSubmit={handlePay} className={styles.form} >
            <Input name="name" type="text" placeholder="Nome completo" autocomplete="off"/>
            <div className={styles.buttonsContainer} >
                <Button onClick={() => setIsQrCode(true)} type="submit">Pagar por QR Code</Button>
                <Button onClick={() => setIsQrCode(false)} type="submit">Pagar por chave PIX</Button>
            </div>
            </Form>
         
            </div>
        </div>
        {isPaymentModalOpen && <Payment student={student} setIsPaymentModalOpen={setIsPaymentModalOpen} setSuccessfulPaymentOpen={setSuccessfulPaymentOpen} qrCode={isQrCode} />}
        { isSuccessfulPaymentOpen && <SuccessfulPayment />}
       </>
    )
}