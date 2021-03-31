import styles from "../styles/pages/RegisterStudent.module.css";
import { Form } from "@unform/web";
import Select from "react-select";
import Input from "../components/Input";
import Button from '../components/Button';
import childrens from "../styles/images/undraw_children_4rtb 1.svg";
import { useRef } from "react";

function RegisterStudent() {
  const formRef = useRef(null);

  const handleSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className={styles.container}>
      <img src={childrens} alt="Crianças brincando" />
      <div className={styles.formContainer}>
        <h3>Cadastre seu filho</h3>
        <div className={styles.form}>
          <Form ref={formRef} onSubmit={handleSubmit} >
            <Input name="name" placeholder="Nome completo da criança" />
            <Select className={styles.select} placeholder="Escolha o kit desejado" />
            <Select className={styles.select} placeholder="Nome da escola" />
            <Input name="registration" placeholder="Número da matrícula" />
            <textarea placeholder="Fale um pouco sobre seu filho" ></textarea>
            <Button type="submit">Cadastrar</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RegisterStudent;
