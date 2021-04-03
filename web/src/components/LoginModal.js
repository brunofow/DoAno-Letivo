import { useContext, useRef, useState } from "react";
import { navigate } from "@reach/router";
import styles from "../styles/components/LoginModal.module.css";
import { Form } from "@unform/web";
import * as Yup from "yup";
import api from "../services/api";
import Spinner from "./Spinner";
import Input from "./Input";
import Button from "./Button";
import { FiChevronLeft } from "react-icons/fi";
import { FormContext } from "../contexts/FormContext";
export default function LoginModal({ setIsModalOpen, donor }) {
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLoginModalOpen, setIsRegisterModalOpen } = useContext(FormContext);

  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    if(isLoading) return;

    setIsLoading(true);
    const sendData = {
      accountType: donor ? "donor" : "parent",
      ...data,
    };
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().email("Deve ser um email válido").required("E-mail deve ser informado"),
        password: Yup.string().min(4, "Deve ter 4 caracteres no mínimo").required("A senha deve ser informada")
      })

      await schema.validate(data, {
        abortEarly: false
      })

      const response = await api.post("/login", sendData);

      if (response.data.user_id) {
      
      const user_id = response.data.user_id;
      {donor ? localStorage.setItem("donor_id", user_id) : localStorage.setItem("parent_id", user_id)}
      { localStorage.setItem("secret_key", response.data.secret_key)}
      donor ? navigate("/listStudents") : navigate("/listChildrens");
      reset();
      setIsLoginModalOpen(false);
    } else {
      alert(response.data.error);
    }
    } catch (error) {
      const validationErrors = {};

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
      }

      formRef.current.setErrors(validationErrors);
      console.log(validationErrors);
    }
    setIsLoading(false);
  }

  function dontHaveRegister() {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        { !isLoading && <FiChevronLeft onClick={() => setIsLoginModalOpen(false)} size={40} />}
        <Form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder={"E-mail"} />
          <Input type="password" name="password" placeholder="Senha"></Input>
          <Button type="submit">
            {isLoading ? <Spinner size={40} /> : "Entrar"}
          </Button>
          { !isLoading && <a onClick={dontHaveRegister} >Não possui cadastro? Clique aqui</a>}
        </Form>
      </div>
    </div>
  );
}
