import styles from "../styles/components/RegisterModal.module.css";
import { Form } from "@unform/web";
import Input from "./Input";
import Button from "./Button";
import { FiChevronLeft } from "react-icons/fi";
import { useRef } from "react";

export default function RegisterModal({ setIsModalOpen, donor }) {
  const formRef = useRef(null);

  function handleSubmit(data, { reset }) {
    console.log(data);

    reset();
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <FiChevronLeft onClick={() => setIsModalOpen(false)} size={40} />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder={donor ? "Nome" : "Nome do responsável"} />
          <Input type="email" name="email" placeholder="E-mail" />
          <div className={styles.rg} >
            <Input name="rg" placeholder="RG" />
            <Input name="emmitingOrgan" placeholder="Órgão Emissor" />
          </div>
          <Input name="phone" type="number" placeholder={donor ? "Telefone" : "Telefone do responsável"} />
          <Input type="password" name="password" placeholder="Senha" />
          <Input
            type="password"
            name="confirme"
            placeholder="Confirme sua senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </div>
    </div>
  );
}