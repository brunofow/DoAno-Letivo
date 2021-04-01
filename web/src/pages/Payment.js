import { useRef } from 'react';
import Button from '../components/Button'
import { FiChevronLeft } from 'react-icons/fi';
import { navigate } from '@reach/router';
import { Form } from '@unform/web';
import Input from '../components/Input'
import styles from '../styles/pages/Payment.module.css'
export default function Payment(){
  const formRef = useRef(null);

  function handleSubmit(data, { reset }) {
    console.log(data);
  }
  
    return(
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
            <Form formRef={formRef} onSubmit={handleSubmit} className={styles.form} >
            <Input name="name" type="text" placeholder="Nome completo" autocomplete="off"/>
            <div className={styles.buttonsContainer} >
                <Button type="submit">Pagar por QR Code</Button>
                <Button type="submit">Pagar por código PIX</Button>
            </div>
            </Form>
         
            </div>
        </div>
    )
}