import { useContext, useEffect, useRef, useState } from "react";
import { navigate } from "@reach/router";
import styles from "../styles/components/RegisterModal.module.css";
import { Form } from "@unform/web";
import * as Yup from "yup";
import api from "../services/api";
import Input from "./Input";
import Button from "./Button";
import { FiChevronLeft } from "react-icons/fi";
import { FormContext } from "../contexts/FormContext";
import Spinner from "./Spinner";

export default function RegisterModal({ donor }) {
  const [isLoading, setIsLoading] = useState(false);
  const { setIsRegisterModalOpen, setIsLoginModalOpen, actualKit, actualEmail } = useContext(FormContext);
  
  const formRef = useRef(null);

  useEffect(() => {
    if(actualEmail) {
      formRef.current.setData({
        email: actualEmail,
        name: '',
        emittingOrgan: '',
        password: '',
        confirmPassword: ''
      })
    }
  }, [])

  async function handleSubmit(data, { reset }) {
    if (isLoading) return;

    setIsLoading(true);
    const sendData = {
      accountType: donor ? "donor" : "parent",
      ...data,
    };
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().min(4, "Deve ter 4 caracteres no mínimo").required("Nome é obrigatório"),
        email: Yup.string().email("Deve ser um email válido").required("E-mail é obrigatório"),
        rg: Yup.number().required().typeError("Rg é obrigatório"),
        emittingOrgan: Yup.string().min(3).required("Órgão emissor é obrigatório"),
        password: Yup.string().min(4, "Deve ter 4 caracteres no mínimo").required("É necessário informar uma senha"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Senhas não conferem").required("É necessário confirmar a senha")
      })

      await schema.validate(data, {
        abortEarly: false
      })

      const response = await api.post("/register", sendData);

      if (response.data.id) {
        const user_id = response.data.id;
        {
          donor
            ? localStorage.setItem("donor_id", user_id)
            : localStorage.setItem("parent_id", user_id);
        }
        donor ? navigate("/listStudents", { state: { actualKit }}) : navigate("/registerStudent");
        setIsRegisterModalOpen(false);
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

  function haveLogin() {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        { !isLoading && <FiChevronLeft
          onClick={() => setIsRegisterModalOpen(false)}
          size={40}
        />}
        <Form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder={donor ? "Nome" : "Nome do responsável"}
          />
          <Input type="email" name="email" placeholder="E-mail" />
          <div className={styles.rg}>
            <Input name="rg" placeholder="RG" type="number" />
            <Input name="emittingOrgan" placeholder="Órgão Emissor" />
          </div>
          <Input
            name="phone"
            type="number"
            placeholder={donor ? "Telefone" : "Telefone do responsável"}
          />
          <Input type="password" name="password" placeholder="Senha" />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
          />

          <div className={styles.buttonContainer} >
          <Button type="submit">
            {isLoading ? <Spinner size={40} /> : "Cadastrar"}
          </Button>
          { !isLoading && <a onClick={haveLogin}>Já possui cadastro? Clique aqui</a>}
          </div>
        </Form>
      </div>
    </div>
  );
}
