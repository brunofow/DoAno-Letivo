import { Router } from '@reach/router';

import Home from './pages/Home';
import Donor from './pages/Donor';
import Parent from './pages/Parent';
import Payment from './components/Payment';
import RegisterStudent from './pages/RegisterStudent';
import SuccessfulRegister from './pages/SuccessfulRegister';
import ListChildrens from './pages/ListChildrens';
import ListStudents from './pages/ListStudents';
import FinishPayment from './pages/FinishPayment';
import NotFound from './pages/404';


export default function Routes() {
  return (
    <Router>
      <Home path="/" />
      <Donor path="/donor" />
      <Parent path="/parent" />
      <ListStudents path="/listStudents"/>
      <RegisterStudent path="/registerStudent" />
      <SuccessfulRegister path="/successful" />
      <ListChildrens path="/listChildrens" />
      <FinishPayment path="/finishPayment" />
      <Payment path="/payment"/>
      <NotFound default/>
    </Router>
  )
}