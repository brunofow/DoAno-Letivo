import { Router } from '@reach/router';

import Home from './pages/Home';
import Donor from './pages/Donor';
import Parent from './pages/Parent';
import Payment from './pages/Payment';
import RegisterStudent from './pages/RegisterStudent';
import SuccessfulRegister from './pages/SuccessfulRegister';
import ListStudents from './pages/ListStudents';

export default function Routes() {
  return (
    <Router>
      <Home path="/" />
      <Donor path="/donor" />
      <Parent path="/parent" />
      <ListStudents path="/ListStudents"/>
      <RegisterStudent path="/registerStudent" />
      <SuccessfulRegister path="/successful" />
      <Payment path="/payment"/>
    </Router>
  )
}