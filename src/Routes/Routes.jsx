export default App;
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from "../Views/Login/Login";
import Users from "../Views/Users/Users"


<Router>
  <Route exact path="/users" component={Users} />
  <Route path="/products" component={Products} />
</Router>
