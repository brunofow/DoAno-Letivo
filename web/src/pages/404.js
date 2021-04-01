import Lottie from 'react-lottie';
import { navigate } from '@reach/router';
import Button from '../components/Button';
import animationData from '../animations/./lf30_editor_qoryo3de.json'
import styles from '../styles/pages/NotFound.module.css'

export default function NotFound(){

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings:{
        preserveAspectRatio: 'xMidYMid slice'
    }
} 
    return (
    <div className={styles.container}>
        <Lottie isClickToPauseDisabled={true} width={950} height={550} options={defaultOptions} />
        <h1>OPS........Página não encontrada</h1>
        <Button onClick={() => navigate('/')} >Voltar para página inicial</Button>
    </div>
)
}