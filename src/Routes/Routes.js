
export default App;
import Login from "../Views/Login/Login";
import Users from "../Views/Users/Users"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
<Router>
   <Route exact path="/users" component={Users}/>
   <Route path="/products" component= {Products}/>
</Router>