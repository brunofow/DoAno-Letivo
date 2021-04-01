import { Router } from '@reach/router';

import Home from './pages/Home';
import Donor from './pages/Donor';
import Parent from './pages/Parent';
import RegisterStudent from './pages/RegisterStudent';
import SuccessfulRegister from './pages/SuccessfulRegister';
import ListChildrens from './pages/ListChildrens';

export default function Routes() {
  return (
    <Router>
      <Home path="/" />
      <Donor path="/donor" />
      <Parent path="/parent" />
      <RegisterStudent path="/registerStudent" />
      <SuccessfulRegister path="/successful" />
      <ListChildrens path="/listChildrens" />
    </Router>
  )
}