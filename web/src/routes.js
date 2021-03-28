import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Donor from './pages/Donor';
import Parent from './pages/Parent';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/donor" component={Donor} />
        <Route path="/parent" component={Parent}/>
      </Switch>
    </BrowserRouter>
  )
}