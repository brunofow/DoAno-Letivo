import { useEffect, useRef, useState } from "react";
import { navigate } from '@reach/router';
import styles from "../styles/pages/RegisterStudent.module.css";
import api from '../services/api';
import { Form } from "@unform/web";
import Select from '../components/Select';
import Input from "../components/Input";
import Button from '../components/Button';
import childrens from "../styles/images/undraw_children_4rtb 1.svg";
import ImageInput from "../components/ImageInput";

function RegisterStudent() {
  const formRef = useRef(null);
  const [ schools, setSchools ] = useState([]);
  const [ kits, setKits ] = useState([]);
  const [ description, setDescription ] = useState('');

  async function loadOptions() {
    const schoolResponse = await api.get('/schools');
    const kitResponse = await api.get('/kits');

    const schoolOptions = schoolResponse.data.map(item => {
      return {
        value: item.id,
        label: item.name
      }
    })

    const kitOptions = kitResponse.data.map(item => {
      return {
        value: item.id,
        label: item.title
      }
    })

    setSchools(schoolOptions);
    setKits(kitOptions);
  }

  useEffect(() => {
    loadOptions();
  }, [])

  const handleSubmit = async (data, {reset}) => {
    const formData = new FormData();
    formData.append("avatar", data.avatar);
    formData.append("name", data.name);
    formData.append("school_id", data.school_id);
    formData.append("kit_id", data.kit_id);
    formData.append("enrollment", data.enrollment);
    formData.append("description", description);

    const user_id = localStorage.getItem("user_id");

    const response = await api.post(`/students/${user_id}`, formData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
    }
    )

    reset();
    navigate('/successful');
  }

  return (
    <div className={styles.container}>
      <img src={childrens} alt="Crianças brincando" />
      <div className={styles.formContainer}>
        <h3>Cadastre seu filho</h3>
        <div className={styles.form}>
          <Form ref={formRef} onSubmit={handleSubmit} >
            <ImageInput name="avatar" />
            <Input name="name" placeholder="Nome completo da criança" />
            <Select name="kit_id" options={kits} className={styles.select} placeholder="Escolha o kit desejado" />
            <Select name="school_id" options={schools} className={styles.select} placeholder="Nome da escola" />
            <Input name="enrollment" placeholder="Número da matrícula" />
            <textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Fale um pouco sobre seu filho" ></textarea>
            <Button type="submit">Cadastrar</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RegisterStudent;