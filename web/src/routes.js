import { Router } from '@reach/router';

import Home from './pages/Home';
import Donor from './pages/Donor';
import Parent from './pages/Parent';
import Payment from './components/Payment';
import RegisterStudent from './pages/RegisterStudent';
import ListChildrens from './pages/ListChildrens';
import ListStudents from './pages/ListStudents';
import FinishPayment from './pages/FinishPayment';
import NotFound from './pages/404';


export default function Routes() {
  return (
    <Router>
      <Home path="/" />
      <Donor path="/doador" />
      <Parent path="/familia" />
      <ListStudents path="/estudantes"/>
      <RegisterStudent path="/cadastrarEstudante" />
      <ListChildrens path="/filhos" />
      <FinishPayment path="/finalizarPagamento" />
      <NotFound default/>
    </Router>
  )
}