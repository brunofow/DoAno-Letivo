import { useContext, useRef, useState } from "react";
import { navigate } from '@reach/router';
import styles from "../styles/components/LoginModal.module.css";
import { Form } from "@unform/web";
import api from "../services/api";
import Spinner from './Spinner';
import Input from "./Input";
import Button from "./Button";
import { FiChevronLeft } from "react-icons/fi";
import { FormContext } from "../contexts/FormContext";
export default function LoginModal({ setIsModalOpen, donor }) {
  const [ isLoading, setIsLoading ] = useState(false);
  const { setIsLoginModalOpen } = useContext(FormContext);

  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    if(isLoading) return;

    setIsLoading(true);
    const sendData = {
      accountType: donor ? "donor" : "parent",
      ...data,
    };
    const response = await api.post("/login", sendData);

    if (response.data.user_id) {
      localStorage.setItem("user_id", response.data.user_id);
      donor ? navigate("/listStudents") : navigate("/listChildrens");
      reset();
      setIsLoginModalOpen(false);
    }
    setIsLoading(false);
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <FiChevronLeft onClick={() => setIsLoginModalOpen(false)} size={40} />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder={"E-mail"} />
          <Input type="password" name="password" placeholder="Senha"></Input>
          <Button type="submit">
            { isLoading ? <Spinner size={40} /> : 'Entrar'}
          </Button>
        </Form>
      </div>
    </div>
  );
}
